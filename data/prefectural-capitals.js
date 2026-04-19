// ===== 県庁所在地クイズ（SVG地図ハイライト型・全47問） =====
//
// 【実装担当へ】
// - highlight フィールド：Geolonia 日本地図SVGの都道府県ID
// - 問題：「この都道府県の県庁所在地はどこでしょう？」
// - 選択肢：4都市名択一

const QUIZ_PREFECTURAL_CAPITALS = {
  title: '県庁所在地クイズ（全47問）',
  type: 'map',
  questions: [
    { highlight:'hokkaido', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['仙台市', '青森市', '盛岡市', '札幌市'], answer:3,
      exp:'北海道の道庁所在地は札幌市。人口約196万人で、北海道最大の都市です。' },

    { highlight:'aomori', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['八戸市', '青森市', '弘前市', '盛岡市'], answer:1,
      exp:'青森県の県庁所在地は青森市。ねぶた祭りが有名で、津軽海峡に面した港町です。' },

    { highlight:'iwate', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['仙台市', '一関市', '盛岡市', '花巻市'], answer:2,
      exp:'岩手県の県庁所在地は盛岡市。わんこそば・南部鉄器・冷麺が名物です。' },

    { highlight:'miyagi', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['石巻市', '盛岡市', '仙台市', '福島市'], answer:2,
      exp:'宮城県の県庁所在地は仙台市。東北最大の都市で「杜の都」と呼ばれます。' },

    { highlight:'akita', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['青森市', '秋田市', '大館市', '横手市'], answer:1,
      exp:'秋田県の県庁所在地は秋田市。竿燈まつりが有名で、日本海に面しています。' },

    { highlight:'yamagata', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['鶴岡市', '米沢市', '天童市', '山形市'], answer:3,
      exp:'山形県の県庁所在地は山形市。蔵王温泉・芋煮が有名な城下町です。' },

    { highlight:'fukushima', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['会津若松市', 'いわき市', '郡山市', '福島市'], answer:3,
      exp:'福島県の県庁所在地は福島市。県最大都市は郡山市ですが、県庁は福島市にあります。' },

    { highlight:'ibaraki', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['つくば市', '水戸市', '土浦市', '日立市'], answer:1,
      exp:'茨城県の県庁所在地は水戸市。偕楽園の梅まつり・納豆で有名です。' },

    { highlight:'tochigi', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['栃木市', '足利市', '日光市', '宇都宮市'], answer:3,
      exp:'栃木県の県庁所在地は宇都宮市。餃子の街として有名で、日光東照宮にも近いです。' },

    { highlight:'gunma', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['高崎市', '前橋市', '桐生市', '太田市'], answer:1,
      exp:'群馬県の県庁所在地は前橋市。県内最大都市は高崎市ですが、県庁は前橋市にあります。' },

    { highlight:'saitama', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['川越市', 'さいたま市', '熊谷市', '川口市'], answer:1,
      exp:'埼玉県の県庁所在地はさいたま市（旧・浦和市など合併）。政令指定都市です。' },

    { highlight:'chiba', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['市川市', '松戸市', '船橋市', '千葉市'], answer:3,
      exp:'千葉県の県庁所在地は千葉市。政令指定都市で、東京湾に面した港湾都市です。' },

    { highlight:'tokyo', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['千代田区', '渋谷区', '港区', '新宿区'], answer:3,
      exp:'東京都庁は新宿区西新宿にあります。東京都は「都庁所在地」が新宿区です。' },

    { highlight:'kanagawa', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['川崎市', '横浜市', '相模原市', '藤沢市'], answer:1,
      exp:'神奈川県の県庁所在地は横浜市。人口約374万人で、東京に次いで全国第2位です。' },

    { highlight:'niigata', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['長岡市', '上越市', '新潟市', '柏崎市'], answer:2,
      exp:'新潟県の県庁所在地は新潟市。日本海側最大の都市で、コシヒカリの産地です。' },

    { highlight:'toyama', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['高岡市', '富山市', '魚津市', '黒部市'], answer:1,
      exp:'富山県の県庁所在地は富山市。立山連峰を背景に、富山湾に面した都市です。' },

    { highlight:'ishikawa', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['七尾市', '輪島市', '小松市', '金沢市'], answer:3,
      exp:'石川県の県庁所在地は金沢市。「加賀百万石」の城下町で、兼六園が有名です。' },

    { highlight:'fukui', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['敦賀市', '越前市', '鯖江市', '福井市'], answer:3,
      exp:'福井県の県庁所在地は福井市。恐竜博物館・東尋坊・越前ガニが有名です。' },

    { highlight:'yamanashi', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['富士吉田市', '甲府市', '山梨市', '笛吹市'], answer:1,
      exp:'山梨県の県庁所在地は甲府市。武田信玄ゆかりの城下町で、ぶどうの産地です。' },

    { highlight:'nagano', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['松本市', '長野市', '上田市', '飯田市'], answer:1,
      exp:'長野県の県庁所在地は長野市。善光寺・1998年冬季五輪の開催地として有名です。' },

    { highlight:'gifu', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['大垣市', '高山市', '各務原市', '岐阜市'], answer:3,
      exp:'岐阜県の県庁所在地は岐阜市。長良川・金華山・岐阜城で有名な城下町です。' },

    { highlight:'shizuoka', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['浜松市', '沼津市', '富士市', '静岡市'], answer:3,
      exp:'静岡県の県庁所在地は静岡市。政令指定都市で、お茶・わさびの産地です。' },

    { highlight:'aichi', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['豊田市', '岡崎市', '一宮市', '名古屋市'], answer:3,
      exp:'愛知県の県庁所在地は名古屋市。政令指定都市で、トヨタ自動車の本拠地です。' },

    { highlight:'mie', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['四日市市', '伊勢市', '松阪市', '津市'], answer:3,
      exp:'三重県の県庁所在地は津市。日本一短い市名で、伊勢神宮にも近い県です。' },

    { highlight:'shiga', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['彦根市', '草津市', '大津市', '長浜市'], answer:2,
      exp:'滋賀県の県庁所在地は大津市。琵琶湖の南端に位置し、比叡山・三井寺が有名です。' },

    { highlight:'kyoto', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['宇治市', '京都市', '亀岡市', '福知山市'], answer:1,
      exp:'京都府の府庁所在地は京都市。794年から約1,000年間の都で、世界遺産が多数あります。' },

    { highlight:'osaka', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['堺市', '東大阪市', '枚方市', '大阪市'], answer:3,
      exp:'大阪府の府庁所在地は大阪市。政令指定都市で、「天下の台所」と呼ばれます。' },

    { highlight:'hyogo', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['姫路市', '西宮市', '尼崎市', '神戸市'], answer:3,
      exp:'兵庫県の県庁所在地は神戸市。政令指定都市で、明石海峡大橋・有馬温泉が有名です。' },

    { highlight:'nara', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['橿原市', '桜井市', '生駒市', '奈良市'], answer:3,
      exp:'奈良県の県庁所在地は奈良市。東大寺・興福寺・若草山の鹿で有名な古都です。' },

    { highlight:'wakayama', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['田辺市', '新宮市', '橋本市', '和歌山市'], answer:3,
      exp:'和歌山県の県庁所在地は和歌山市。紀伊半島の北西部に位置し、和歌山城が有名です。' },

    { highlight:'tottori', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['米子市', '倉吉市', '鳥取市', '境港市'], answer:2,
      exp:'鳥取県の県庁所在地は鳥取市。鳥取砂丘・二十世紀梨が有名な日本最少人口の県です。' },

    { highlight:'shimane', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['出雲市', '益田市', '松江市', '浜田市'], answer:2,
      exp:'島根県の県庁所在地は松江市。出雲大社・宍道湖・松江城が有名です。' },

    { highlight:'okayama', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['倉敷市', '津山市', '岡山市', '玉野市'], answer:2,
      exp:'岡山県の県庁所在地は岡山市。政令指定都市で、後楽園・岡山城が有名です。' },

    { highlight:'hiroshima', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['呉市', '尾道市', '広島市', '福山市'], answer:2,
      exp:'広島県の県庁所在地は広島市。政令指定都市で、平和記念公園・厳島神社が有名です。' },

    { highlight:'yamaguchi', tags:[{l:'社会',c:'badge--green'},{l:'中学受験',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['下関市', '萩市', '宇部市', '山口市'], answer:3,
      exp:'山口県の県庁所在地は山口市。県最大都市は下関市ですが、県庁は山口市です。' },

    { highlight:'tokushima', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['鳴門市', '阿南市', '徳島市', '吉野川市'], answer:2,
      exp:'徳島県の県庁所在地は徳島市。阿波踊り・鳴門の渦潮が有名です。' },

    { highlight:'kagawa', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['丸亀市', '坂出市', '高松市', 'さぬき市'], answer:2,
      exp:'香川県の県庁所在地は高松市。讃岐うどんの聖地で、栗林公園が有名です。' },

    { highlight:'ehime', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['今治市', '新居浜市', '宇和島市', '松山市'], answer:3,
      exp:'愛媛県の県庁所在地は松山市。道後温泉・松山城・夏目漱石ゆかりの地です。' },

    { highlight:'kochi', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['四万十市', '南国市', '宿毛市', '高知市'], answer:3,
      exp:'高知県の県庁所在地は高知市。坂本龍馬の出身地で、よさこい祭りが有名です。' },

    { highlight:'fukuoka', tags:[{l:'社会',c:'badge--green'},{l:'小学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['北九州市', '久留米市', '福岡市', '大牟田市'], answer:2,
      exp:'福岡県の県庁所在地は福岡市。政令指定都市で、博多ラーメン・太宰府天満宮が有名です。' },

    { highlight:'saga', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['唐津市', '伊万里市', '武雄市', '佐賀市'], answer:3,
      exp:'佐賀県の県庁所在地は佐賀市。有田焼・吉野ヶ里遺跡・佐賀バルーンフェスタが有名です。' },

    { highlight:'nagasaki', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['佐世保市', '島原市', '諫早市', '長崎市'], answer:3,
      exp:'長崎県の県庁所在地は長崎市。出島・グラバー園・ちゃんぽんで有名な港町です。' },

    { highlight:'kumamoto', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['八代市', '玉名市', '熊本市', '菊池市'], answer:2,
      exp:'熊本県の県庁所在地は熊本市。政令指定都市で、熊本城・阿蘇山が有名です。' },

    { highlight:'oita', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['別府市', '中津市', '日田市', '大分市'], answer:3,
      exp:'大分県の県庁所在地は大分市。温泉湧出量日本一の「温泉県」。別府・由布院が有名です。' },

    { highlight:'miyazaki', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['都城市', '延岡市', '日向市', '宮崎市'], answer:3,
      exp:'宮崎県の県庁所在地は宮崎市。南国の温暖な気候で、マンゴー・高千穂峡が有名です。' },

    { highlight:'kagoshima', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['霧島市', '薩摩川内市', '枕崎市', '鹿児島市'], answer:3,
      exp:'鹿児島県の県庁所在地は鹿児島市。桜島・西郷隆盛ゆかりの地で、黒豚・焼酎が有名です。' },

    { highlight:'okinawa', tags:[{l:'社会',c:'badge--green'},{l:'中学生',c:'badge--neutral'}],
      text:'この都道府県の県庁所在地はどこでしょう？',
      choices:['沖縄市', 'うるま市', '浦添市', '那覇市'], answer:3,
      exp:'沖縄県の県庁所在地は那覇市。首里城・国際通り・美ら海水族館が有名な南の島です。' },

  ]
};
