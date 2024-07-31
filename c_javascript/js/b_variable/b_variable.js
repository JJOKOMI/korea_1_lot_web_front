// 변수

// 변수 선언

// 변수 초기화

/* 
  변수 선언 방식 : 변수종류 변수명;
  변수종류 : ley, var

  let vs var
  공통점 - 재할당 가능(변수 특성), 호이스팅 가능

  차이점 - 
  let : 동일한 영역 내에서 같은 이름으로 재선언 가능
  var : 동일한 영역 내에서 같은 이름으로 재선언 불가
*/

let currentYear = 2024;
let birthYear;
let age;

birthYear = prompt('태어난 년도를 입력해주세요');

age = currentYear - birthYear;

document.write(birthYear + '년에 태어난 사람의 나이는' + age + '세입니다.');

const PI = 3.14;


let radius = prompt('반지름을 입력해주세요.');

console.log('반지름', radius * radius * PI)

