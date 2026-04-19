// ===== まなクエ！ サイト構造データ =====
// ここを編集するだけで学年・科目・単元の追加・削除ができる
// quiz.html に対応する <script src="data/xxx.js"> の追加も忘れずに

const SITE_STRUCTURE = [
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
            count: 5,
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
          }
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
            count: 5,
            time: '約5分',
            difficulty: 2,
            gacha: false,
            tags: [{ text: '理科', cls: 'badge--purple' }, { text: '小学生', cls: 'badge--neutral' }]
          }
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
            count: 5,
            time: '約5分',
            difficulty: 3,
            gacha: false,
            tags: [{ text: '算数', cls: 'badge--yellow' }, { text: '小学生', cls: 'badge--neutral' }]
          }
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
        id: 'english',
        label: '英語',
        emoji: '🔤',
        badge: { text: '英語', cls: 'badge--sky' },
        units: [
          {
            label: 'よく出る英単語クイズ',
            quizId: 'english',
            count: 5,
            time: '約5分',
            difficulty: 3,
            gacha: false,
            tags: [{ text: '英語', cls: 'badge--sky' }, { text: '中学生', cls: 'badge--neutral' }]
          }
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
            count: 5,
            time: '約5分',
            difficulty: 4,
            gacha: false,
            tags: [{ text: '歴史', cls: 'badge--orange' }, { text: '中学受験', cls: 'badge--brand' }]
          }
        ]
      }
    ]
  },

  {
    id: 'entrance',
    label: '中学受験',
    ruby: 'ちゅうじゅけん',
    emoji: '✏️',
    colorClass: 'cat--chujuken',
    subjects: [
      {
        id: 'history-exam',
        label: '歴史',
        emoji: '📜',
        badge: { text: '歴史', cls: 'badge--orange' },
        units: [
          {
            label: '明治時代クイズ',
            quizId: 'meiji',
            count: 5,
            time: '約5分',
            difficulty: 4,
            gacha: false,
            tags: [{ text: '歴史', cls: 'badge--orange' }, { text: '中学受験', cls: 'badge--brand' }]
          }
        ]
      }
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
            count: 5,
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
          }
        ]
      }
    ]
  }
];
