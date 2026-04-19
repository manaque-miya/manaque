// ===== ガチャ状態管理（サイト全体共有） =====
// cards.js を先に読み込むこと（CARD_DATA / RARITY_CONFIG に依存）

const GACHA_STATE_KEY = 'manaQuiz_gachaState';

function loadGachaState() {
  try {
    const s = JSON.parse(localStorage.getItem(GACHA_STATE_KEY) || 'null');
    if (s && Array.isArray(s.collected)) {
      // 旧データにpointsがなければ補完
      if (s.points === undefined) s.points = 0;
      if (!Array.isArray(s.pointsLog)) s.pointsLog = [];
      return s;
    }
  } catch(e) {}
  return {
    collected: [],
    pityCount: 0,
    pityThreshold: Math.floor(Math.random() * 6) + 10,
    totalPulls: 0,
    points: 0,
    pointsLog: [],   // { cardId, pts, isNew, ts } の配列（将来の履歴表示用）
  };
}

function saveGachaState(s) {
  try { localStorage.setItem(GACHA_STATE_KEY, JSON.stringify(s)); } catch(e) {}
}

// クイズ正解数 → ガチャ回数
function calcGachaPulls(ok, total) {
  if (total >= 10 && ok === total) return 3;   // 10問全問正解 → 3連
  if (ok === total && total >= 5)  return 2;   // 5問以上全問正解 → 2連
  if (ok >= Math.ceil(total * 0.8)) return 1; // 80%以上 → 1回
  return 0;
}

// 1枚引く（ポイント付与含む）
function drawSingleCard(gachaState) {
  const s = gachaState;
  s.pityCount++;
  s.totalPulls++;

  let card;
  if (s.pityCount >= s.pityThreshold) {
    // 天井：SR確定（未入手優先）
    const srCards = CARD_DATA.filter(c => c.rarity === 'sr');
    const fresh   = srCards.filter(c => !s.collected.includes(c.id));
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

  const isNew = !s.collected.includes(card.id);
  const cfg   = RARITY_CONFIG[card.rarity];
  const pts   = isNew ? cfg.pts : cfg.dupPts;

  if (isNew) s.collected.push(card.id);
  s.points += pts;
  s.pointsLog.push({ cardId: card.id, pts, isNew, ts: Date.now() });

  saveGachaState(s);
  return { card, isNew, pts };
}
