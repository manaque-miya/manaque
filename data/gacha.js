// ===== ガチャ状態管理（サイト全体共有） =====
// cards.js を先に読み込むこと（CARD_DATA / RARITY_CONFIG に依存）

const GACHA_STATE_KEY = 'manaQuiz_gachaState';

function loadGachaState() {
  try {
    const s = JSON.parse(localStorage.getItem(GACHA_STATE_KEY) || 'null');
    if (s && Array.isArray(s.collected)) {
      if (s.points === undefined) s.points = 0;
      if (!Array.isArray(s.pointsLog)) s.pointsLog = [];
      // obtained: 一度でも引いたカードIDのリスト（売っても消えない図鑑記録）
      // 旧データには obtained がないので collected から一意IDを補完
      if (!Array.isArray(s.obtained)) s.obtained = [...new Set(s.collected)];
      return s;
    }
  } catch(e) {}
  return {
    collected: [],   // 手持ちカード（重複あり。売ると1枚削除）
    obtained:  [],   // 図鑑記録（一度入手したIDを保持。売っても消えない）
    pityCount: 0,
    pityThreshold: Math.floor(Math.random() * 6) + 10,
    totalPulls: 0,
    points: 0,
    pointsLog: [],   // { cardId, pts, isNew, type, ts }
  };
}

function saveGachaState(s) {
  try { localStorage.setItem(GACHA_STATE_KEY, JSON.stringify(s)); } catch(e) {}
}

// クイズ正解数 → ガチャ回数
function calcGachaPulls(ok, total) {
  if (total >= 10 && ok === total) return 3;    // 10問全問正解 → 3連
  if (ok === total && total >= 5)  return 2;    // 5問以上全問正解 → 2連
  if (ok >= Math.ceil(total * 0.8)) return 1;  // 80%以上 → 1回
  return 0;
}

// 1枚引く
function drawSingleCard(gachaState) {
  const s = gachaState;
  s.pityCount++;
  s.totalPulls++;

  let card;
  if (s.pityCount >= s.pityThreshold) {
    // 天井：SR確定（図鑑未登録優先）
    const srCards = CARD_DATA.filter(c => c.rarity === 'sr');
    const fresh   = srCards.filter(c => !s.obtained.includes(c.id));
    const pool    = fresh.length > 0 ? fresh : srCards;
    card = pool[Math.floor(Math.random() * pool.length)];
    s.pityCount = 0;
    s.pityThreshold = Math.floor(Math.random() * 6) + 10;
  } else {
    // SR 10% / R 30% / N 60%
    const roll   = Math.random() * 100;
    const rarity = roll < 10 ? 'sr' : roll < 40 ? 'r' : 'n';
    const pool   = CARD_DATA.filter(c => c.rarity === rarity);
    card = pool[Math.floor(Math.random() * pool.length)];
  }

  // 図鑑に初登録かどうかで付与ポイントを決定
  const isNew = !s.obtained.includes(card.id);
  const cfg   = RARITY_CONFIG[card.rarity];
  const pts   = isNew ? cfg.pts : cfg.dupPts;

  s.collected.push(card.id);              // 重複含め手持ちに追加（売却で削除可能）
  if (isNew) s.obtained.push(card.id);   // 図鑑登録（初回のみ）
  s.points += pts;
  s.pointsLog.push({ cardId: card.id, pts, isNew, type: 'draw', ts: Date.now() });

  saveGachaState(s);
  return { card, isNew, pts };
}

// カードを1枚売る
function sellCard(cardId) {
  const s = loadGachaState();
  const idx = s.collected.indexOf(cardId);
  if (idx === -1) return null;  // 手持ちにない

  const card = CARD_DATA.find(c => c.id === cardId);
  if (!card) return null;

  const pts = RARITY_CONFIG[card.rarity].pts;  // 売却価格（レアリティ固定）

  s.collected.splice(idx, 1);  // 手持ちから1枚削除（obtained は変えない）
  s.points += pts;
  s.pointsLog.push({ cardId, pts, isNew: false, type: 'sell', ts: Date.now() });

  saveGachaState(s);
  return { card, pts };
}
