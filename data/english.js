// ===== よく出る英単語クイズ =====
const UNIT_QUIZ = {
  meta: {
    id: 'english',
    title: 'よく出る英単語クイズ',
    fullTitle: 'よく出る英単語クイズ　全15問',
    gradeTag: '📚 中学生向け',
    subject: '英語',
    accent: '#2980B9',
    badgeCls: 'badge--sky',
  },
  questions: [
    {
      text: '"environment" の意味はどれ？',
      choices: ['経験', '感情', '環境', '娯楽'],
      answer: 2,
      exp: '"environment"（エンヴァイロンメント）＝環境。environmental issues（環境問題）など入試頻出。',
    },
    {
      text: '"necessary" の意味はどれ？',
      choices: ['自然な', '近い', '必要な', '否定的な'],
      answer: 2,
      exp: '"necessary"（ネセサリー）＝必要な。It is necessary to ...（〜することが必要だ）の形で頻出。',
    },
    {
      text: '"communicate" の意味はどれ？',
      choices: ['命令する', '伝える・意思疎通する', '比べる', '集める'],
      answer: 1,
      exp: '"communicate"＝コミュニケーションをとる・伝える。communication（名詞）も合わせて覚えよう。',
    },
    {
      text: '"responsibility" の意味はどれ？',
      choices: ['反応', '尊敬', '責任', '回答'],
      answer: 2,
      exp: '"responsibility"＝責任。take responsibility（責任をとる）は超頻出表現。',
    },
    {
      text: '空欄に入るのは？ "I ( ) to school every day."',
      choices: ['go', 'goes', 'went', 'going'],
      answer: 0,
      exp: '主語がI（1人称単数）の現在形は動詞の原形 "go"。三人称単数（he/she）なら "goes"。',
    },
    {
      text: '"popular" の意味はどれ？',
      choices: ['難しい', '人気のある', '古い', '静かな'],
      answer: 1,
      exp: '"popular"（ポピュラー）＝人気のある。popular culture（大衆文化）などでも使われます。',
    },
    {
      text: '"achieve" の意味はどれ？',
      choices: ['受け取る', '信じる', '達成する', '始める'],
      answer: 2,
      exp: '"achieve"（アチーブ）＝達成する・成し遂げる。achievement（名詞）も頻出です。',
    },
    {
      text: '"traditional" の意味はどれ？',
      choices: ['現代的な', '伝統的な', '一般的な', '特別な'],
      answer: 1,
      exp: '"traditional"＝伝統的な。tradition（伝統・習慣）という名詞も合わせて覚えよう。',
    },
    {
      text: '"improve" の意味はどれ？',
      choices: ['証明する', '動かす', '改善する', '印象づける'],
      answer: 2,
      exp: '"improve"（インプルーブ）＝改善する・向上させる。improvement（名詞）も重要。',
    },
    {
      text: '"actually" の意味はどれ？',
      choices: ['たいてい', '最終的に', '実際には', 'すぐに'],
      answer: 2,
      exp: '"actually"（アクチュアリー）＝実際には・実は。会話でよく使われる表現です。',
    },
    {
      text: '"suggest" の意味はどれ？',
      choices: ['保護する', '提案する', '成功する', '支持する'],
      answer: 1,
      exp: '"suggest"（サジェスト）＝提案する・示す。suggestion（名詞）も入試に出ます。',
    },
    {
      text: '"convenient" の意味はどれ？',
      choices: ['きれいな', '安全な', '便利な', '正確な'],
      answer: 2,
      exp: '"convenient"（コンビニエント）＝便利な。convenience store（コンビニ）の "convenience" と同語源。',
    },
    {
      text: '比較級の文: "This book is ( ) interesting than that one."',
      choices: ['most', 'very', 'more', 'much'],
      answer: 2,
      exp: '2つのものを比べるときは比較級「more + 形容詞」。3文字以上の形容詞はmore/mostを使います。',
    },
    {
      text: '"volunteer" の意味はどれ？',
      choices: ['競争者', '観察者', '自発的に参加する人・ボランティア', '訪問者'],
      answer: 2,
      exp: '"volunteer"（ボランティア）＝自発的に無報酬で活動する人。動詞としても使えます。',
    },
    {
      text: '適切な前置詞: "I\'m interested ( ) music."',
      choices: ['on', 'at', 'about', 'in'],
      answer: 3,
      exp: '"be interested in 〜"（〜に興味がある）は定番表現。in を忘れずに！',
    },
  ]
};
