// ===== 現在完了形クイズ =====
const UNIT_QUIZ = {
  meta: {
    id: 'mid-english-10',
    title: '現在完了形クイズ',
    fullTitle: '現在完了形クイズ　全10問',
    gradeTag: '🏫 中学生向け',
    subject: '英語',
    accent: '#2980B9',
    badgeCls: 'badge--sky',
  },
  questions: [
    {
      text: '現在完了形の基本形として正しいのは？',
      choices: ['be動詞＋過去分詞', 'have/has＋過去分詞', 'did＋動詞の原形', 'was/were＋動詞-ing'],
      answer: 1,
      exp: '現在完了形はhave（has）＋過去分詞。過去と現在をつなぐ表現（経験・継続・完了・結果）。',
    },
    {
      text: 'I ___ never been to Paris.（パリに行ったことがない）',
      choices: ['have', 'has', 'had', 'did'],
      answer: 0,
      exp: '主語がIの現在完了はhave＋過去分詞。neverは経験の否定。',
    },
    {
      text: 'She ___ just finished her homework.',
      choices: ['have', 'has', 'had', 'did'],
      answer: 1,
      exp: '主語がShe（三人称単数）の現在完了はhas＋過去分詞。justは「ちょうど〜したところ」（完了）。',
    },
    {
      text: 'Have you ever ___ sushi?（寿司を食べたことがある？）',
      choices: ['eat', 'ate', 'eaten', 'eating'],
      answer: 2,
      exp: '現在完了のhave＋過去分詞。eatの過去分詞はeaten（不規則変化）。',
    },
    {
      text: 'I have lived here ___ five years.（5年間住んでいる）',
      choices: ['since', 'for', 'during', 'by'],
      answer: 1,
      exp: '継続の現在完了でforは期間（5年間）の長さを示す。sinceは起点（2019年から）。',
    },
    {
      text: 'She has ___ to New York three times.',
      choices: ['go', 'gone', 'went', 'been'],
      answer: 3,
      exp: 'go to〜に行ったことがある（経験）はhave been to〜。have gone to〜は「行ってしまった（今ここにいない）」。',
    },
    {
      text: '現在完了と過去形の違いとして正しいのは？',
      choices: ['どちらも同じ', '過去形は過去の一点・現在完了は現在へのつながりを含む', '現在完了は現在のみを表す', '過去形は現在完了より丁寧'],
      answer: 1,
      exp: 'yesterdayやlast yearなど過去の時点を示す語は現在完了と使えない。She went there yesterday.（◯）She has gone there yesterday.（✗）',
    },
    {
      text: '___ you ever seen a shooting star?',
      choices: ['Did', 'Have', 'Had', 'Do'],
      answer: 1,
      exp: 'Have you ever＋過去分詞は経験を尋ねる定番表現（流れ星を見たことある？）。',
    },
    {
      text: 'He has ___ in London since 2020.',
      choices: ['live', 'lived', 'living', 'lives'],
      answer: 1,
      exp: '現在完了継続のhave＋過去分詞。liveの過去分詞はlived（規則変化）。',
    },
    {
      text: 'I have already ___ the report.（もうレポートを書いた）',
      choices: ['write', 'wrote', 'written', 'writing'],
      answer: 2,
      exp: 'alreadyは完了の現在完了でよく使う。writeの過去分詞はwritten（不規則変化）。',
    },
  ]
};
