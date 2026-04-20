// ===== 進行形・過去形クイズ =====
const UNIT_QUIZ = {
  meta: {
    id: 'mid-english-03',
    title: '進行形・過去形クイズ',
    fullTitle: '進行形・過去形クイズ　全10問',
    gradeTag: '🏫 中学生向け',
    subject: '英語',
    accent: '#2980B9',
    badgeCls: 'badge--sky',
  },
  questions: [
    {
      text: 'She ___ reading a book now. 正しいのは？',
      choices: ['is', 'are', 'am', 'be'],
      answer: 0,
      exp: '現在進行形はbe動詞（am/is/are）＋動詞-ing。主語がSheなのでis。',
    },
    {
      text: 'They ___ playing soccer yesterday. 正しいのは？',
      choices: ['are', 'is', 'were', 'was'],
      answer: 2,
      exp: '過去進行形はwas/were＋動詞-ing。主語がtheyなのでwere。',
    },
    {
      text: 'I ___ to the park last Sunday. 正しいのは？',
      choices: ['go', 'goes', 'went', 'going'],
      answer: 2,
      exp: 'last Sundayは過去を示す副詞句。goの過去形はwent（不規則変化）。',
    },
    {
      text: 'run の-ing形として正しいのは？',
      choices: ['runing', 'running', 'runs', 'ranned'],
      answer: 1,
      exp: '1音節で短母音＋子音で終わる動詞は子音を重ねてingをつける（run→running）。',
    },
    {
      text: 'She ___ not watching TV when I called.',
      choices: ['is', 'was', 'were', 'be'],
      answer: 1,
      exp: '過去進行形の否定：was not（wasn\'t）＋動詞-ing。主語Sheはwas。',
    },
    {
      text: '次の文を過去形に：I eat breakfast every morning.',
      choices: ['I ate breakfast every morning.', 'I eated breakfast every morning.', 'I eating breakfast every morning.', 'I ating breakfast every morning.'],
      answer: 0,
      exp: 'eatの過去形はate（不規則変化）。ruleをeat→eatedと規則変化させるのは誤り。',
    },
    {
      text: 'He ___ a letter to his friend last week.',
      choices: ['write', 'writes', 'wrote', 'written'],
      answer: 2,
      exp: 'last weekは過去。writeの過去形はwrote（不規則変化）。過去分詞はwritten。',
    },
    {
      text: 'We were eating dinner ___ she arrived.',
      choices: ['after', 'when', 'since', 'until'],
      answer: 1,
      exp: '過去進行形（were eating）＋when＋過去形（arrived）は「〜していたとき〜した」の構文。',
    },
    {
      text: 'study の過去形はどれ？',
      choices: ['studyed', 'studyed', 'studied', 'studing'],
      answer: 2,
      exp: '子音＋yで終わる動詞はyをiに変えてedをつける（study→studied）。',
    },
    {
      text: 'Were they swimming in the pool?の肯定の答えは？',
      choices: ['Yes, they were.', 'Yes, they are.', 'Yes, they did.', 'Yes, they was.'],
      answer: 0,
      exp: 'Were...?で始まる過去進行形の疑問文にはYes, 主語+were.で答える。',
    },
  ]
};
