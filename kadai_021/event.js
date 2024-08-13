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


//HTML要素がクリックされたときに、2秒後にイベント処理を実行する
btn.addEventListener('click', () =>{
  setTimeout(()=> {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
  }, 2000);  
});
