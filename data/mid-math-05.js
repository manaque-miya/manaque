// data/mid-math-05.js — まなクエ！ 問題データ
const MATH_QUIZ = {
  meta: {
    id: 'mid-math-05',
    title: "連立方程式クイズ",
    fullTitle: "連立方程式クイズ　全10問",
    gradeTag: "🏫 中学生向け",
    desc: "加減法・代入法——2つの方程式を同時に解こう！",
    accent: '#0A84FF',
    grade: 'mid'
  },
  questions: [{"q": "次の連立方程式でxの値は？", "sub": "加減法：2つの式を足してyを消す。", "formula": "x + y = 5\nx - y = 1", "choices": ["x=1", "x=2", "x=3", "x=4"], "answer": 2, "explain": "2式を足す：2x=6→x=3。x=3を1式目：3+y=5→y=2。"}, {"q": "次の連立方程式でxの値は？", "sub": "2式を引いてyを消す。", "formula": "2x + y = 7\nx + y = 5", "choices": ["x=1", "x=2", "x=3", "x=4"], "answer": 1, "explain": "1式-2式：x=2。x=2を2式目：2+y=5→y=3。"}, {"q": "次の連立方程式でyの値は？", "sub": "1式-2式でxを消そう。", "formula": "x + 2y = 8\nx - y = 2", "choices": ["y=1", "y=2", "y=3", "y=4"], "answer": 1, "explain": "1式-2式：3y=6→y=2。y=2を2式目：x-2=2→x=4。"}, {"q": "次の連立方程式でxの値は？", "sub": "2式を引いてyを消す。", "formula": "3x + y = 10\nx + y = 6", "choices": ["x=1", "x=2", "x=3", "x=4"], "answer": 2, "explain": "1式-2式：2x=4→x=2。x=2を2式目：2+y=6→y=4。"}, {"q": "次の連立方程式でyの値は？", "sub": "x=3を2式目に代入。", "formula": "x = 3\n2x + 3y = 12", "choices": ["y=1", "y=2", "y=3", "y=4"], "answer": 1, "explain": "2×3+3y=12→6+3y=12→3y=6→y=2。代入法：一方をもう一方に代入して解く。"}, {"q": "次の連立方程式でxの値は？", "sub": "2式を足してyを消す。", "formula": "x + y = 6\n2x - y = 3", "choices": ["x=2", "x=3", "x=4", "x=5"], "answer": 1, "explain": "2式を足す：3x=9→x=3。x=3を1式：3+y=6→y=3。"}, {"q": "次の連立方程式でxの値は？", "sub": "2式を足してyを消す。", "formula": "3x - 2y = 1\nx + 2y = 7", "choices": ["x=1", "x=2", "x=3", "x=4"], "answer": 1, "explain": "2式を足す：4x=8→x=2。x=2を2式：2+2y=7→2y=5→y=2.5。"}, {"q": "次の連立方程式でxの値は？", "sub": "2式を引いてyを消す。", "formula": "4x + y = 11\n2x + y = 7", "choices": ["x=1", "x=2", "x=3", "x=4"], "answer": 1, "explain": "1式-2式：2x=4→x=2。x=2を2式：4+y=7→y=3。"}, {"q": "次の連立方程式でxの値は？", "sub": "2式を足してyを消す。", "formula": "x - y = 4\n3x + y = 8", "choices": ["x=1", "x=2", "x=3", "x=4"], "answer": 2, "explain": "2式を足す：4x=12→x=3。x=3を1式：3-y=4→y=-1。"}, {"q": "次の連立方程式でxの値は？", "sub": "2式を足してyを消す。", "formula": "2x + y = 7\n3x - y = 8", "choices": ["x=2", "x=3", "x=4", "x=5"], "answer": 1, "explain": "2式を足す：5x=15→x=3。x=3を1式：6+y=7→y=1。"}]
};
