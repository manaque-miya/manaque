/* 古文単語 4コマ漫画データ（kobun-manga.html と unit-quiz.html の共通データ）
   画像: assets/img/kobun-manga/kobun-{id}-manga-{480|768|1024}.webp
   quizUnit が空の語は、対応する問題がまだ無い語。 */
const KOBUN_MANGA = {
  imgBase: 'assets/img/kobun-manga/',
  order: ['utsukushi', 'okashi', 'yukashi', 'imiji', 'natsukashi', 'medetashi', 'arigatashi', 'odoroku'],
  words: {
    utsukushi:  { word: 'うつくし',   mean: 'かわいい・愛らしい',           modern: '美しい',            tip: '小さなものや幼いものを、かわいらしいと感じる気持ちを表します。', quizUnit: 'high-japanese-10', w: 1024, h: 1280 },
    okashi:     { word: 'をかし',     mean: '趣がある・心ひかれる',         modern: 'おかしい（変だ）',  tip: '月や雪の景色など、心が動くものの魅力を表します。',             quizUnit: 'high-japanese-10', w: 1024, h: 1447 },
    yukashi:    { word: 'ゆかし',     mean: '見たい・知りたい',             modern: 'ゆかしい（上品）',  tip: '気になる相手やものに心がひかれて、知りたくなる気持ちを表します。', quizUnit: 'high-japanese-10', w: 1024, h: 1447 },
    imiji:      { word: 'いみじ',     mean: '程度がはなはだしい（ものすごい）', modern: '',              tip: 'よいことにも悪いことにも使い、程度の大きさを表します。',       quizUnit: 'high-japanese-10', w: 1024, h: 1280 },
    natsukashi: { word: 'なつかし',   mean: '親しみがもてる・心ひかれる',   modern: '懐かしい（昔を思う）', tip: '初めて会った相手にも、近づきたくなる気持ちを表します。',     quizUnit: '',                 w: 1024, h: 1280 },
    medetashi:  { word: 'めでたし',   mean: 'すばらしい・立派だ',           modern: 'おめでたい（祝い事）', tip: '祝い事ではなく、りっぱで見事なことを表します。',           quizUnit: 'high-japanese-10', w: 1024, h: 1447 },
    arigatashi: { word: 'ありがたし', mean: 'めったにない・珍しい',         modern: 'ありがたい（感謝）', tip: '「有ることが難しい」という意味から生まれた言葉です。',         quizUnit: 'high-japanese-10', w: 1024, h: 1447 },
    odoroku:    { word: 'おどろく',   mean: '目を覚ます・はっと気づく',     modern: 'びっくりする',      tip: '眠っていた人が目を覚ましたり、何かに気づいたりするときに使います。', quizUnit: 'high-japanese-10', w: 1024, h: 1536 }
  },
  file: function (id, size) { return this.imgBase + 'kobun-' + id + '-manga-' + size + '.webp'; },
  srcset: function (id) { return this.file(id, 480) + ' 480w, ' + this.file(id, 768) + ' 768w, ' + this.file(id, 1024) + ' 1024w'; },
  alt: function (id) { var d = this.words[id]; return '古文単語「' + d.word + '」の意味「' + d.mean + '」を学ぶ4コマ漫画'; }
};
