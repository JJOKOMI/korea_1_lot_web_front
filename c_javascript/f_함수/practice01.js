//! 문제 1
//함수 선언식
function add(a, b) {
  let result = a + b ;
  return result;
}

console.log(add(10,5));

// 함수 표현식
const subtract = function(a,b) {
  let result2 = a - b;
  return result2;
}

console.log(subtract(10, 5));


// 화살표 함수
const multiply = (a, b) => a * b ; // 변수에 안넣어줘도되는지 .. 
// 화살표 함수 const말고 let도 가능 ?? 
// const는 어떨때쓰는건지  let var 차이

console.log(multiply(10, 5));

//! 문제2
function calculatePay(hours, rate) {
    if(hours > 160){
      let max = hours - 160 ;
      let result4 = (hours - max) * rate + max * (rate * 1.5) ;
      return result4;
    }
    else{
      result4 = hours * rate ;
      return result4; 
    }
}

console.log('직원a :' + calculatePay(172,20)+ '달러');
console.log('직원b :' + calculatePay(160,22)+ '달러');
console.log('직원c :' + calculatePay(180,18)+ '달러');