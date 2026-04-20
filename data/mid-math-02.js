// data/mid-math-02.js — まなクエ！ 問題データ
const MATH_QUIZ = {
  meta: {
    id: 'mid-math-02',
    title: "文字と式クイズ",
    fullTitle: "文字と式クイズ　全10問",
    gradeTag: "🏫 中学生向け",
    desc: "文字を使った式の計算・代入・整理をマスターしよう！",
    accent: '#0A84FF',
    grade: 'mid'
  },
  questions: [{"q": "3x + 2x を整理すると？", "sub": "同類項（同じ文字）をまとめる。", "formula": null, "choices": ["5", "5x", "6x", "3x²"], "answer": 1, "explain": "3x+2x=(3+2)x=5x。係数を足してxをかける。文字が同じ項を「同類項」という。"}, {"q": "4a - a を整理すると？", "sub": "aは1aと同じ。4a - 1a = ？", "formula": null, "choices": ["3", "3a", "4a", "0"], "answer": 1, "explain": "4a-a=4a-1a=(4-1)a=3a。文字の前の数字（係数）だけ計算して文字はそのまま残す。"}, {"q": "2(x + 3) を展開すると？", "sub": "分配法則：a(b+c)=ab+ac", "formula": null, "choices": ["2x+3", "2x+5", "2x+6", "x+6"], "answer": 2, "explain": "2×x+2×3=2x+6。括弧の外の数を中の各項にかける（分配法則）。"}, {"q": "x=3 のとき、2x + 1 の値は？", "sub": "xに3を代入して計算しよう。", "formula": null, "choices": ["6", "7", "8", "9"], "answer": 1, "explain": "2×3+1=6+1=7。代入は「xを3に置き換えて計算」するだけ。"}, {"q": "3x - 2y + x + 3y を整理すると？", "sub": "xの項同士、yの項同士をまとめよう。", "formula": null, "choices": ["4x+y", "4x-y", "2x+y", "4xy"], "answer": 0, "explain": "xの項：3x+x=4x。yの項：-2y+3y=y。整理すると4x+y。"}, {"q": "6x²y ÷ 2x を計算すると？", "sub": "係数と文字を別々に割る。", "formula": null, "choices": ["3y", "3xy", "4xy", "3x"], "answer": 1, "explain": "6÷2=3、x²÷x=x、y÷1=y。答えは3xy。係数6÷2=3、文字x²÷x=x¹=x。"}, {"q": "2ab × 3a を計算すると？", "sub": "係数同士・文字同士をかける。", "formula": null, "choices": ["5ab", "5a²b", "6ab", "6a²b"], "answer": 3, "explain": "係数：2×3=6。文字：ab×a=a²b。答えは6a²b。文字の掛け算は指数を足す（a×a=a²）。"}, {"q": "x = -2 のとき x² - x の値は？", "sub": "代入したらかっこをつけて計算。(-2)²-(-2)", "formula": null, "choices": ["2", "4", "6", "8"], "answer": 2, "explain": "(-2)²-(-2)=4+2=6。(-2)²=4（符号はプラス）、-(-2)=+2。代入時は必ずかっこをつける習慣を。"}, {"q": "a=2, b=-1 のとき 3a - 2b の値は？", "sub": "それぞれ代入してから計算。", "formula": null, "choices": ["4", "6", "8", "10"], "answer": 2, "explain": "3×2-2×(-1)=6+2=8。2b=2×(-1)=-2、-2b=-(-2)=+2。符号に注意して計算。"}, {"q": "次の式をxについて整理したとき係数はいくつ？\n5x + 3 - 2x - 1", "sub": "xの項と定数項をそれぞれまとめよう。", "formula": "5x + 3 - 2x - 1", "choices": ["3", "4", "5", "7"], "answer": 0, "explain": "xの項：5x-2x=3x（係数3）。定数項：3-1=2。整理すると3x+2。xの係数は3。"}]
};
