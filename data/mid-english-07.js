// ===== 接続詞・前置詞クイズ =====
const UNIT_QUIZ = {
  meta: {
    id: 'mid-english-07',
    title: '接続詞・前置詞クイズ',
    fullTitle: '接続詞・前置詞クイズ　全10問',
    gradeTag: '🏫 中学生向け',
    subject: '英語',
    accent: '#2980B9',
    badgeCls: 'badge--sky',
  },
  questions: [
    {
      text: 'I like both cats ___ dogs.',
      choices: ['or', 'nor', 'and', 'but'],
      answer: 2,
      exp: 'both A and Bで「AもBも両方」。both A or Bは誤り。',
    },
    {
      text: 'She was tired, ___ she kept working.',
      choices: ['so', 'but', 'because', 'and'],
      answer: 1,
      exp: 'butは逆接（〜だが）。「疲れていたが働き続けた」という逆の内容をつなぐ。',
    },
    {
      text: '___ it was raining, we went out.',
      choices: ['Because', 'Although / Even though', 'Since', 'When'],
      answer: 1,
      exp: 'Although（Even though）は譲歩の接続詞「〜だが・にもかかわらず」。雨でも出かけたという逆接。',
    },
    {
      text: 'I will call you ___ I arrive.',
      choices: ['until', 'when', 'while', 'since'],
      answer: 1,
      exp: 'when＋未来の内容でも現在形を使う（時の副詞節）。「着いたら電話する」。',
    },
    {
      text: 'She has lived here ___ 2010.',
      choices: ['for', 'since', 'during', 'by'],
      answer: 1,
      exp: 'sinceは起点（2010年から）。forは期間の長さ（for 10 years）。',
    },
    {
      text: 'The book is ___ the table.（テーブルの上）',
      choices: ['in', 'on', 'at', 'under'],
      answer: 1,
      exp: 'on＝表面に接触している状態。in＝内側。under＝下。at＝地点・場所全般。',
    },
    {
      text: 'I study English ___ the morning.',
      choices: ['on', 'in', 'at', 'by'],
      answer: 1,
      exp: 'in the morning/afternoon/eveningはinを使う。at night（夜）は例外。',
    },
    {
      text: 'She will finish ___ Friday.',
      choices: ['in', 'on', 'at', 'by'],
      answer: 3,
      exp: 'byは期限（〜までに）。on Fridayは「金曜日に」。by Fridayは「金曜日までに（完了）」。',
    },
    {
      text: 'neither A ___ B（AもBも〜ない）の正しい形は？',
      choices: ['or', 'and', 'nor', 'but'],
      answer: 2,
      exp: 'neither A nor B＝AもBも〜ない。either A or B（AかBのどちらか）とセットで覚える。',
    },
    {
      text: 'I have known him ___ we were children.',
      choices: ['for', 'since', 'during', 'when'],
      answer: 1,
      exp: 'since＋過去の時点または節（we were children）で「〜以来ずっと」。',
    },
  ]
};
