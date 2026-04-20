// ===== ガチャ状態管理（サイト全体共有） =====
// cards.js を先に読み込むこと（CARD_DATA / RARITY_CONFIG に依存）

const GACHA_STATE_KEY = 'manaQuiz_gachaState';

// ===== 確率設定 =====
const GACHA_RATES = { ssr: 1, sr: 4, r: 25, n: 70 }; // %
const PITY_THRESHOLD = 30;   // 天井：30回でSSR/SR確定
const GACHA_COST_1  = 100;   // 1回あたりのpt
const GACHA_COST_10 = 900;   // 10連割引

function loadGachaState() {
  try {
    const s = JSON.parse(localStorage.getItem(GACHA_STATE_KEY) || 'null');
    if (s && Array.isArray(s.collected)) {
      if (s.points      === undefined) s.points      = 0;
      if (s.totalEarned === undefined) s.totalEarned = s.points; // 旧データ補完
      if (!Array.isArray(s.pointsLog)) s.pointsLog   = [];
      if (!Array.isArray(s.obtained))  s.obtained    = [...new Set(s.collected)];
      return s;
    }
  } catch(e) {}
  return {
    collected:    [],   // 手持ちカード（重複あり・売却で削除）
    obtained:     [],   // 図鑑記録（初入手のみ記録・永続）
    pityCount:    0,    // 天井カウント
    totalPulls:   0,
    points:       0,    // 現在の保有ポイント（消費で減る）
    totalEarned:  0,    // 累計獲得ポイント（ランク表示用・減らない）
    pointsLog:    [],
  };
}

function saveGachaState(s) {
  try { localStorage.setItem(GACHA_STATE_KEY, JSON.stringify(s)); } catch(e) {}
}

// クイズ正解数 → ガチャ回数（クイズ報酬）
function calcGachaPulls(ok, total) {
  if (total >= 10 && ok === total) return 3;
  if (ok === total && total >= 5)  return 2;
  if (ok >= Math.ceil(total * 0.8)) return 1;
  return 0;
}

// 1枚引く（内部関数）
function drawSingleCard(gachaState) {
  const s = gachaState;
  s.pityCount++;
  s.totalPulls++;

  let card;
  if (s.pityCount >= PITY_THRESHOLD) {
    // 天井：SSR/SR確定（図鑑未登録優先）
    const pool = CARD_DATA.filter(c => c.rarity === 'ssr' || c.rarity === 'sr');
    const fresh = pool.filter(c => !s.obtained.includes(c.id));
    card = (fresh.length > 0 ? fresh : pool)[Math.floor(Math.random() * (fresh.length > 0 ? fresh : pool).length)];
    s.pityCount = 0;
  } else {
    // SSR 1% / SR 4% / R 25% / N 70%
    const roll = Math.random() * 100;
    const rarity = roll < GACHA_RATES.ssr            ? 'ssr'
                 : roll < GACHA_RATES.ssr + GACHA_RATES.sr ? 'sr'
                 : roll < GACHA_RATES.ssr + GACHA_RATES.sr + GACHA_RATES.r ? 'r'
                 : 'n';
    const pool = CARD_DATA.filter(c => c.rarity === rarity);
    card = pool[Math.floor(Math.random() * pool.length)];
  }

  const isNew = !s.obtained.includes(card.id);
  const cfg   = RARITY_CONFIG[card.rarity];
  const pts   = isNew ? cfg.pts : cfg.dupPts;

  s.collected.push(card.id);
  if (isNew) s.obtained.push(card.id);
  s.points      += pts;
  s.totalEarned += pts;
  s.pointsLog.push({ cardId: card.id, pts, isNew, type: 'draw', ts: Date.now() });

  saveGachaState(s);
  return { card, isNew, pts };
}

// ポイント消費ガチャ（1回 or 10連）
function buyGacha(count) {
  const s = loadGachaState();
  const cost = count === 10 ? GACHA_COST_10 : GACHA_COST_1 * count;
  if (s.points < cost) return null; // ポイント不足

  s.points -= cost;
  s.pointsLog.push({ type: 'spend', pts: -cost, ts: Date.now() });
  saveGachaState(s);

  const results = [];
  for (let i = 0; i < count; i++) {
    const freshState = loadGachaState(); // 毎回最新を読む
    results.push(drawSingleCard(freshState));
  }
  return results;
}

// カードを1枚売る
function sellCard(cardId) {
  const s = loadGachaState();
  const idx = s.collected.indexOf(cardId);
  if (idx === -1) return null;

  const card = CARD_DATA.find(c => c.id === cardId);
  if (!card) return null;

  const pts = RARITY_CONFIG[card.rarity].pts;

  s.collected.splice(idx, 1);
  s.points      += pts;
  s.totalEarned += pts;
  s.pointsLog.push({ cardId, pts, isNew: false, type: 'sell', ts: Date.now() });

  saveGachaState(s);
  return { card, pts };
}
