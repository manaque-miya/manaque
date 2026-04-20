// data/mid-math-06.js — まなクエ！ 問題データ
const MATH_QUIZ = {
  meta: {
    id: 'mid-math-06',
    title: "一次関数クイズ",
    fullTitle: "一次関数クイズ　全10問",
    gradeTag: "🏫 中学生向け",
    desc: "y=ax+b の傾き・切片・グラフを完全マスター！",
    accent: '#0A84FF',
    grade: 'mid'
  },
  questions: [{"q": "y=3x - 1 の傾きは？", "sub": "y=ax+bの形でaが傾き。", "formula": null, "choices": ["−1", "1", "3", "−3"], "answer": 2, "explain": "y=ax+bの傾きはa。y=3x-1ではa=3が傾き。傾き=「xが1増えたときのyの増加量」。"}, {"q": "y=2x + 4 のy切片は？", "sub": "y=ax+bの形でbがy切片（x=0のときのy）。", "formula": null, "choices": ["0", "2", "4", "6"], "answer": 2, "explain": "y=ax+bのy切片はb=4。x=0を代入：y=2×0+4=4でも確認できる。"}, {"q": "y=x + 3 で x=2のとき y=？", "sub": "x=2を代入。", "formula": null, "choices": ["3", "4", "5", "6"], "answer": 2, "explain": "y=2+3=5。"}, {"q": "傾き2・y切片-3の一次関数の式は？", "sub": "y=ax+bにa=2,b=-3を代入。", "formula": null, "choices": ["y=2x+3", "y=2x-3", "y=-2x+3", "y=3x-2"], "answer": 1, "explain": "y=2x+(-3)=2x-3。傾きa=2、y切片b=-3をy=ax+bに代入。"}, {"q": "y=-x + 5 でy=0のときx=？（x切片）", "sub": "y=0を代入して方程式を解く。", "formula": null, "choices": ["x=3", "x=4", "x=5", "x=6"], "answer": 2, "explain": "0=-x+5→x=5。x切片は「グラフがx軸と交わる点のx座標」=y=0のときのx。"}, {"q": "2点(0,1),(2,5)を通る直線の式は？", "sub": "傾き=(5-1)/(2-0)=？、y切片は(0,1)より？", "formula": null, "choices": ["y=x+1", "y=2x+1", "y=x+2", "y=2x-1"], "answer": 1, "explain": "傾き=(5-1)/(2-0)=4/2=2。y切片はx=0でy=1なのでb=1。y=2x+1。"}, {"q": "y=3x+bが点(2,7)を通るとき b=？", "sub": "x=2,y=7を代入してbを求める。", "formula": null, "choices": ["b=0", "b=1", "b=2", "b=3"], "answer": 1, "explain": "7=3×2+b→7=6+b→b=1。y=3x+1が答え。"}, {"q": "y=ax+2が点(3,8)を通るとき a=？", "sub": "x=3,y=8を代入してaを求める。", "formula": null, "choices": ["a=1", "a=2", "a=3", "a=4"], "answer": 1, "explain": "8=a×3+2→6=3a→a=2。y=2x+2が答え。"}, {"q": "y=-2x+6 とx軸の交点のx座標は？", "sub": "x軸との交点はy=0。", "formula": null, "choices": ["x=2", "x=3", "x=4", "x=6"], "answer": 1, "explain": "0=-2x+6→2x=6→x=3。x切片=3。"}, {"q": "y=x+1 と y=2x-1 の交点のx座標は？", "sub": "2式を連立。x+1=2x-1として解く。", "formula": null, "choices": ["x=1", "x=2", "x=3", "x=4"], "answer": 1, "explain": "x+1=2x-1→1+1=2x-x→x=2。y=2+1=3。交点は(2,3)。"}]
};
