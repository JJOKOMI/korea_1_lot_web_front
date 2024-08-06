//* 배열의 콜백함수의 형태
//? 배열.메서드(콜백함수)
// >> 콜백함수는 3가지 함수 선언 방식 모두 사용 가능
// >> 콜백함수를 가지는 배열의 메서드의 공통된 기능은 배열을 "순회"
function callback(value, index, array){ 
  // value : 배열에서 순회되는 각 요소의 값
  // index : 배열에서 순회되는 각 요소의 인덱스 번호
  // array : 배열 그 자체를 자동으로 받아옴 
  // 콜백 함수의 인자값은 필수사항은 아님 value만 사용하는 경우가 많다.
  // -> 사용하지 않는 인자값은 생략 가능

  // 매개변수는 함수 내부의 로컬 변수이기 때문에 이름 변경 가능

  //! 배열의 콜백함수를 가지는 메서드 종류
  // 1. forEach()
  // : 각 요소에 대해 동일한 함수를 실행
  // : 배열 내부의 요소를 매개변수로 사용하여 콜백함수를 호출
}
console.log('--forEach()--');

const numbers = [23, 41, 19, 7 ,36];

numbers.forEach(function(value, index, array){ //array사용하지 않아서 삭제가능
  console.log(`${index + 1}번째 요소 : ${value}`);
});

//! map() :배열의 각 요소에 대해 함수를 적용하고, '새로운 배열을 생성하여 반환'
//! 콜백함수에서 리턴한 값들을 기반으로 새로운 배열을 생성, 전체배열의 요소 개수의 변화가 x
console.log('--map()--');

const newNumbers = numbers.map(function(value){
  let square = value * value;
  return square;
});

console.log(newNumbers);


//! filter()
// 콜백함수에서 리턴하는 값이 true인 것들만 모아서 '새로운 배열을 만드는 함수'
// 기존의 배열과 요소의 수가 일치하지 않을 수도 있다.



