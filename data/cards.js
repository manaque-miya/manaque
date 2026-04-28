// ===== カードデータ（サイト全体共有） =====
// ガチャ・図鑑・ポイントシステムすべてがここを参照する

const RARITY_CONFIG = {
  ssr: { label: 'SSR', pts: 500, dupPts: 150 },
  sr:  { label: 'SR',  pts: 200, dupPts: 80  },
  r:   { label: 'R',   pts: 50,  dupPts: 20  },
  n:   { label: 'N',   pts: 10,  dupPts: 3   },
};

// ポイントランク定義（catalog.htmlで使用）
const POINT_RANKS = [
  { min: 0,    label: 'みならい',     emoji: '📖' },
  { min: 100,  label: 'しょきゅう',   emoji: '✏️' },
  { min: 500,  label: 'ちゅうきゅう', emoji: '📚' },
  { min: 2000, label: 'じょうきゅう', emoji: '🎓' },
  { min: 5000, label: 'マスター',     emoji: '🏆' },
];

function getPointRank(pts) {
  for (let i = POINT_RANKS.length - 1; i >= 0; i--) {
    if (pts >= POINT_RANKS[i].min) return POINT_RANKS[i];
  }
  return POINT_RANKS[0];
}

const CARD_DATA = [
  // ===== N（ノーマル）オリジナルキャラ =====
  { id:'nc01', rarity:'n', name:'ポチョ',
    img:'assets/img/characters/pocho/card_N.png',
    flavor:'失敗した字も飲み込んで育つ\nインクだまり精霊' },
  { id:'nc02', rarity:'n', name:'メモリィ',
    img:'assets/img/characters/memorii/card_N.png',
    flavor:'覚えたい言葉を体に貼って飛ぶ\n付せん妖精' },
  { id:'nc03', rarity:'n', name:'コロン',
    img:'assets/img/characters/koron/card_N.png',
    flavor:'言葉の息継ぎを教えてくれる\n句読点スライム' },
  { id:'nc04', rarity:'n', name:'パチル',
    img:'assets/img/characters/pachiru/card_N.png',
    flavor:'答えが出る直前にだけ現れる\nひらめき火花' },
  { id:'nc05', rarity:'n', name:'トキン',
    img:'assets/img/characters/tokin/card_N.png',
    flavor:'遅刻しそうな時だけ本気で走る\n時計ねずみ' },
  { id:'nc06', rarity:'n', name:'スヤン',
    img:'assets/img/characters/suyan/card_N.png',
    flavor:'寝不足の机で勝手に昼寝する\nまくら精' },
  { id:'nc07', rarity:'n', name:'ピタゴ',
    img:'assets/img/characters/pitago/card_N.png',
    flavor:'崩れて学ぶ四角いやつ\n積み木生命体' },
  { id:'nc08', rarity:'n', name:'ノオト',
    img:'assets/img/characters/nooto/card_N.png',
    flavor:'字が揃うと耳が伸びる\nノートうさぎ' },
  // ===== N第1弾 追加分 =====
  { id:'nc09', rarity:'n', name:'カサネ',
    img:'assets/img/characters/kasane/base.png',
    flavor:'読み終えたページに小さな名を刻む\nしおり姫' },
  { id:'nc10', rarity:'n', name:'モグラフ',
    img:'assets/img/characters/mogurafu/base.png',
    flavor:'地中に潜って数字を積み上げる\n地中グラフ屋' },
  // ===== N第2弾 =====
  { id:'nc11', rarity:'n', name:'カチリ',
    img:'assets/img/characters/kachiri/base.png',
    flavor:'答えが噛み合う瞬間だけ\n歯車がひとつ増える' },
  { id:'nc12', rarity:'n', name:'チョクシン',
    img:'assets/img/characters/chokusin/base.png',
    flavor:'迷わず一直線に書き進む\nえんぴつの騎士' },
  { id:'nc13', rarity:'n', name:'ツナグ',
    img:'assets/img/characters/tsunagu/base.png',
    flavor:'わかったこととわからないことを\n赤い糸でそっとつなぐ' },
  { id:'nc14', rarity:'n', name:'フワリ',
    img:'assets/img/characters/fuwari/base.png',
    flavor:'頭の中が整理されたとき\n一緒にふわりと浮かぶ' },
  { id:'nc15', rarity:'n', name:'ペララ',
    img:'assets/img/characters/perara/base.png',
    flavor:'ページをめくるたびに\nすこしずつ大きくなる' },
  // ===== SSR（スーパースーパーレア・1%）=====
  { id:'ssr01', rarity:'ssr', emoji:'👑', name:'源頼朝',
    flavor:'武士の世を開いた鎌倉幕府の初代将軍。\n義経を追い、天下を手中に収めた冷徹な策士。' },
  { id:'ssr02', rarity:'ssr', emoji:'🌊', name:'平清盛',
    flavor:'武士として初めて太政大臣に昇り詰めた平家の棟梁。\n「平氏にあらずんば人にあらず」と言わしめた権勢。' },
  { id:'ssr03', rarity:'ssr', emoji:'🏅', name:'足利義満',
    flavor:'室町幕府3代将軍にして金閣寺を建立。\n日明貿易で莫大な富を蓄えた文武両道の覇者。' },

  // ===== SR（スーパーレア）=====
  { id:'sr01', rarity:'sr', emoji:'🔥', name:'織田信長',
    flavor:'天下布武を掲げ戦国の世を\n席巻した革命児。比叡山を焼く。' },
  { id:'sr02', rarity:'sr', emoji:'🌸', name:'坂本龍馬',
    flavor:'薩長同盟を仲介し明治維新の\n扉を開いた土佐の志士。' },
  { id:'sr03', rarity:'sr', emoji:'🏯', name:'徳川家康',
    flavor:'265年続く江戸幕府を開いた\n「鳴くまで待とう」の覇者。' },
  { id:'sr04', rarity:'sr', emoji:'👑', name:'聖徳太子',
    flavor:'十七条憲法・冠位十二階を定め\n日本の国の形を作った摂政。' },
  { id:'sr05', rarity:'sr', emoji:'⚔️', name:'豊臣秀吉',
    flavor:'百姓から天下人へ。太閤検地で\n日本全土の土地を把握した。' },

  // ===== R（レア）=====
  { id:'r01', rarity:'r', emoji:'🐉', name:'武田信玄',
    flavor:'「風林火山」の旗のもと甲斐の\n国を治めた名将。騎馬隊最強。' },
  { id:'r02', rarity:'r', emoji:'🦅', name:'上杉謙信',
    flavor:'「義」を重んじた越後の虎。\n信玄と川中島で5度激突。' },
  { id:'r03', rarity:'r', emoji:'🌊', name:'源義経',
    flavor:'壇ノ浦で平家を滅ぼした天才\n戦術家。兄頼朝に追われた悲劇。' },
  { id:'r04', rarity:'r', emoji:'🏛️', name:'徳川吉宗',
    flavor:'享保の改革で幕府財政を再建。\n「暴れん坊将軍」のモデル。' },
  { id:'r05', rarity:'r', emoji:'📜', name:'伊藤博文',
    flavor:'大日本帝国憲法を起草し初代\n内閣総理大臣となった長州藩士。' },
  { id:'r06', rarity:'r', emoji:'⚓', name:'西郷隆盛',
    flavor:'明治維新の立役者にして西南\n戦争を起こした「最後の武士」。' },
  { id:'r07', rarity:'r', emoji:'🎯', name:'伊達政宗',
    flavor:'独眼竜と呼ばれた奥州の覇者。\n遅れてきた英雄、天下に惜しまれた。' },
  { id:'r08', rarity:'r', emoji:'🌺', name:'北条政子',
    flavor:'夫頼朝亡き後に幕府を支えた\n「尼将軍」。御家人を束ねた。' },
  { id:'r09', rarity:'r', emoji:'🔭', name:'勝海舟',
    flavor:'咸臨丸で太平洋を渡り、江戸\n無血開城を西郷と交渉した傑物。' },
  { id:'r10', rarity:'r', emoji:'🌠', name:'明智光秀',
    flavor:'本能寺の変で信長を討った謀反\n人。なぜ裏切ったかは今も謎。' },

  // ===== N（ノーマル）=====
  { id:'n01', rarity:'n', emoji:'🖌️', name:'葛飾北斎',
    flavor:'「富嶽三十六景」で世界を驚かせた\n江戸の天才浮世絵師。90歳まで描いた。' },
  { id:'n02', rarity:'n', emoji:'📝', name:'紫式部',
    flavor:'世界最古の長編小説「源氏物語」\nを書いた平安時代の女流作家。' },
  { id:'n03', rarity:'n', emoji:'🍃', name:'松尾芭蕉',
    flavor:'「古池や蛙飛び込む」の俳聖。\n奥の細道で東北・北陸を旅した。' },
  { id:'n04', rarity:'n', emoji:'🌾', name:'二宮尊徳',
    flavor:'薪を背負いながら本を読んだ\n勤勉の象徴。農村復興に尽くした。' },
  { id:'n05', rarity:'n', emoji:'🏺', name:'卑弥呼',
    flavor:'邪馬台国を治めた女王。\n魏に使いを送り「親魏倭王」の称号を得た。' },
];

// ── カードアート描画ヘルパー（emoji / img 両対応）──
function cardArt(card, opts) {
  const {grayscale=false, revealed=true} = opts || {};
  if (!revealed || !card) return '<span>❓</span>';
  const gs = grayscale ? 'filter:grayscale(1);opacity:.4;' : '';
  if (card.img) {
    return `<img src="${card.img}" alt="${card.name}" style="width:100%;height:100%;object-fit:contain;${gs}">`;
  }
  return `<span style="${gs}">${card.emoji || '❓'}</span>`;
}
