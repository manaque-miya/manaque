// data/mid-math-07.js — まなクエ！ 問題データ
const MATH_QUIZ = {
  meta: {
    id: 'mid-math-07',
    title: "式の展開・因数分解クイズ",
    fullTitle: "式の展開・因数分解クイズ　全10問",
    gradeTag: "🏫 中学生向け",
    desc: "乗法公式を覚えて展開・因数分解を素早く解こう！",
    accent: '#0A84FF',
    grade: 'mid'
  },
  questions: [{"q": "(x+2)(x+3) を展開すると？", "sub": "(x+a)(x+b)=x²+(a+b)x+ab", "formula": null, "choices": ["x²+5x+5", "x²+6x+5", "x²+5x+6", "x²+6x+6"], "answer": 2, "explain": "a=2,b=3。x²+(2+3)x+2×3=x²+5x+6。"}, {"q": "(x-1)(x+4) を展開すると？", "sub": "a=-1,b=4で公式を使う。", "formula": null, "choices": ["x²-3x+4", "x²-3x-4", "x²+3x+4", "x²+3x-4"], "answer": 3, "explain": "x²+(-1+4)x+(-1)×4=x²+3x-4。定数項-1×4=-4。"}, {"q": "(x+5)² を展開すると？", "sub": "(x+a)²=x²+2ax+a²", "formula": null, "choices": ["x²+10x+25", "x²+5x+25", "x²+10x+10", "x²+25"], "answer": 0, "explain": "a=5。x²+2×5×x+5²=x²+10x+25。「2乗の展開」は中間項2axを忘れやすい。"}, {"q": "(x-3)² を展開すると？", "sub": "(x-a)²=x²-2ax+a²", "formula": null, "choices": ["x²+6x+9", "x²-6x+9", "x²-6x-9", "x²-3x+9"], "answer": 1, "explain": "a=3。x²-2×3×x+3²=x²-6x+9。(x-3)²=(x-3)(x-3)で確認可能。"}, {"q": "(x+4)(x-4) を展開すると？", "sub": "(x+a)(x-a)=x²-a²（和と差の積）", "formula": null, "choices": ["x²+8x-16", "x²-16", "x²-8x-16", "x²+16"], "answer": 1, "explain": "a=4。x²-4²=x²-16。「和と差の積は差の平方」——中間項が消えてスッキリ。"}, {"q": "x²+5x+6 を因数分解すると？", "sub": "x²+(a+b)x+ab=(x+a)(x+b)。積が6、和が5のa,bは？", "formula": null, "choices": ["(x+1)(x+6)", "(x+2)(x+4)", "(x+2)(x+3)", "(x+3)(x+3)"], "answer": 2, "explain": "2×3=6、2+3=5。(x+2)(x+3)。「積と和を満たす2数」を探すのが因数分解のコツ。"}, {"q": "x²-9 を因数分解すると？", "sub": "x²-a²=(x+a)(x-a)を使う。", "formula": null, "choices": ["(x+3)(x-3)", "(x-3)²", "(x+9)(x-1)", "(x-9)²"], "answer": 0, "explain": "x²-9=x²-3²=(x+3)(x-3)。「差の平方=和と差の積」の逆。"}, {"q": "x²-4x+4 を因数分解すると？", "sub": "x²-2ax+a²=(x-a)²。a=2？", "formula": null, "choices": ["(x-2)²", "(x+2)²", "(x-4)(x-1)", "(x-2)(x-2)"], "answer": 0, "explain": "2a=4→a=2。x²-2×2×x+2²=(x-2)²。完全平方式。"}, {"q": "2x²+4x を因数分解すると？", "sub": "共通因数を外に出す。2xが共通。", "formula": null, "choices": ["2(x²+4)", "2x(x+2)", "x(2x+4)", "2x(2x+1)"], "answer": 1, "explain": "2x²+4x=2x(x+2)。共通因数2xをくくり出す。2x×x=2x²、2x×2=4x。"}, {"q": "x²+6x+9 を因数分解すると？", "sub": "(x+a)²=x²+2ax+a²の逆。2a=6→a=？", "formula": null, "choices": ["(x+6)(x+1)", "(x+3)(x+3)", "(x+9)(x+1)", "(x+3)²"], "answer": 3, "explain": "2a=6→a=3。(x+3)²。※(x+3)²と(x+3)(x+3)は同じだが、因数分解の答えは(x+3)²と表す。"}]
};
