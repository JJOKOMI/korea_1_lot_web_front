// 함수 선언식
function square1(x) {
  let result = x * x ;
  return result; 
  //리턴 만나면 로직 종료됨
  //리턴뒤에 나오는 코드는 실행안됨
}

console.log(square1(2));

//함수 표현식
const square2 = function(x){
  let result1 = x * x ;
  return result1; 
//  return x * x ; 가능
}
console.log(square2(2));

// 화살표 함수
const square3 = x => x * x;

console.log(square3(2));
