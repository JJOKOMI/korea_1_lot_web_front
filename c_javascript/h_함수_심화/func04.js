//! 타이머 함수 : 특정한 시간이 지난 후 함수를 실행하거나 일정 간격으로 함수를 반복 실행하는 기능
/*

  1. setTimeout(콜백함수, 시간);
  지정된 시간이 지난후, 주어진 콜백함수를 단 한 번 실행
  - (지연)시간 : 밀리초(ms) 단위로 실행 1000ms => 1초

  2. setInterval(콜백함수, 시간);
  지정된 시간 간격마다 함수를 반복해서 실행
  사용법 setTimeout()과 유사

*/

//setTimeout기본사용법
  function greet(name = '이승아') {
    console.log(`하이 ${name}`);
  }
  greet();
  setTimeout(greet, 2000, '이도경');//콜백함수의 인자전달은 세번째 인자부터 나열

  //clearTimeout 사용법
  const timeId = setTimeout(greet, 3000, '이도경바보');

  clearTimeout(timeId);

//setInterval 기본사용법

let count = 1;

setInterval(() => {
  console.log('실행'+ `${count}`);
  count++;
}, 3000);
//컨트롤 c 누르면 정지

// 타이머 지우기 ~~~ 적다 맘
let id = setInterva2(() => {
  console.log('실행'+ `${count}`);
  count++;
}, 3000);

setTimeout
