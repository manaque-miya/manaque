// ===== まなクエ！ サイト構造データ =====
// ここを編集するだけで学年・科目・単元の追加・削除ができる
// quiz.html に対応する <script src="data/xxx.js"> の追加も忘れずに

const SITE_STRUCTURE = [
  {
    id: 'kids',
    label: 'こども',
    ruby: 'こども',
    emoji: '🧒',
    colorClass: 'cat--kids',
    subjects: [
      {
        id: 'nazo-kids', label: 'なぞなぞ',
        emoji: '🤔',
        units: [
          { label: 'こどもなぞなぞ（かんたん）', quizId: 'kids-nazo-01', count: 20, time: '約10分', difficulty: 1, gacha: false, isNew: true,
            tags: [{ text: 'なぞなぞ', cls: 'badge--orange' }, { text: 'こども', cls: 'badge--neutral' }] },
          { label: 'こどもなぞなぞ（すこしむずかしい）', quizId: 'kids-nazo-02', count: 20, time: '約10分', difficulty: 2, gacha: false, isNew: true,
            tags: [{ text: 'なぞなぞ', cls: 'badge--orange' }, { text: 'こども', cls: 'badge--neutral' }] },
        ]
      },
      {
        id: 'body-kids', label: 'からだ',
        emoji: '🧒',
        units: [
          { label: 'からだはどれ？（3/5もん）', quizId: 'kids-body', count: null, time: '約3分', difficulty: 1, gacha: false, isNew: true,
            tags: [{ text: 'からだ', cls: 'badge--orange' }, { text: 'こども', cls: 'badge--neutral' }] },
        ]
      },
      {
        id: 'animals-kids', label: 'どうぶつ',
        emoji: '🐾',
        units: [
          { label: 'どうぶつはどれ？（3/5/10もん）', quizId: 'kids-animals', count: null, time: '約5分', difficulty: 1, gacha: false, isNew: true,
            tags: [{ text: 'どうぶつ', cls: 'badge--orange' }, { text: 'こども', cls: 'badge--neutral' }] },
        ]
      },
    ]
  },

  {
    id: 'elementary',
    label: '小学生',
    ruby: 'しょうがくせい',
    emoji: '🏫',
    colorClass: 'cat--elementary',
    subjects: [
      {
        id: 'social',
        label: '社会',
        emoji: '🗾',
        badge: { text: '社会', cls: 'badge--green' },
        units: [
          {
            label: '都道府県クイズ',
            quizId: 'geography',
            count: 15,
            time: '約5分',
            difficulty: 2,
            gacha: false,
            tags: [{ text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }]
          },
          {
            label: '都道府県クイズ（全47問）',
            quizId: 'prefecture',
            count: 47,
            time: '約25分',
            difficulty: 3,
            gacha: false,
            tags: [{ text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }]
          },
          {
            label: '地図でおぼえる都道府県（4択）',
            quizId: 'map',
            count: 47,
            time: '約10分',
            difficulty: 2,
            gacha: true,
            tags: [{ text: '地図', cls: 'badge--sky' }, { text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }]
          },
          {
            label: '地図タップ問題',
            quizId: 'map-tap',
            count: 47,
            time: '約25分',
            difficulty: 3,
            gacha: true,
            tags: [{ text: '地図', cls: 'badge--sky' }, { text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }]
          },
          {
            label: '県庁所在地クイズ',
            quizId: 'map-capitals',
            count: 47,
            time: '約25分',
            difficulty: 3,
            gacha: true,
            tags: [{ text: '地図', cls: 'badge--sky' }, { text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }]
          },
          { label: '農業・漁業・林業クイズ',               quizId: 'elem-social-01', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '工業・産業クイズ',                      quizId: 'elem-social-02', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '交通・通信クイズ',                      quizId: 'elem-social-03', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '日本の歴史①（縄文〜奈良時代）クイズ', quizId: 'elem-social-04', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '日本の歴史②（平安〜室町時代）クイズ', quizId: 'elem-social-05', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '日本の歴史③（安土桃山〜江戸時代）クイズ', quizId: 'elem-social-06', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '日本の歴史④（明治〜昭和時代）クイズ', quizId: 'elem-social-07', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '政治のしくみクイズ（国会・内閣・裁判所）', quizId: 'elem-social-08', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '世界地理クイズ',                        quizId: 'elem-social-09', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '環境・現代社会クイズ',                  quizId: 'elem-social-10', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '小学生', cls: 'badge--neutral' }] }
        ]
      },
      {
        id: 'science',
        label: '理科',
        emoji: '🔬',
        badge: { text: '理科', cls: 'badge--purple' },
        units: [
          {
            label: 'からだのしくみクイズ',
            quizId: 'body',
            count: 15,
            time: '約5分',
            difficulty: 2,
            gacha: false,
            tags: [{ text: '理科', cls: 'badge--purple' }, { text: '小学生', cls: 'badge--neutral' }]
          },
          { label: '植物のつくりクイズ',         quizId: 'elem-science-01', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '動物・昆虫クイズ',            quizId: 'elem-science-02', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '天気と気象クイズ',            quizId: 'elem-science-03', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '太陽・月・星クイズ',          quizId: 'elem-science-04', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '水溶液・ものの溶け方クイズ',  quizId: 'elem-science-05', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: 'てこ・電気クイズ',            quizId: 'elem-science-06', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '人体のしくみクイズ',          quizId: 'elem-science-07', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '生物と環境クイズ',            quizId: 'elem-science-08', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: 'ものの燃え方クイズ',          quizId: 'elem-science-09', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '光と音クイズ',                quizId: 'elem-science-10', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '小学生', cls: 'badge--neutral' }] }
        ]
      },
      {
        id: 'math',
        label: '算数',
        emoji: '🔢',
        badge: { text: '算数', cls: 'badge--yellow' },
        units: [
          {
            label: '分数のひっ算クイズ',
            quizId: 'fraction',
            count: 15,
            time: '約5分',
            difficulty: 3,
            gacha: false,
            tags: [{ text: '算数', cls: 'badge--yellow' }, { text: '小学生', cls: 'badge--neutral' }]
          },
          { label: 'たし算・ひき算',    quizId: 'elem-math-01', count: 10, time: '約5分', difficulty: 1, gacha: false, tags: [{ text: '算数', cls: 'badge--yellow' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: 'かけ算・九九',      quizId: 'elem-math-02', count: 10, time: '約5分', difficulty: 1, gacha: false, tags: [{ text: '算数', cls: 'badge--yellow' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: 'わり算',            quizId: 'elem-math-03', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '算数', cls: 'badge--yellow' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '小数の計算',        quizId: 'elem-math-04', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '算数', cls: 'badge--yellow' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '分数の計算',        quizId: 'elem-math-05', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '算数', cls: 'badge--yellow' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '面積・体積',        quizId: 'elem-math-06', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '算数', cls: 'badge--yellow' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '割合・百分率',      quizId: 'elem-math-07', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '算数', cls: 'badge--yellow' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '速さ・時間・距離',  quizId: 'elem-math-08', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '算数', cls: 'badge--yellow' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '図形（角度・性質）',quizId: 'elem-math-09', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '算数', cls: 'badge--yellow' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: '比・比の値',        quizId: 'elem-math-10', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '算数', cls: 'badge--yellow' }, { text: '小学生', cls: 'badge--neutral' }] }
        ]
      },
      {
        id: 'japanese-elem',
        label: '国語',
        emoji: '📖',
        badge: { text: '国語', cls: 'badge--orange' },
        units: [
          { label: '小学漢字クイズ①', quizId: 'elem-japanese-01', count: 10, time: '約5分', difficulty: 2, gacha: false, isNew: true, tags: [{ text: '国語', cls: 'badge--orange' }, { text: '小学生', cls: 'badge--neutral' }] },
          { label: 'ことわざ・慣用句クイズ', quizId: 'elem-japanese-02', count: 10, time: '約5分', difficulty: 2, gacha: false, isNew: true, tags: [{ text: '国語', cls: 'badge--orange' }, { text: '小学生', cls: 'badge--neutral' }] },
        ]
      },
      {
        id: 'history-elem',
        label: '歴史',
        emoji: '📜',
        badge: { text: '歴史', cls: 'badge--orange' },
        units: [
          {
            label: '日本の歴史クイズ',
            quizId: 'history',
            count: 20,
            time: '約10分',
            difficulty: 3,
            gacha: true,
            tags: [{ text: '歴史', cls: 'badge--orange' }, { text: '小中学生', cls: 'badge--neutral' }]
          }
        ]
      }
    ]
  },

  {
    id: 'middle',
    label: '中学生',
    ruby: 'ちゅうがくせい',
    emoji: '📚',
    colorClass: 'cat--middle',
    subjects: [
      {
        id: 'math-mid',
        label: '数学',
        emoji: '📐',
        badge: { text: '数学', cls: 'badge--sky' },
        units: [
          { label: '正負の数',          quizId: 'mid-math-01', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '数学', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '文字と式',          quizId: 'mid-math-02', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '数学', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '一次方程式',        quizId: 'mid-math-03', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '数学', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '比例・反比例',      quizId: 'mid-math-04', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '数学', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '連立方程式',        quizId: 'mid-math-05', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '数学', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '一次関数',          quizId: 'mid-math-06', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '数学', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '式の展開・因数分解',quizId: 'mid-math-07', count: 10, time: '約5分', difficulty: 4, gacha: false, tags: [{ text: '数学', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '平方根',            quizId: 'mid-math-08', count: 10, time: '約5分', difficulty: 4, gacha: false, tags: [{ text: '数学', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '二次方程式',        quizId: 'mid-math-09', count: 10, time: '約5分', difficulty: 4, gacha: false, tags: [{ text: '数学', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '確率',              quizId: 'mid-math-10', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '数学', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] }
        ]
      },
      {
        id: 'english',
        label: '英語',
        emoji: '🔤',
        badge: { text: '英語', cls: 'badge--sky' },
        units: [
          {
            label: 'よく出る英単語クイズ',
            quizId: 'english',
            count: 15,
            time: '約5分',
            difficulty: 3,
            gacha: false,
            tags: [{ text: '英語', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }]
          },
          { label: '中学英語クイズ【中1レベル】', quizId: 'mid-english-01', count: 30, time: '約15分', difficulty: 2, gacha: false, isNew: true, tags: [{ text: '英語', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '中学英語クイズ【中2レベル】', quizId: 'mid-english-02', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true, tags: [{ text: '英語', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '中学英語クイズ【中3レベル】', quizId: 'mid-english-03', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true, tags: [{ text: '英語', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '未来形・助動詞',             quizId: 'mid-english-04', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '英語', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '比較（比較級・最上級）',     quizId: 'mid-english-05', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '英語', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '不定詞・動名詞',             quizId: 'mid-english-06', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '英語', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '接続詞・前置詞',             quizId: 'mid-english-07', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '英語', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '関係代名詞',                 quizId: 'mid-english-08', count: 10, time: '約5分', difficulty: 4, gacha: false, tags: [{ text: '英語', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '受動態',                     quizId: 'mid-english-09', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '英語', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '現在完了形',                 quizId: 'mid-english-10', count: 10, time: '約5分', difficulty: 4, gacha: false, tags: [{ text: '英語', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }] }
        ]
      },
      {
        id: 'science-mid',
        label: '理科',
        emoji: '🔬',
        badge: { text: '理科', cls: 'badge--purple' },
        units: [
          { label: '植物の分類と光合成',         quizId: 'mid-science-01', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '動物の分類と体のしくみ',     quizId: 'mid-science-02', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '細胞・遺伝',                 quizId: 'mid-science-03', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '状態変化・物質の性質',       quizId: 'mid-science-04', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '化学変化・化学式',           quizId: 'mid-science-05', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '酸・アルカリ・中和',         quizId: 'mid-science-06', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '力・圧力・浮力',             quizId: 'mid-science-07', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '電流・電圧・抵抗',           quizId: 'mid-science-08', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '光・音・熱',                 quizId: 'mid-science-09', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '天体・地球と宇宙',           quizId: 'mid-science-10', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '中学生', cls: 'badge--neutral' }] }
        ]
      },
      {
        id: 'social-mid',
        label: '社会',
        emoji: '🗾',
        badge: { text: '社会', cls: 'badge--green' },
        units: [
          { label: '世界の地形・気候',               quizId: 'mid-social-01', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: 'アジア・アフリカの地理',         quizId: 'mid-social-02', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: 'ヨーロッパ・南北アメリカの地理', quizId: 'mid-social-03', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '日本の地理（地形・気候）',       quizId: 'mid-social-04', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '日本の地理（産業・人口）',       quizId: 'mid-social-05', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '日本の歴史①（古代〜鎌倉）',     quizId: 'mid-social-06', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '日本の歴史②（室町〜江戸）',     quizId: 'mid-social-07', count: 10, time: '約5分', difficulty: 2, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '日本の歴史③（明治〜昭和戦前）', quizId: 'mid-social-08', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '日本の歴史④（昭和戦後〜現代）', quizId: 'mid-social-09', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '公民（憲法・政治・経済）',       quizId: 'mid-social-10', count: 10, time: '約5分', difficulty: 3, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '中学生', cls: 'badge--neutral' }] }
        ]
      },
      {
        id: 'history-mid',
        label: '歴史',
        emoji: '📜',
        badge: { text: '歴史', cls: 'badge--orange' },
        units: [
          {
            label: '日本の歴史クイズ',
            quizId: 'history',
            count: 20,
            time: '約10分',
            difficulty: 3,
            gacha: true,
            tags: [{ text: '歴史', cls: 'badge--orange' }, { text: '小中学生', cls: 'badge--neutral' }]
          },
          {
            label: '明治時代クイズ',
            quizId: 'meiji',
            count: 15,
            time: '約5分',
            difficulty: 4,
            gacha: false,
            tags: [{ text: '歴史', cls: 'badge--orange' }, { text: '中学生', cls: 'badge--neutral' }]
          }
        ]
      },
      {
        id: 'japanese-mid',
        label: '国語',
        emoji: '📖',
        badge: { text: '国語', cls: 'badge--orange' },
        units: [
          { label: '中学漢字・語彙クイズ', quizId: 'mid-japanese-01', count: 10, time: '約5分', difficulty: 3, gacha: false, isNew: true, tags: [{ text: '国語', cls: 'badge--orange' }, { text: '中学生', cls: 'badge--neutral' }] },
          { label: '古文入門クイズ',       quizId: 'mid-japanese-02', count: 10, time: '約5分', difficulty: 3, gacha: false, isNew: true, tags: [{ text: '国語', cls: 'badge--orange' }, { text: '中学生', cls: 'badge--neutral' }] },
        ]
      }
    ]
  },

  {
    id: 'high',
    label: '高校生',
    ruby: 'こうこうせい',
    emoji: '🎓',
    colorClass: 'cat--high',
    subjects: [
      {
        id: 'english-high',
        label: '英語',
        emoji: '🌍',
        badge: { text: '英語', cls: 'badge--sky' },
        units: [
          { label: '高校英語クイズ【共通テスト基礎】', quizId: 'high-english-01', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true, tags: [{ text: '英語', cls: 'badge--sky' }, { text: '高校生', cls: 'badge--neutral' }] },
          { label: '高校英語クイズ【難関大レベル】',   quizId: 'high-english-02', count: 30, time: '約15分', difficulty: 5, gacha: false, isNew: true, tags: [{ text: '英語', cls: 'badge--sky' }, { text: '高校生', cls: 'badge--neutral' }] }
        ]
      },
      {
        id: 'japanese-high',
        label: '国語',
        emoji: '📖',
        badge: { text: '国語', cls: 'badge--orange' },
        units: [
          { label: '現代文（語彙・読解・文学史）', quizId: 'high-japanese-01', count: 30, time: '約15分', difficulty: 4, gacha: false, tags: [{ text: '国語', cls: 'badge--orange' }, { text: '高校生', cls: 'badge--neutral' }] },
          { label: '古文・漢文基礎',               quizId: 'high-japanese-02', count: 30, time: '約15分', difficulty: 4, gacha: false, tags: [{ text: '国語', cls: 'badge--orange' }, { text: '高校生', cls: 'badge--neutral' }] }
        ]
      },
      {
        id: 'math-high',
        label: '数学',
        emoji: '📐',
        badge: { text: '数学', cls: 'badge--sky' },
        units: [
          { label: '数と式・方程式・不等式',         quizId: 'high-math-01', count: 30, time: '約15分', difficulty: 4, gacha: false, tags: [{ text: '数学', cls: 'badge--sky' }, { text: '高校生', cls: 'badge--neutral' }] },
          { label: '二次関数・場合の数・確率',       quizId: 'high-math-02', count: 30, time: '約15分', difficulty: 4, gacha: false, tags: [{ text: '数学', cls: 'badge--sky' }, { text: '高校生', cls: 'badge--neutral' }] }
        ]
      },
      {
        id: 'science-high',
        label: '理科',
        emoji: '🔬',
        badge: { text: '理科', cls: 'badge--purple' },
        units: [
          { label: '物理基礎（力学・波動・電磁気）', quizId: 'high-science-01', count: 30, time: '約15分', difficulty: 4, gacha: false, isNew: true, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '高校生', cls: 'badge--neutral' }] },
          { label: '化学基礎（原子・化学結合・反応）',quizId: 'high-science-02', count: 30, time: '約15分', difficulty: 4, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '高校生', cls: 'badge--neutral' }] },
          { label: '生物基礎（細胞・遺伝・生態系）', quizId: 'high-science-03', count: 30, time: '約15分', difficulty: 4, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '高校生', cls: 'badge--neutral' }] },
          { label: '地学基礎（地球・気象・宇宙）',   quizId: 'high-science-04', count: 30, time: '約15分', difficulty: 4, gacha: false, tags: [{ text: '理科', cls: 'badge--purple' }, { text: '高校生', cls: 'badge--neutral' }] }
        ]
      },
      {
        id: 'social-high',
        label: '社会',
        emoji: '🌏',
        badge: { text: '社会', cls: 'badge--green' },
        units: [
          { label: '日本史基礎（古代〜現代）',       quizId: 'high-social-01', count: 30, time: '約15分', difficulty: 4, gacha: false, isNew: true, tags: [{ text: '社会', cls: 'badge--green' }, { text: '高校生', cls: 'badge--neutral' }] },
          { label: '世界史・地理・公民',             quizId: 'high-social-02', count: 30, time: '約15分', difficulty: 4, gacha: false, tags: [{ text: '社会', cls: 'badge--green' }, { text: '高校生', cls: 'badge--neutral' }] }
        ]
      }
    ]
  },

  {
    id: 'uni',
    label: '大学生',
    ruby: 'だいがくせい',
    emoji: '🎓',
    colorClass: 'cat--uni',
    subjects: [
      {
        id: 'spi-lang', label: 'SPI言語',
        emoji: '📖',
        units: [
          { label: 'SPI言語：二語の関係・類義語・対義語', quizId: 'uni-spi-lang-01', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: 'SPI', cls: 'badge--sky' }, { text: '大学生', cls: 'badge--neutral' }] },
          { label: 'SPI言語：語句の意味・用法',           quizId: 'uni-spi-lang-02', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: 'SPI', cls: 'badge--sky' }, { text: '大学生', cls: 'badge--neutral' }] },
          { label: 'SPI言語：文章完成・接続詞補充',       quizId: 'uni-spi-lang-03', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: 'SPI', cls: 'badge--sky' }, { text: '大学生', cls: 'badge--neutral' }] },
          { label: 'SPI言語：長文読解・文章理解',         quizId: 'uni-spi-lang-04', count: 30, time: '約15分', difficulty: 4, gacha: false, isNew: true,
            tags: [{ text: 'SPI', cls: 'badge--sky' }, { text: '大学生', cls: 'badge--neutral' }] },
        ]
      },
      {
        id: 'spi-math', label: 'SPI非言語',
        emoji: '🔢',
        units: [
          { label: 'SPI非言語：割合・比・濃度',       quizId: 'uni-spi-math-01', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: 'SPI', cls: 'badge--sky' }, { text: '大学生', cls: 'badge--neutral' }] },
          { label: 'SPI非言語：速さ・時間・距離',     quizId: 'uni-spi-math-02', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: 'SPI', cls: 'badge--sky' }, { text: '大学生', cls: 'badge--neutral' }] },
          { label: 'SPI非言語：場合の数・確率',       quizId: 'uni-spi-math-03', count: 30, time: '約15分', difficulty: 4, gacha: false, isNew: true,
            tags: [{ text: 'SPI', cls: 'badge--sky' }, { text: '大学生', cls: 'badge--neutral' }] },
          { label: 'SPI非言語：推論・集合・論理',     quizId: 'uni-spi-math-04', count: 30, time: '約15分', difficulty: 4, gacha: false, isNew: true,
            tags: [{ text: 'SPI', cls: 'badge--sky' }, { text: '大学生', cls: 'badge--neutral' }] },
        ]
      },
    ]
  },

  {
    id: 'adult',
    label: '大人',
    ruby: 'おとな',
    emoji: '👔',
    colorClass: 'cat--adult',
    subjects: [
      {
        id: 'exam-adult', label: '資格・検定',
        emoji: '📋',
        units: [
          { label: '漢字検定2級レベル', quizId: 'adult-exam-01', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: 'FP3級・お金の基礎知識', quizId: 'adult-exam-02', count: 30, time: '約15分', difficulty: 3, gacha: false,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '英検2級レベル 英語', quizId: 'adult-exam-03', count: 30, time: '約15分', difficulty: 3, gacha: false,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '宅建基礎知識', quizId: 'adult-exam-04', count: 30, time: '約15分', difficulty: 3, gacha: false,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: 'ITパスポート基礎', quizId: 'adult-exam-05', count: 30, time: '約15分', difficulty: 3, gacha: false,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '日商簿記3級', quizId: 'adult-exam-06', count: 30, time: '約15分', difficulty: 3, gacha: true, isNew: true,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '普通自動車免許 学科', quizId: 'adult-exam-07', count: 30, time: '約15分', difficulty: 2, gacha: true, isNew: true,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '危険物取扱者 乙4', quizId: 'adult-exam-08', count: 30, time: '約15分', difficulty: 3, gacha: true, isNew: true,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '秘書検定2級', quizId: 'adult-exam-09', count: 30, time: '約15分', difficulty: 3, gacha: true, isNew: true,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '漢字検定 準2級', quizId: 'adult-exam-10', count: 30, time: '約15分', difficulty: 3, gacha: true, isNew: true,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: 'メンタルヘルス・マネジメント検定', quizId: 'adult-exam-11', count: 30, time: '約15分', difficulty: 3, gacha: true, isNew: true,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: 'ビジネス実務法務検定3級', quizId: 'adult-exam-12', count: 30, time: '約15分', difficulty: 3, gacha: true, isNew: true,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '食品衛生責任者', quizId: 'adult-exam-13', count: 29, time: '約15分', difficulty: 2, gacha: true, isNew: true,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '色彩検定3級', quizId: 'adult-exam-14', count: 29, time: '約15分', difficulty: 2, gacha: true, isNew: true,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '医療事務・調剤薬局事務', quizId: 'adult-exam-15', count: 28, time: '約15分', difficulty: 3, gacha: true, isNew: true,
            tags: [{ text: '資格', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
        ]
      },
      {
        id: 'toeic-adult', label: 'TOEIC',
        emoji: '🌐',
        units: [
          { label: 'TOEIC頻出動詞クイズ',             quizId: 'adult-toeic-01', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: 'TOEIC', cls: 'badge--sky' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: 'TOEIC頻出名詞クイズ',             quizId: 'adult-toeic-02', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: 'TOEIC', cls: 'badge--sky' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: 'TOEIC頻出形容詞・副詞クイズ',     quizId: 'adult-toeic-03', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: 'TOEIC', cls: 'badge--sky' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: 'TOEICビジネス英語フレーズクイズ', quizId: 'adult-toeic-04', count: 30, time: '約15分', difficulty: 4, gacha: false, isNew: true,
            tags: [{ text: 'TOEIC', cls: 'badge--sky' }, { text: '大人向け', cls: 'badge--neutral' }] },
        ]
      },
      {
        id: 'japanese-adult', label: '日本語',
        emoji: '📝',
        units: [
          { label: '難読漢字クイズ', quizId: 'adult-kanji-01', count: 30, time: '約15分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: '日本語', cls: 'badge--orange' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: 'ことわざ・四字熟語', quizId: 'adult-kotowaza-01', count: 30, time: '約15分', difficulty: 3, gacha: false,
            tags: [{ text: '日本語', cls: 'badge--orange' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '実は間違えてる日本語', quizId: 'adult-nihongo-01', count: 30, time: '約15分', difficulty: 3, gacha: false,
            tags: [{ text: '日本語', cls: 'badge--orange' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '全国難読地名', quizId: 'adult-chimei-01', count: 30, time: '約15分', difficulty: 3, gacha: false,
            tags: [{ text: '日本語', cls: 'badge--orange' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '語源クイズ〜この言葉どこから来た？〜', quizId: 'adult-gogen-01', count: 20, time: '約10分', difficulty: 2, gacha: false, isNew: true,
            tags: [{ text: '日本語', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
        ]
      },
      {
        id: 'kyoyo-adult', label: '教養',
        emoji: '🎓',
        units: [
          { label: '防災・緊急時の正しい行動クイズ', quizId: 'adult-bousai-01', count: 20, time: '約10分', difficulty: 2, gacha: false, isNew: true,
            tags: [{ text: '教養', cls: 'badge--orange' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '知らないと損する法律クイズ', quizId: 'adult-law-01', count: 20, time: '約10分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: '教養', cls: 'badge--orange' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: 'マナー違反チェッククイズ', quizId: 'adult-manner-01', count: 20, time: '約10分', difficulty: 2, gacha: false, isNew: true,
            tags: [{ text: '教養', cls: 'badge--green' }, { text: '大人向け', cls: 'badge--neutral' }] },
        ]
      },
      {
        id: 'trivia-adult', label: '雑学',
        emoji: '💡',
        units: [
          { label: '日本の雑学・豆知識', quizId: 'adult-trivia-01', count: 30, time: '約15分', difficulty: 2, gacha: false, isNew: true,
            tags: [{ text: '雑学', cls: 'badge--orange' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '世界の雑学・豆知識', quizId: 'adult-trivia-02', count: 30, time: '約15分', difficulty: 2, gacha: false,
            tags: [{ text: '雑学', cls: 'badge--orange' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '動物の驚き豆知識', quizId: 'adult-animal-01', count: 30, time: '約15分', difficulty: 2, gacha: false, isNew: true,
            tags: [{ text: '雑学', cls: 'badge--green' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '読めないブランド名', quizId: 'adult-brand-01', count: 30, time: '約15分', difficulty: 2, gacha: false, isNew: true,
            tags: [{ text: '雑学', cls: 'badge--orange' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '人体の不思議クイズ', quizId: 'adult-body-01', count: 20, time: '約10分', difficulty: 2, gacha: false, isNew: true,
            tags: [{ text: '雑学', cls: 'badge--orange' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '経済学の基本クイズ', quizId: 'adult-econ-01', count: 20, time: '約10分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: '雑学', cls: 'badge--sky' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '食べ物・料理の意外な豆知識', quizId: 'adult-food-01', count: 20, time: '約10分', difficulty: 2, gacha: false, isNew: true,
            tags: [{ text: '雑学', cls: 'badge--orange' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: '心理学の面白い法則・現象', quizId: 'adult-psych-01', count: 20, time: '約10分', difficulty: 3, gacha: false, isNew: true,
            tags: [{ text: '雑学', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
          { label: 'カタカナ語の本当の意味クイズ', quizId: 'adult-katakana-01', count: 20, time: '約10分', difficulty: 2, gacha: false, isNew: true,
            tags: [{ text: '雑学', cls: 'badge--purple' }, { text: '大人向け', cls: 'badge--neutral' }] },
        ]
      },
    ]
  },

  {
    id: 'puzzle',
    label: 'パズル',
    ruby: 'ぱずる',
    emoji: '🧩',
    colorClass: 'cat--puzzle',
    subjects: [
      {
        id: 'logic',
        label: '論理・思考',
        emoji: '🧠',
        badge: { text: '思考', cls: 'badge--yellow' },
        units: [
          {
            label: 'ロジカルパズル入門',
            quizId: 'logic',
            count: 15,
            time: '約5分',
            difficulty: 2,
            gacha: false,
            tags: [{ text: '思考', cls: 'badge--yellow' }, { text: 'パズル', cls: 'badge--neutral' }]
          }
        ]
      },
      {
        id: 'sudoku',
        label: 'ナンプレ',
        emoji: '🔢',
        badge: { text: 'ナンプレ', cls: 'badge--yellow' },
        units: [
          {
            label: 'ナンプレ（数独）',
            quizId: 'nanpure',
            count: null,
            time: '自由',
            difficulty: 2,
            gacha: true,
            tags: [{ text: '思考', cls: 'badge--yellow' }, { text: 'パズル', cls: 'badge--neutral' }]
          }
        ]
      },
      {
        id: 'boardgames',
        label: '囲碁・将棋',
        emoji: '♟',
        badge: { text: '思考', cls: 'badge--purple' },
        units: [
          {
            label: '囲碁入門（生き死に問題3問）',
            quizId: 'igo',
            count: null,
            time: '約10分',
            difficulty: 2,
            gacha: false,
            tags: [{ text: '囲碁', cls: 'badge--neutral' }, { text: 'パズル', cls: 'badge--neutral' }]
          },
          {
            label: '詰将棋入門（1手詰め5問）',
            quizId: 'shogi',
            count: null,
            time: '約10分',
            difficulty: 2,
            gacha: false,
            tags: [{ text: '将棋', cls: 'badge--neutral' }, { text: 'パズル', cls: 'badge--neutral' }]
          },
          {
            label: '3手詰め入門（10問）',
            quizId: 'tsume3',
            count: null,
            time: '約15分',
            difficulty: 3,
            gacha: false,
            tags: [{ text: '将棋', cls: 'badge--neutral' }, { text: 'パズル', cls: 'badge--neutral' }]
          }
        ]
      }
    ]
  }
];
