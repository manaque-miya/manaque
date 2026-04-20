// ===== 不定詞・動名詞クイズ =====
const UNIT_QUIZ = {
  meta: {
    id: 'mid-english-06',
    title: '不定詞・動名詞クイズ',
    fullTitle: '不定詞・動名詞クイズ　全10問',
    gradeTag: '🏫 中学生向け',
    subject: '英語',
    accent: '#2980B9',
    badgeCls: 'badge--sky',
  },
  questions: [
    {
      text: 'I want ___ to the park.（公園に行きたい）',
      choices: ['go', 'going', 'to go', 'gone'],
      answer: 2,
      exp: 'want＋to不定詞（to＋動詞原形）。want goingは誤り。',
    },
    {
      text: 'She enjoys ___ music.（音楽を聴くのが好き）',
      choices: ['to listen', 'listen', 'listening', 'listened'],
      answer: 2,
      exp: 'enjoyは動名詞（-ing）を目的語にとる動詞。enjoy to listenは誤り。',
    },
    {
      text: '不定詞の副詞的用法（目的）の例として正しいのは？',
      choices: ['I have a book to read.', 'I went to the store to buy milk.', 'To swim is fun.', 'He is happy to help.'],
      answer: 1,
      exp: '「〜するために」という目的を表す副詞的用法。I went...to buy milk（牛乳を買うために行った）。',
    },
    {
      text: 'He stopped ___ suddenly.（突然立ち止まった）',
      choices: ['to walk', 'walk', 'walking', 'walked'],
      answer: 2,
      exp: 'stop＋動名詞は「〜するのをやめる」。stop to walk（歩くために止まった）とは意味が違う。',
    },
    {
      text: 'It is important ___ exercise every day.',
      choices: ['to', 'for', 'that', 'of'],
      answer: 0,
      exp: 'It is＋形容詞＋to不定詞の構文。形式主語itを使い不定詞を後置する。',
    },
    {
      text: 'She decided ___ a doctor.（医者になると決めた）',
      choices: ['being', 'to be', 'be', 'been'],
      answer: 1,
      exp: 'decideはto不定詞を目的語にとる動詞（decide to do）。',
    },
    {
      text: '___ English is not easy.（英語を話すことは難しくない）',
      choices: ['Speak', 'To speak / Speaking', 'Spoken', 'Speaks'],
      answer: 1,
      exp: '主語になる不定詞（To speak）または動名詞（Speaking）が使える。どちらも正しい。',
    },
    {
      text: 'I am glad ___ you again.（また会えてうれしい）',
      choices: ['see', 'seeing', 'to see', 'seen'],
      answer: 2,
      exp: 'glad＋to不定詞で感情の原因を表す（感情形容詞＋to）。',
    },
    {
      text: 'finish の後に来るのはどちら？',
      choices: ['to不定詞', '動名詞（-ing）', 'どちらでもよい', '原形のみ'],
      answer: 1,
      exp: 'finish、enjoy、mind、avoid、stopなどは動名詞（-ing）を目的語にとる。',
    },
    {
      text: '彼女は何か食べるものが欲しい。→ She wants something ___ eat.',
      choices: ['for', 'of', 'to', 'in'],
      answer: 2,
      exp: 'something to eat＝食べるための何か。名詞＋to不定詞で不定詞の形容詞的用法。',
    },
  ]
};
