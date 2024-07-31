// let name = prompt("이름을 입력해주세요");
// let age = prompt("나이를 입력해주세요");

// age1 = Number(age);

// console.log('이름의 타입 :' + typeof name );
// console.log('나이의 타입 :' + typeof age1 );

// const NUM1 = Number(prompt("숫자1을 입력하시오"));
// const NUM2 = Number(prompt("숫자2을 입력하시오"));

// console.log(`두 수의 합은 ${NUM1 + NUM2}`);

let randomYear = 2024;

if(a=(randomYear % 4 === 0)){

  if(a % 100 === 0){
    console.log(randomYear + '윤년 아님');
  };  elseif (a % 400 === 0)
    console.log(randomYear + '윤년');
};