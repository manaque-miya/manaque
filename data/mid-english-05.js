// ===== 比較（比較級・最上級）クイズ =====
const UNIT_QUIZ = {
  meta: {
    id: 'mid-english-05',
    title: '比較（比較級・最上級）クイズ',
    fullTitle: '比較（比較級・最上級）クイズ　全10問',
    gradeTag: '🏫 中学生向け',
    subject: '英語',
    accent: '#2980B9',
    badgeCls: 'badge--sky',
  },
  questions: [
    {
      text: 'tallの比較級として正しいのは？',
      choices: ['more tall', 'taller', 'tallest', 'most tall'],
      answer: 1,
      exp: '1〜2音節の形容詞の比較級は-erをつける（tall→taller）。3音節以上はmore＋原級。',
    },
    {
      text: 'This is the ___ mountain in Japan.（日本で一番高い山）',
      choices: ['highest', 'higher', 'most high', 'high'],
      answer: 0,
      exp: '最上級はthe＋形容詞-est。高いはhigh→highest。富士山の文脈にふさわしい。',
    },
    {
      text: 'She is ___ than her sister.（より賢い）',
      choices: ['more smarter', 'smarter', 'most smart', 'smartest'],
      answer: 1,
      exp: 'smartは1音節なので比較級は-er。more smarterは二重比較で誤り。',
    },
    {
      text: 'This book is ___ interesting than that one.',
      choices: ['more', 'most', 'much', 'very'],
      answer: 0,
      exp: '3音節以上または-ful/-less/-ingなどの形容詞の比較級はmore＋原級。',
    },
    {
      text: 'good の最上級として正しいのは？',
      choices: ['goodest', 'more good', 'best', 'most good'],
      answer: 2,
      exp: 'goodの比較級・最上級は不規則変化：good→better→best。',
    },
    {
      text: 'This is ___ expensive of all the items.',
      choices: ['the most', 'more', 'much', 'most'],
      answer: 0,
      exp: '最上級は通常the＋形容詞-estまたはthe most＋形容詞。of all...で範囲を示す。',
    },
    {
      text: 'He runs ___ than I do.（より速く）',
      choices: ['more fast', 'fastest', 'faster', 'most fast'],
      answer: 2,
      exp: 'fastは1音節副詞なので比較級は-er（faster）。副詞も形容詞と同様に変化する。',
    },
    {
      text: 'Mt. Fuji is ___ than Mt. Takao.',
      choices: ['high', 'highest', 'higher', 'most high'],
      answer: 2,
      exp: '2つを比べるときは比較級（-er / more）＋than。富士山と高尾山の比較。',
    },
    {
      text: 'She is as ___ as her mother.（同じくらい背が高い）',
      choices: ['taller', 'tall', 'tallest', 'more tall'],
      answer: 1,
      exp: 'as＋形容詞の原級＋asで「〜と同じくらい…だ」という同等比較。',
    },
    {
      text: 'bad の比較級として正しいのは？',
      choices: ['badder', 'more bad', 'worse', 'baddest'],
      answer: 2,
      exp: 'badは不規則変化：bad→worse→worst。goodと同様に特別な形になる。',
    },
  ]
};
