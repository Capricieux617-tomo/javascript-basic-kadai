//head要素を取得し、中身を出力する
console.log(document.head);

//body要素を取得し、中身を出力する
console.log(document.body);

//windowオブジェクトの中身を出力する
console.log(window);

//HTML要素をidで所得し、中身を出力する
console.log(document.getElementById('text'));

//textというidを持つHTML要素を取得し、定数に代入する
const text =document.getElementById('text');
//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () =>{
  //作成したchild-textを表示する
  text.textContent = 'ボタンをクリックしました';
});



