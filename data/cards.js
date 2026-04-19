// ===== カードデータ（サイト全体共有） =====
// ガチャ・図鑑・ポイントシステムすべてがここを参照する

const RARITY_CONFIG = {
  sr: { label: 'SR', pts: 200, dupPts: 80  },
  r:  { label: 'R',  pts: 50,  dupPts: 20  },
  n:  { label: 'N',  pts: 10,  dupPts: 3   },
};

// ポイントランク定義（catalog.htmlで使用）
const POINT_RANKS = [
  { min: 0,    label: 'みならい',   emoji: '📖' },
  { min: 100,  label: 'しょにゅう', emoji: '✏️' },
  { min: 500,  label: 'ちゅうきゅう', emoji: '📚' },
  { min: 2000, label: 'じょうきゅう', emoji: '🎓' },
  { min: 5000, label: 'マスター',   emoji: '🏆' },
];

function getPointRank(pts) {
  for (let i = POINT_RANKS.length - 1; i >= 0; i--) {
    if (pts >= POINT_RANKS[i].min) return POINT_RANKS[i];
  }
  return POINT_RANKS[0];
}

const CARD_DATA = [
  // ===== SR（スーパーレア）=====
  { id:'sr01', rarity:'sr', emoji:'🌟', name:'大谷翔平',
    flavor:'二刀流で世界を驚かせた\nMLBの伝説。WBCのMVP。' },
  { id:'sr02', rarity:'sr', emoji:'⚾', name:'山本由伸',
    flavor:'日本球界最高峰の右腕。\n圧倒的な制球力と速球が武器。' },
  { id:'sr03', rarity:'sr', emoji:'🍀', name:'鈴木誠也',
    flavor:'広島から海を渡った強打者。\n勝負強さは日本一と称された。' },
  { id:'sr04', rarity:'sr', emoji:'👑', name:'村上宗隆',
    flavor:'史上最年少で三冠王を達成。\n令和の怪物と呼ばれる大砲。' },
  { id:'sr05', rarity:'sr', emoji:'🔴', name:'吉田正尚',
    flavor:'右打席から放つ長打が武器。\nMLBでも本塁打を量産中。' },
  // ===== R（レア）=====
  { id:'r01', rarity:'r', emoji:'🍁', name:'岡本和真',
    flavor:'巨人が誇る不動の4番打者。\n勝負強い打撃で本塁打量産。' },
  { id:'r02', rarity:'r', emoji:'⚡', name:'菊池雄星',
    flavor:'花巻東から世界へ飛び出した\n技巧派左腕。MLB経験豊富。' },
  { id:'r03', rarity:'r', emoji:'🐉', name:'菅野智之',
    flavor:'巨人のエース右腕。\n制球力と変化球の多彩さが魅力。' },
  { id:'r04', rarity:'r', emoji:'🌸', name:'高橋宏斗',
    flavor:'中日の若き本格派右腕。\n高校出身ながら即戦力として活躍。' },
  { id:'r05', rarity:'r', emoji:'🦅', name:'近藤健介',
    flavor:'出塁率日本一を誇る巧打者。\n驚異の選球眼でチームを牽引。' },
  { id:'r06', rarity:'r', emoji:'⚓', name:'源田壮亮',
    flavor:'黄金グラブ連続受賞の名手。\nショートの守備は球界最高峰。' },
  { id:'r07', rarity:'r', emoji:'🎯', name:'牧秀悟',
    flavor:'DeNAの若大将。\n勝負強い一打でチームを救う中心選手。' },
  { id:'r08', rarity:'r', emoji:'🏯', name:'山田哲人',
    flavor:'3度のトリプルスリー達成。\nヤクルトが誇る球界屈指の二塁手。' },
  { id:'r09', rarity:'r', emoji:'🛡', name:'中村悠平',
    flavor:'投手陣をまとめる正捕手。\nリード巧みで「投手の女房役」。' },
  { id:'r10', rarity:'r', emoji:'🌠', name:'戸郷翔征',
    flavor:'巨人の次世代エース候補。\n150km超の速球と鋭い変化球が武器。' },
  // ===== N（ノーマル）=====
  { id:'n01', rarity:'n', emoji:'🎖', name:'井端弘和（監督）',
    flavor:'名遊撃手が侍ジャパンの\n指揮官へ。緻密な野球を展開。' },
  { id:'n02', rarity:'n', emoji:'🗻', name:'山川穂高',
    flavor:'豪快なフルスイングが持ち味。\nホームランダービーの常連大砲。' },
  { id:'n03', rarity:'n', emoji:'⚡', name:'周東佑京',
    flavor:'NPB史上最速の俊足選手。\n打球より速いかもしれない走力。' },
  { id:'n04', rarity:'n', emoji:'🛡', name:'甲斐拓也',
    flavor:'強肩捕手として球界に名を馳せる。\n二盗阻止率の高さは圧倒的。' },
  { id:'n05', rarity:'n', emoji:'🌊', name:'宮城大弥',
    flavor:'沖縄出身の左腕。\nキレのある変化球と度胸が武器。' },
];
