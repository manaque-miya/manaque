// ===== 未来形・助動詞クイズ =====
const UNIT_QUIZ = {
  meta: {
    id: 'mid-english-04',
    title: '未来形・助動詞クイズ',
    fullTitle: '未来形・助動詞クイズ　全10問',
    gradeTag: '🏫 中学生向け',
    subject: '英語',
    accent: '#2980B9',
    badgeCls: 'badge--sky',
  },
  questions: [
    {
      text: 'I ___ visit Kyoto next year. 正しいのは？',
      choices: ['will', 'am', 'do', 'shall'],
      answer: 0,
      exp: 'willは未来を表す助動詞。主語に関係なくwill＋動詞の原形。',
    },
    {
      text: 'She is ___ to study abroad. 正しいのは？',
      choices: ['going', 'go', 'went', 'goes'],
      answer: 0,
      exp: 'be going to＋動詞原形は「〜するつもりだ（予定）」。isの後はgoing。',
    },
    {
      text: 'You ___ not run in the hallway.（廊下を走ってはいけない）',
      choices: ['will', 'must', 'can', 'should'],
      answer: 1,
      exp: 'mustは強い義務・禁止を表す。must not（mustn\'t）で「してはいけない」。',
    },
    {
      text: '___ I use your pen? （ペンを使ってもいいですか）',
      choices: ['Will', 'Must', 'May / Can', 'Should'],
      answer: 2,
      exp: 'May I...? / Can I...?は許可を求める表現。Mayの方がやや丁寧。',
    },
    {
      text: 'You ___ study harder.（もっと勉強すべきだ）',
      choices: ['must', 'can', 'should', 'will'],
      answer: 2,
      exp: 'shouldは「〜すべき」という提案・アドバイス。mustより強制力が弱い。',
    },
    {
      text: 'She ___ speak three languages.（話せる）',
      choices: ['must', 'should', 'can', 'will'],
      answer: 2,
      exp: 'canは能力・可能を表す助動詞。「〜できる」はcan＋動詞原形。',
    },
    {
      text: 'I ___ be late tomorrow.（明日遅刻するかもしれない）',
      choices: ['will', 'must', 'might', 'should'],
      answer: 2,
      exp: 'might（may）は不確かな可能性（〜かもしれない）を表す。willより確信度が低い。',
    },
    {
      text: 'We ___ leave now or we\'ll miss the train.',
      choices: ['should', 'had better', 'must', 'can'],
      answer: 1,
      exp: 'had better＋動詞原形は「〜した方がよい（しないと悪い結果になる）」。shouldより強い警告のニュアンス。',
    },
    {
      text: 'It ___ rain today.（雨が降るだろう）天気予報の表現として自然なのは？',
      choices: ['can', 'should', 'will probably', 'must'],
      answer: 2,
      exp: '天気予報などの予測にはwill（またはwill probably）が自然。mustは論理的確信・canは能力・shouldは義務。',
    },
    {
      text: '___ you help me with this?（手伝ってもらえますか）',
      choices: ['Must', 'Will / Could', 'Should', 'Might'],
      answer: 1,
      exp: 'Will you...? / Could you...?は依頼の表現。Couldの方が丁寧なニュアンス。',
    },
  ]
};
