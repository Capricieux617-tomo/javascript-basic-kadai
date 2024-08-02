//配列の宣言と値の代入を行う
let holidays = ['正月', '成人の日', '建国記念日', '天皇誕生日', '春分の日', '昭和の日', '憲法記念日', 'みどりの日', 'こどもの日', '海の日', '山の日', '敬老の日', '秋分の日', 'スポーツの日', '文化の日', '勤労感謝の日'];

//配列の値を出力する
console.log(holidays);

//for文を使って配列に代入されたすべての祝日を出力
console.log('[for文]');

for (let i = 0; i <=15; i++){
  console.log(holidays[i]);
}

//while文を使って配列代入されたすべての祝日を出力
console.log('[while文]');

let i = 0;
while (i < holidays.length){
  console.log(holidays[i]);
  i++;
}