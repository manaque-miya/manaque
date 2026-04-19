// ===== ロジカルパズル入門 =====
const QUIZ_LOGIC = {
  title: 'ロジカルパズル入門',
  questions: [
    { tags:[{l:'思考',c:'badge--yellow'},{l:'パズル',c:'badge--neutral'}],
      text:'1, 1, 2, 3, 5, 8, □ ── □に入る数はいくつ？',
      choices:['11','12','13','14'], answer:2,
      exp:'フィボナッチ数列！前の2つを足す：5＋8＝13。自然界の貝や花びらに現れる数列です。' },
    { tags:[{l:'思考',c:'badge--yellow'},{l:'パズル',c:'badge--neutral'}],
      text:'2 ＋ 2 × 2 ＝ ？',
      choices:['8','6','4','16'], answer:1,
      exp:'掛け算は足し算より先！2×2＝4を先に計算 → 2＋4＝6。これが計算の優先順位。' },
    { tags:[{l:'思考',c:'badge--yellow'},{l:'パズル',c:'badge--neutral'}],
      text:'A・B・Cの3人。AはBより背が高く、BはCより背が高い。一番背が低いのは？',
      choices:['A','B','C','わからない'], answer:2,
      exp:'A＞B＞C の順。「AはBより高く」「BはCより高い」→ CはBより低く、BはAより低い。よってCが最小。' },
    { tags:[{l:'思考',c:'badge--yellow'},{l:'パズル',c:'badge--neutral'}],
      text:'2, 4, 8, 16, □ ── □に入る数は？',
      choices:['24','28','32','30'], answer:2,
      exp:'等比数列（前の数に2を掛ける）。16×2＝32。2の累乗（2¹,2²,2³...）の数列です。' },
    { tags:[{l:'思考',c:'badge--yellow'},{l:'パズル',c:'badge--neutral'}],
      text:'ある数を3倍して12を引くと、元の数と同じになった。その数はいくつ？',
      choices:['4','5','6','8'], answer:2,
      exp:'3x－12＝x → 2x＝12 → x＝6。方程式を使うとスッキリ解ける！' },
  ]
};
