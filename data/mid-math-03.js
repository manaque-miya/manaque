// data/mid-math-03.js — まなクエ！ 問題データ
const MATH_QUIZ = {
  meta: {
    id: 'mid-math-03',
    title: "一次方程式クイズ",
    fullTitle: "一次方程式クイズ　全10問",
    gradeTag: "🏫 中学生向け",
    desc: "移項を使いこなして方程式を解こう！",
    accent: '#0A84FF',
    grade: 'mid'
  },
  questions: [{"q": "2x = 8 を解け", "sub": "両辺を2で割ろう。", "formula": null, "choices": ["x=4", "x=3", "x=5", "x=6"], "answer": 0, "explain": "2x=8→x=8÷2=4。両辺を同じ数で割っても等式は成り立つ。"}, {"q": "x - 5 = 3 を解け", "sub": "xを左辺に残すため、-5を右辺に移項。", "formula": null, "choices": ["x=7", "x=8", "x=9", "x=-2"], "answer": 1, "explain": "x=3+5=8。-5を移項するとき符号が+5に変わる。「移項=符号を変えて反対側に移す」。"}, {"q": "3x + 6 = 0 を解け", "sub": "6を移項してから両辺を3で割る。", "formula": null, "choices": ["x=-3", "x=3", "x=2", "x=-2"], "answer": 3, "explain": "3x=-6→x=-6÷3=-2。6を移項（+6→-6）、両辺を3で割る。"}, {"q": "2x - 3 = 7 を解け", "sub": "-3を移項してから計算。", "formula": null, "choices": ["x=2", "x=4", "x=5", "x=7"], "answer": 2, "explain": "2x=7+3=10→x=10÷2=5。-3を移項→+3。2x=10→x=5。"}, {"q": "x/3 = 4 を解け", "sub": "両辺に3をかけよう。", "formula": null, "choices": ["x=4/3", "x=12", "x=7", "x=3"], "answer": 1, "explain": "x/3=4→x=4×3=12。分数の方程式は「分母をかける」。"}, {"q": "2(x - 1) = 6 を解け", "sub": "まずかっこを展開してから解こう。", "formula": null, "choices": ["x=4", "x=3", "x=2", "x=5"], "answer": 0, "explain": "2x-2=6→2x=8→x=4。かっこを展開：2×x-2×1=2x-2。"}, {"q": "4x + 1 = 2x + 9 を解け", "sub": "xの項を左辺、数の項を右辺に移項。", "formula": null, "choices": ["x=3", "x=4", "x=5", "x=8"], "answer": 1, "explain": "4x-2x=9-1→2x=8→x=4。左辺に文字、右辺に数をまとめる。"}, {"q": "x/2 + 3 = 7 を解け", "sub": "3を移項してから分母を消す。", "formula": null, "choices": ["x=6", "x=7", "x=10", "x=8"], "answer": 3, "explain": "x/2=7-3=4→x=4×2=8。または両辺×2：x+6=14→x=8。"}, {"q": "3(x + 2) = x + 10 を解け", "sub": "展開して整理。xを左辺にまとめよう。", "formula": null, "choices": ["x=1", "x=3", "x=2", "x=4"], "answer": 2, "explain": "3x+6=x+10→3x-x=10-6→2x=4→x=2。"}, {"q": "0.5x = 3 を解け", "sub": "両辺を2倍して小数を整数にしよう。", "formula": null, "choices": ["x=6", "x=3", "x=5", "x=1.5"], "answer": 0, "explain": "両辺×2：x=6。または0.5x=3→x=3÷0.5=6。0.5=1/2なのでx=3×2=6でもOK。"}]
};
