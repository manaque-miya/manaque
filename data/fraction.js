// ===== 分数のひっ算クイズ =====
const QUIZ_FRACTION = {
  title: '分数のひっ算クイズ',
  questions: [
    { tags:[{l:'算数',c:'badge--yellow'},{l:'小学生',c:'badge--neutral'}],
      text:'1/2 ＋ 1/4 ＝ ？',
      choices:['2/6','1/3','3/4','2/4'], answer:2,
      exp:'通分して 2/4 ＋ 1/4 ＝ 3/4。分母をそろえてから分子を足すのがポイント！' },
    { tags:[{l:'算数',c:'badge--yellow'},{l:'小学生',c:'badge--neutral'}],
      text:'2/3 × 3/4 ＝ ？',
      choices:['5/7','6/7','1/2','1/3'], answer:2,
      exp:'分数の掛け算は分子どうし・分母どうしを掛けます。2×3＝6、3×4＝12 → 6/12 ＝ 1/2。' },
    { tags:[{l:'算数',c:'badge--yellow'},{l:'小学生',c:'badge--neutral'}],
      text:'1/2 ÷ 1/4 ＝ ？',
      choices:['1/8','1/2','4','2'], answer:3,
      exp:'割り算は「割る数の逆数を掛ける」。1/2 × 4/1 ＝ 4/2 ＝ 2。' },
    { tags:[{l:'算数',c:'badge--yellow'},{l:'小学生',c:'badge--neutral'}],
      text:'次の4つで一番大きい分数はどれ？',
      choices:['2/3','3/5','5/8','3/4'], answer:3,
      exp:'小数に直すと：2/3≈0.67、3/5＝0.6、5/8＝0.625、3/4＝0.75。3/4が最大！' },
    { tags:[{l:'算数',c:'badge--yellow'},{l:'小学生',c:'badge--neutral'}],
      text:'3/4 ー 1/3 ＝ ？',
      choices:['2/1','5/12','1/6','7/12'], answer:1,
      exp:'通分：9/12 ー 4/12 ＝ 5/12。分母の最小公倍数は12！' },
  ]
};
