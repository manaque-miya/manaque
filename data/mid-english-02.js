// ===== 疑問文・否定文クイズ =====
const UNIT_QUIZ = {
  meta: {
    id: 'mid-english-02',
    title: '疑問文・否定文クイズ',
    fullTitle: '疑問文・否定文クイズ　全10問',
    gradeTag: '🏫 中学生向け',
    subject: '英語',
    accent: '#2980B9',
    badgeCls: 'badge--sky',
  },
  questions: [
    {
      text: 'Do you like music? の否定の答えは？',
      choices: ['No, I don\'t.', 'No, I doesn\'t.', 'No, I am not.', 'No, I isn\'t.'],
      answer: 0,
      exp: '一般動詞の否定答えはdo not（don\'t）を使う。be動詞の疑問にはam/is/areで答える。',
    },
    {
      text: 'Does she play the piano? の肯定の答えは？',
      choices: ['Yes, she do.', 'Yes, she does.', 'Yes, she is.', 'Yes, she plays.'],
      answer: 1,
      exp: 'Does疑問文の肯定答えはYes, 主語+does.（動詞は不要）。',
    },
    {
      text: '次の疑問文に直せ：He likes dogs. → ___',
      choices: ['Do he like dogs?', 'Does he like dogs?', 'Is he like dogs?', 'Has he like dogs?'],
      answer: 1,
      exp: '三人称単数の一般動詞の疑問文はDoes＋主語＋動詞の原形？ likeと原形に戻すのを忘れずに。',
    },
    {
      text: 'What ___ he do after school?',
      choices: ['do', 'does', 'is', 'are'],
      answer: 1,
      exp: 'Whatを使った一般動詞疑問文も三人称単数ならdoes。What does he do...?',
    },
    {
      text: 'She doesn\'t ___ coffee. 正しいのは？',
      choices: ['drinks', 'drinking', 'drink', 'drank'],
      answer: 2,
      exp: 'doesn\'t（does not）の後は動詞の原形。三人称単数のsは否定文では不要。',
    },
    {
      text: 'How many books ___ you have? 正しいのは？',
      choices: ['does', 'is', 'do', 'are'],
      answer: 2,
      exp: '主語がyouの一般動詞疑問文はdo。How many...?は数を尋ねる表現。',
    },
    {
      text: '否定文に直せ：I have a dog. → I ___ have a dog.',
      choices: ['am not', 'doesn\'t', 'don\'t', 'does not'],
      answer: 2,
      exp: '主語がIの一般動詞否定文はdo not（don\'t）＋動詞原形。',
    },
    {
      text: 'Who ___ that woman? （彼女は誰ですか）',
      choices: ['do', 'does', 'is', 'are'],
      answer: 2,
      exp: 'whoを主語として尋ねる場合はWho is...? be動詞を使う疑問文。',
    },
    {
      text: '___ your parents like Japanese food?',
      choices: ['Does', 'Do', 'Is', 'Are'],
      answer: 1,
      exp: '主語がyour parents（複数）なのでDo。三人称複数もDoを使う。',
    },
    {
      text: 'Where ___ he go on Sundays?',
      choices: ['do', 'is', 'does', 'are'],
      answer: 2,
      exp: '主語がhe（三人称単数）の一般動詞疑問文はdoes。Where does he go...?',
    },
  ]
};
