// ===== be動詞・一般動詞クイズ =====
const UNIT_QUIZ = {
  meta: {
    id: 'mid-english-01',
    title: 'be動詞・一般動詞クイズ',
    fullTitle: 'be動詞・一般動詞クイズ　全10問',
    gradeTag: '🏫 中学生向け',
    subject: '英語',
    accent: '#2980B9',
    badgeCls: 'badge--sky',
  },
  questions: [
    {
      text: 'She ___ a student. 正しいbe動詞は？',
      choices: ['am', 'is', 'are', 'be'],
      answer: 1,
      exp: '主語がhe/she/itの三人称単数のbe動詞はis。I→am、you/we/they→are。',
    },
    {
      text: 'They ___ soccer every weekend. 正しい動詞は？',
      choices: ['plays', 'play', 'is playing', 'played'],
      answer: 1,
      exp: '主語がtheyの現在形は動詞の原形。三人称単数（he/she/it）なら plays（-s/-es）をつける。',
    },
    {
      text: 'I ___ not a teacher. 正しいのは？',
      choices: ['do', 'does', 'am', 'are'],
      answer: 2,
      exp: 'be動詞の否定はam/is/are + not。一般動詞の否定はdo/does + not + 動詞の原形。',
    },
    {
      text: 'He ___ tennis well. 正しい形は？',
      choices: ['play', 'plays', 'is play', 'do play'],
      answer: 1,
      exp: '主語がheの一般動詞現在形は語尾に-sをつける（plays）。疑問文はDoes he play...?',
    },
    {
      text: '次の文の誤りはどこ？ I am play soccer.',
      choices: ['I', 'am', 'play', 'soccer'],
      answer: 1,
      exp: 'be動詞と一般動詞は一緒に使えない。正しくはI play soccer.またはI am playing soccer.（進行形）。',
    },
    {
      text: '___ you a teacher? の答えとして正しいのは？',
      choices: ['Yes, you are.', 'Yes, I am.', 'Yes, I do.', 'Yes, I is.'],
      answer: 1,
      exp: 'be動詞の疑問文Are you...?にはYes, I am. / No, I am not.で答える。',
    },
    {
      text: 'He and I ___ friends. 正しいbe動詞は？',
      choices: ['is', 'am', 'are', 'be'],
      answer: 2,
      exp: '主語がhe and I（複数）のbe動詞はare。',
    },
    {
      text: 'Tom ___ to school by bus. 正しい動詞は？',
      choices: ['go', 'goes', 'is go', 'do go'],
      answer: 1,
      exp: '主語がTom（三人称単数）の一般動詞現在形はgo→goes。',
    },
    {
      text: 'be動詞の過去形でweに使うのはどれ？',
      choices: ['was', 'were', 'been', 'be'],
      answer: 1,
      exp: 'were はyou/we/theyの過去形。I/he/she/itの過去形はwas。',
    },
    {
      text: 'She ___ not like coffee. 正しいのは？',
      choices: ['is', 'am', 'does', 'do'],
      answer: 2,
      exp: '一般動詞の否定は主語が三人称単数のためdoes not（doesn\'t）＋動詞原形。',
    },
  ]
};
