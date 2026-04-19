// ===== 日本地図クイズ（SVG地図ハイライト型・全47問） =====
//
// 【実装担当へ】
// - highlight フィールド：Geolonia 日本地図SVGの都道府県ID（英語小文字）
// - 表示方法：highlight の都道府県をSVG上で強調色で塗り、「色がついた都道府県はどこでしょう？」と出題
// - 選択肢はテキスト4択（通常のquizエンジンと同じ形式）
// - type:'map' を見てSVGレンダリングに切り替える想定

const QUIZ_JAPAN_MAP = {
  title: '日本地図クイズ',
  type: 'map',
  questions: [
    { highlight:'hokkaido', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['青森県','北海道','秋田県','岩手県'], answer:1,
      exp:'北海道は日本最大の都道府県。面積は約83,424km²で日本全体の約22%を占めます。道庁所在地は札幌市です。' },

    { highlight:'aomori', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['岩手県','秋田県','青森県','北海道'], answer:2,
      exp:'青森県は本州最北端の県。りんごの生産量は日本一で、津軽海峡を挟んで北海道と向き合っています。' },

    { highlight:'iwate', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['宮城県','岩手県','秋田県','青森県'], answer:1,
      exp:'岩手県は面積が全国第2位の広さ。三陸海岸・わんこそば・南部鉄器で有名です。県庁所在地は盛岡市。' },

    { highlight:'miyagi', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['福島県','山形県','宮城県','岩手県'], answer:2,
      exp:'宮城県の県庁所在地は仙台市。東北最大の都市で、日本三景「松島」があります。' },

    { highlight:'akita', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['青森県','岩手県','山形県','秋田県'], answer:3,
      exp:'秋田県は日本最深の湖・田沢湖がある県。あきたこまち（米）の産地としても有名です。' },

    { highlight:'yamagata', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['山形県','宮城県','福島県','新潟県'], answer:0,
      exp:'山形県はさくらんぼの生産量日本一。蔵王温泉・山寺（立石寺）などが有名です。' },

    { highlight:'fukushima', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['茨城県','宮城県','栃木県','福島県'], answer:3,
      exp:'福島県は面積が全国第3位の広さ。会津若松・磐梯山・桃の産地として有名です。' },

    { highlight:'ibaraki', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['茨城県','千葉県','埼玉県','栃木県'], answer:0,
      exp:'茨城県の県庁所在地は水戸市。納豆の生産量日本一で、偕楽園の梅まつりが有名です。' },

    { highlight:'tochigi', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['群馬県','栃木県','福島県','埼玉県'], answer:1,
      exp:'栃木県の県庁所在地は宇都宮市（餃子で有名）。日光東照宮・那須高原が主な観光地です。' },

    { highlight:'gunma', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--brand'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['長野県','栃木県','群馬県','埼玉県'], answer:2,
      exp:'群馬県の県庁所在地は前橋市。草津温泉・水上温泉など温泉が多い内陸県です。' },

    { highlight:'saitama', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--brand'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['群馬県','栃木県','茨城県','埼玉県'], answer:3,
      exp:'埼玉県の県庁所在地はさいたま市。東京のベッドタウンとして人口が多く、川越「小江戸」が有名です。' },

    { highlight:'chiba', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['千葉県','茨城県','神奈川県','静岡県'], answer:0,
      exp:'千葉県は房総半島が目印の県。成田空港・東京ディズニーランドがあり、落花生の産地でもあります。' },

    { highlight:'tokyo', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['神奈川県','埼玉県','千葉県','東京都'], answer:3,
      exp:'東京都は日本の首都。人口は約1,400万人で日本最多。政治・経済・文化の中心地です。' },

    { highlight:'kanagawa', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['東京都','神奈川県','千葉県','静岡県'], answer:1,
      exp:'神奈川県の県庁所在地は横浜市。人口は東京に次いで全国第2位で、鎌倉・箱根も有名です。' },

    { highlight:'niigata', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['富山県','長野県','新潟県','山形県'], answer:2,
      exp:'新潟県はコシヒカリの産地として有名。日本海側最大の都市・新潟市があります。' },

    { highlight:'toyama', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--brand'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['石川県','富山県','新潟県','福井県'], answer:1,
      exp:'富山県はほたるいか・ます寿司で有名。富山湾は「天然の生けす」と呼ばれます。' },

    { highlight:'ishikawa', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['富山県','石川県','福井県','新潟県'], answer:1,
      exp:'石川県の県庁所在地は金沢市。「加賀百万石」の城下町で、兼六園・ひがし茶屋街が有名です。' },

    { highlight:'fukui', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--brand'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['石川県','京都府','滋賀県','福井県'], answer:3,
      exp:'福井県は恐竜化石の産地として有名。眼鏡フレームの国内生産シェアが約90%を占めます。' },

    { highlight:'yamanashi', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['長野県','山梨県','静岡県','神奈川県'], answer:1,
      exp:'山梨県は富士山・ぶどう・ももが有名な内陸県。海に面していない「海なし県」のひとつです。' },

    { highlight:'nagano', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['山梨県','岐阜県','長野県','新潟県'], answer:2,
      exp:'長野県は8県と接する最多隣接県。善光寺・松本城・北アルプスが有名で、1998年冬季五輪が開催されました。' },

    { highlight:'gifu', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--brand'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['長野県','愛知県','岐阜県','富山県'], answer:2,
      exp:'岐阜県は白川郷（合掌造り集落・世界遺産）がある内陸県。飛騨高山・長良川でも有名です。' },

    { highlight:'shizuoka', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['愛知県','山梨県','静岡県','神奈川県'], answer:2,
      exp:'静岡県は富士山南麓に広がる県。お茶・わさびの産地で、浜名湖うなぎも有名です。' },

    { highlight:'aichi', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['静岡県','岐阜県','愛知県','三重県'], answer:2,
      exp:'愛知県の県庁所在地は名古屋市。トヨタ自動車の本拠地で、名古屋城・熱田神宮が有名です。' },

    { highlight:'mie', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['愛知県','奈良県','和歌山県','三重県'], answer:3,
      exp:'三重県は伊勢神宮がある県。伊勢えび・的矢かき・松阪牛の産地でもあります。' },

    { highlight:'shiga', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['京都府','滋賀県','奈良県','福井県'], answer:1,
      exp:'滋賀県は日本最大の湖・琵琶湖がある県。湖の面積は県全体の約1/6を占めます。' },

    { highlight:'kyoto', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['大阪府','滋賀県','奈良県','京都府'], answer:3,
      exp:'京都府は794年から約1,000年間の都。金閣寺・清水寺・嵐山など世界遺産が多数あります。' },

    { highlight:'osaka', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['京都府','大阪府','兵庫県','奈良県'], answer:1,
      exp:'大阪府の府庁所在地は大阪市。「天下の台所」と呼ばれる西日本最大の商業・文化都市です。' },

    { highlight:'hyogo', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['大阪府','岡山県','兵庫県','京都府'], answer:2,
      exp:'兵庫県の県庁所在地は神戸市。明石海峡大橋・有馬温泉・姫路城（世界遺産）が有名です。' },

    { highlight:'nara', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['大阪府','三重県','奈良県','和歌山県'], answer:2,
      exp:'奈良県はかつての都・奈良がある県。東大寺・法隆寺・春日大社など世界遺産が多数あります。' },

    { highlight:'wakayama', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['三重県','奈良県','大阪府','和歌山県'], answer:3,
      exp:'和歌山県はみかん・梅の産地。高野山（世界遺産）・那智の滝が有名です。' },

    { highlight:'tottori', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--brand'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['島根県','鳥取県','兵庫県','岡山県'], answer:1,
      exp:'鳥取県は人口最少の都道府県。鳥取砂丘・二十世紀梨で有名で、山陰地方の東部に位置します。' },

    { highlight:'shimane', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--brand'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['鳥取県','岡山県','広島県','島根県'], answer:3,
      exp:'島根県は出雲大社・石見銀山（世界遺産）がある県。「縁結び」の聖地として知られます。' },

    { highlight:'okayama', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['兵庫県','広島県','岡山県','鳥取県'], answer:2,
      exp:'岡山県はもも・マスカットの産地。後楽園・倉敷美観地区・瀬戸大橋が有名です。' },

    { highlight:'hiroshima', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['岡山県','広島県','山口県','島根県'], answer:1,
      exp:'広島県は中国地方最大の都市・広島市がある県。原爆ドーム・厳島神社（どちらも世界遺産）が有名です。' },

    { highlight:'yamaguchi', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['広島県','山口県','島根県','福岡県'], answer:1,
      exp:'山口県は本州最西端の県。関門海峡を挟んで九州と向き合い、フグ料理・秋吉台が有名です。' },

    { highlight:'tokushima', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--brand'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['香川県','高知県','愛媛県','徳島県'], answer:3,
      exp:'徳島県は阿波踊り・鳴門の渦潮で有名。鳴門海峡では世界最大級の潮流が見られます。' },

    { highlight:'kagawa', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['徳島県','愛媛県','香川県','高知県'], answer:2,
      exp:'香川県は日本最小の都道府県。讃岐うどんが有名で「うどん県」として知られます。' },

    { highlight:'ehime', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--brand'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['高知県','愛媛県','広島県','香川県'], answer:1,
      exp:'愛媛県はみかんの産地として有名。道後温泉・今治タオル・しまなみ海道が有名です。' },

    { highlight:'kochi', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['愛媛県','徳島県','宮崎県','高知県'], answer:3,
      exp:'高知県は坂本龍馬の出身地。カツオのたたき・よさこい祭りが有名で、四国最大の面積を持ちます。' },

    { highlight:'fukuoka', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['佐賀県','福岡県','大分県','山口県'], answer:1,
      exp:'福岡県は九州最大の都市・福岡市がある県。博多ラーメン・明太子・太宰府天満宮が有名です。' },

    { highlight:'saga', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--brand'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['福岡県','長崎県','佐賀県','熊本県'], answer:2,
      exp:'佐賀県は有田焼（伊万里焼）の産地。吉野ヶ里遺跡・有明海に面しています。' },

    { highlight:'nagasaki', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['佐賀県','福岡県','熊本県','長崎県'], answer:3,
      exp:'長崎県は出島・グラバー園など歴史的建造物で有名。ちゃんぽん・カステラも名物です。' },

    { highlight:'kumamoto', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['鹿児島県','宮崎県','長崎県','熊本県'], answer:3,
      exp:'熊本県は阿蘇山（世界最大級のカルデラ）がある県。熊本城・くまモンでも有名です。' },

    { highlight:'oita', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['福岡県','宮崎県','大分県','熊本県'], answer:2,
      exp:'大分県は温泉湧出量・温泉地数ともに日本一の「温泉県」。別府・由布院が世界的に有名です。' },

    { highlight:'miyazaki', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--brand'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['鹿児島県','大分県','宮崎県','熊本県'], answer:2,
      exp:'宮崎県はマンゴー・日向夏などの果物が有名。高千穂峡など神話ゆかりの地が多い県です。' },

    { highlight:'kagoshima', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['宮崎県','鹿児島県','熊本県','沖縄県'], answer:1,
      exp:'鹿児島県は桜島（活火山）で有名。屋久島（世界遺産）・奄美大島など多くの島があります。' },

    { highlight:'okinawa', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'色がついた都道府県はどこでしょう？',
      choices:['鹿児島県','宮崎県','沖縄県','長崎県'], answer:2,
      exp:'沖縄県は日本最南端・最西端の都道府県。琉球王国の文化が息づき、首里城（世界遺産）が有名です。' },
  ]
};
