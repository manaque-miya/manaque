// data/mid-math-09.js — まなクエ！ 問題データ
const MATH_QUIZ = {
  meta: {
    id: 'mid-math-09',
    title: "二次方程式クイズ",
    fullTitle: "二次方程式クイズ　全10問",
    gradeTag: "🏫 中学生向け",
    desc: "因数分解・平方根・解の公式——3つの方法で二次方程式を解こう！",
    accent: '#0A84FF',
    grade: 'mid'
  },
  questions: [{"q": "x² = 9 を解け", "sub": "平方根を使う。x²=aならx=±√a", "formula": null, "choices": ["x=3", "x=9", "x=±3", "x=±9"], "answer": 2, "explain": "x=±√9=±3。x²=aの解はx=±√a（プラスとマイナスの両方）。"}, {"q": "x² - 5x + 6 = 0 を解け", "sub": "因数分解：積が6、和が5の2数は？", "formula": null, "choices": ["x=1,6", "x=1,5", "x=-2,-3", "x=2,3"], "answer": 3, "explain": "(x-2)(x-3)=0→x=2またはx=3。積6・和5の2数は2と3。"}, {"q": "x² + 3x = 0 を解け", "sub": "共通因数xでくくる。", "formula": null, "choices": ["x=0,3", "x=3,-3", "x=0,-3", "x=0のみ"], "answer": 2, "explain": "x(x+3)=0→x=0またはx=-3。共通因数xをくくり出し、各因数=0とする。"}, {"q": "x² - 4 = 0 を解け", "sub": "差の平方：x²-4=(x+2)(x-2)", "formula": null, "choices": ["x=2", "x=±2", "x=±4", "x=4"], "answer": 1, "explain": "(x+2)(x-2)=0→x=±2。またはx²=4→x=±2。"}, {"q": "x² - 6x + 9 = 0 を解け", "sub": "完全平方式。(x-3)²=0", "formula": null, "choices": ["x=3,-3", "x=-3", "x=±3", "x=3"], "answer": 3, "explain": "(x-3)²=0→x-3=0→x=3（重解）。重解は1つの解が2重になっている。"}, {"q": "x² + 5x + 4 = 0 を解け", "sub": "積4・和5の2数は1と4。", "formula": null, "choices": ["x=-1,-4", "x=1,4", "x=-1,4", "x=1,-4"], "answer": 0, "explain": "(x+1)(x+4)=0→x=-1またはx=-4。積=+4、和=+5なので両方プラス。1+4=5、1×4=4。"}, {"q": "2x² - 8 = 0 を解け", "sub": "両辺を2で割ってからx²=？を解く。", "formula": null, "choices": ["x=±2", "x=2", "x=4", "x=±4"], "answer": 0, "explain": "x²=4→x=±2。2x²=8→x²=4→x=±√4=±2。"}, {"q": "x² - 2x - 3 = 0 を解け", "sub": "積-3・和-2の2数は？", "formula": null, "choices": ["x=-1,3", "x=1,-3", "x=3,-3", "x=1,2"], "answer": 0, "explain": "(x-3)(x+1)=0→x=3またはx=-1。積=-3、和=-2の2数は-3と+1。"}, {"q": "x² = 16 を解け", "sub": "平方根を使う。", "formula": null, "choices": ["x=4", "x=±4", "x=8", "x=±8"], "answer": 1, "explain": "x=±√16=±4。x²=aの解はx=±√a。ここで√16=4。"}, {"q": "x² + 2x + 1 = 0 を解け", "sub": "完全平方式。(x+1)²=0？", "formula": null, "choices": ["x=1", "x=-1", "x=±1", "x=1,-1"], "answer": 1, "explain": "(x+1)²=0→x=-1（重解）。x²+2x+1=(x+1)²——完全平方式のパターン。"}]
};
