console.log('콜백함수:선언적함수')
function callback1(callbackFunc){ // 함수를 데이터로 전달받음
  for(let i = 0; i < 3; i++){
    callbackFunc(i);
  }
}

// 복잡한 로직
function print(index) {
  console.log(`${index}번째 함수 호출`);

}

callback1(print);

console.log('콜백함수 : 익명함수');

const print2 = function(count){
  console.log(`${count}번째 함수 호출`)
}

callback1(print2);


//화살표 함수를 사용한 콜백 함수 구현
console.log('콜백함수 : 화살표 함수');

function callback2(number, callbackFunc, other){ //number은 변수(데이터), callbackFunc는 함수
  // number의 값이 짝수인 경우 callbackFunc로 데이터 전달

  if(number % 2 === 0){
    callbackFunc(number);

  }else{
    other(number)
  }

}

const print3 = (even) => {
  console.log(`${even}은 짝수입니다.`);
}
const print4 = (odds) => {
  console.log(`${odds}은 홀수입니다.`);
}

callback2(3,print3,print4);
callback2(4,print3);

