// ===== 受動態クイズ =====
const UNIT_QUIZ = {
  meta: {
    id: 'mid-english-09',
    title: '受動態クイズ',
    fullTitle: '受動態クイズ　全10問',
    gradeTag: '🏫 中学生向け',
    subject: '英語',
    accent: '#2980B9',
    badgeCls: 'badge--sky',
  },
  questions: [
    {
      text: '受動態の基本形として正しいのは？',
      choices: ['be動詞＋動詞の原形', 'be動詞＋過去分詞', 'have＋過去分詞', 'do＋動詞の原形'],
      answer: 1,
      exp: '受動態（受け身）はbe動詞＋過去分詞。「〜される」を表す。行為者はby＋名詞で示す。',
    },
    {
      text: 'This letter was written ___ Tom.',
      choices: ['to', 'by', 'for', 'from'],
      answer: 1,
      exp: '受動態で動作の主体（行為者）を示すときはby＋名詞。',
    },
    {
      text: '能動態 They speak English here. を受動態にすると？',
      choices: ['English is spoken here.', 'English speaks here.', 'English was spoken here.', 'English is speaking here.'],
      answer: 0,
      exp: '主語Englishは物・現在形なのでis spoken。行為者theyは省略できる。',
    },
    {
      text: 'The window ___ broken by the ball.（窓はボールで割られた）',
      choices: ['is', 'was', 'has', 'did'],
      answer: 1,
      exp: '過去の受動態はwas/were＋過去分詞。windowは単数なのでwas。',
    },
    {
      text: 'She ___ invited to the party.（彼女はパーティーに招待された）',
      choices: ['is', 'was', 'were', 'be'],
      answer: 1,
      exp: '主語がShe（単数）の過去受動態はwas invited。',
    },
    {
      text: '受動態の否定文：The work was not ___ on time.',
      choices: ['finish', 'finished', 'finishing', 'finishes'],
      answer: 1,
      exp: '受動態の否定はwas/were not＋過去分詞。finishedが正しい過去分詞。',
    },
    {
      text: 'Is English ___ in this country?（英語は話されていますか）',
      choices: ['speak', 'spoken', 'speaking', 'speaks'],
      answer: 1,
      exp: '受動態の疑問文はbe動詞＋主語＋過去分詞？ Is English spoken...?',
    },
    {
      text: '能動態 Someone stole my bike. の受動態は？',
      choices: ['My bike is stolen.', 'My bike was stolen.', 'My bike stolen was.', 'My bike were stolen.'],
      answer: 1,
      exp: '過去の受動態。主語はmy bike（単数）なのでwas stolen。行為者someonはby someoneを省略できる。',
    },
    {
      text: '助動詞のある受動態：This problem must ___ solved.',
      choices: ['be', 'is', 'was', 'being'],
      answer: 0,
      exp: '助動詞＋be＋過去分詞が助動詞のある受動態の形。must be solved＝解決されなければならない。',
    },
    {
      text: '進行形受動態：The house is being ___ now.（今建てられている）',
      choices: ['build', 'builds', 'built', 'building'],
      answer: 2,
      exp: '進行形受動態はis/are being＋過去分詞。buildの過去分詞はbuilt。',
    },
  ]
};
