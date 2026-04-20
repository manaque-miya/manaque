// data/mid-math-04.js — まなクエ！ 問題データ
const MATH_QUIZ = {
  meta: {
    id: 'mid-math-04',
    title: "比例・反比例クイズ",
    fullTitle: "比例・反比例クイズ　全10問",
    gradeTag: "🏫 中学生向け",
    desc: "y=axとy=a/x——比例と反比例の違いを完全理解しよう！",
    accent: '#0A84FF',
    grade: 'mid'
  },
  questions: [{"q": "y=3x でx=4のとき y=？", "sub": "xに4を代入。", "formula": null, "choices": ["7", "10", "12", "15"], "answer": 2, "explain": "y=3×4=12。y=axに代入するだけ。"}, {"q": "y=kx でx=2,y=10のとき比例定数k=？", "sub": "y=kxに代入してkを求める。", "formula": null, "choices": ["2", "4", "5", "8"], "answer": 2, "explain": "10=k×2→k=10÷2=5。y=5xが求める比例式。"}, {"q": "y∝x でx=3,y=9。x=6のときy=？", "sub": "比例はxが2倍になればyも2倍。", "formula": null, "choices": ["12", "15", "18", "27"], "answer": 2, "explain": "比例定数k=9÷3=3。y=3x。x=6→y=3×6=18。xが2倍（3→6）ならyも2倍（9→18）。"}, {"q": "反比例 y=6/x で x=2のとき y=？", "sub": "xに2を代入。", "formula": null, "choices": ["2", "3", "4", "12"], "answer": 1, "explain": "y=6÷2=3。反比例y=a/xはxに代入して割り算。"}, {"q": "y=12/x で x=3のとき y=？", "sub": "反比例。xとyの積は常に一定（=12）。", "formula": null, "choices": ["3", "4", "5", "36"], "answer": 1, "explain": "y=12÷3=4。x×y=12（一定）——反比例の特徴。"}, {"q": "比例y=axのグラフが点(2,6)を通るとき a=？", "sub": "x=2,y=6を代入。", "formula": null, "choices": ["2", "3", "4", "8"], "answer": 1, "explain": "6=a×2→a=6÷2=3。y=3xが答え。"}, {"q": "y=4x で y=20のとき x=？", "sub": "方程式として解く。4x=20。", "formula": null, "choices": ["4", "5", "6", "8"], "answer": 1, "explain": "4x=20→x=20÷4=5。yの値からxを求める場合は方程式を解く。"}, {"q": "x=5,y=2が反比例するとき比例定数=？", "sub": "y=a/xにx=5,y=2を代入。", "formula": null, "choices": ["2.5", "7", "10", "25"], "answer": 2, "explain": "2=a/5→a=2×5=10。反比例の比例定数はx×y=5×2=10。"}, {"q": "反比例y=k/xでx=6,y=4のとき、x=8でy=？", "sub": "まず比例定数kを求めよう。", "formula": null, "choices": ["2", "3", "4", "6"], "answer": 1, "explain": "k=6×4=24。y=24/x。x=8→y=24÷8=3。"}, {"q": "y=2x のグラフの特徴はどれ？", "sub": "y=axは原点を通る直線。aの値に注目。", "formula": null, "choices": ["原点を通らない右上がりの直線", "原点を通る右下がりの直線", "原点を通る右上がりの直線", "曲線"], "answer": 2, "explain": "y=axは必ず原点(0,0)を通る直線。a=2>0なので右上がり。a<0なら右下がり。反比例は曲線（双曲線）になる。"}]
};
