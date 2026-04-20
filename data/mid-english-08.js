// ===== 関係代名詞クイズ =====
const UNIT_QUIZ = {
  meta: {
    id: 'mid-english-08',
    title: '関係代名詞クイズ',
    fullTitle: '関係代名詞クイズ　全10問',
    gradeTag: '🏫 中学生向け',
    subject: '英語',
    accent: '#2980B9',
    badgeCls: 'badge--sky',
  },
  questions: [
    {
      text: 'The girl ___ is singing is my sister.（歌っている女の子）',
      choices: ['which', 'whom', 'who', 'whose'],
      answer: 2,
      exp: '先行詞が人・主格の関係代名詞はwho。The girl who is singing...',
    },
    {
      text: 'This is the book ___ I bought yesterday.',
      choices: ['who', 'whom', 'which / that', 'whose'],
      answer: 2,
      exp: '先行詞が物・目的格の関係代名詞はwhich（またはthat）。',
    },
    {
      text: 'She is the teacher ___ everyone loves.',
      choices: ['who', 'which', 'whom', 'whose'],
      answer: 2,
      exp: '先行詞が人・目的格の関係代名詞はwhom（口語ではwhoも可）。everyone lovesの目的語が欠けている。',
    },
    {
      text: 'The man ___ car was stolen called the police.',
      choices: ['who', 'which', 'whose', 'that'],
      answer: 2,
      exp: 'whoseは所有格の関係代名詞（〜の）。The man whose car...＝車が盗まれた男性。',
    },
    {
      text: '関係代名詞thatが使えないのはどの場合？',
      choices: ['先行詞が人のとき', '先行詞が物のとき', '前置詞の直後（in which → in thatはNG）', '最上級の先行詞のとき'],
      answer: 2,
      exp: '前置詞＋関係代名詞ではthatは使えない（in which, at whichなど）。thatは前置詞を文末に移動させる形で使う。',
    },
    {
      text: 'Do you know the restaurant ___ serves great sushi?',
      choices: ['which / that', 'who', 'whom', 'whose'],
      answer: 0,
      exp: '先行詞がrestaurant（物・場所）で主格なのでwhich（またはthat）。',
    },
    {
      text: 'She has a friend ___ speaks five languages.',
      choices: ['which', 'whose', 'who', 'whom'],
      answer: 2,
      exp: '先行詞がfriend（人）で主格なのでwho。',
    },
    {
      text: 'This is the reason ___ I was late.',
      choices: ['which', 'why', 'who', 'whose'],
      answer: 1,
      exp: '先行詞がreason（理由）のとき関係副詞whyが使える。the reason why...＝〜な理由。',
    },
    {
      text: '先行詞がない関係代名詞 what の意味はどれ？',
      choices: ['〜の', '〜な人', '〜ということ / 〜のもの', '〜のとき'],
      answer: 2,
      exp: 'whatは先行詞を含む関係代名詞（the thing which）。What he said is true.＝彼が言ったことは本当だ。',
    },
    {
      text: 'The city ___ I was born is Osaka.',
      choices: ['which', 'that', 'where', 'who'],
      answer: 2,
      exp: '先行詞がcity（場所）のとき関係副詞whereが使える（またはin which）。',
    },
  ]
};
