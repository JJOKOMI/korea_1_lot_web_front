// console.log('for 반복문 예제');
// for (let ａ = 0; a < 5; a++){
//   console.log(a);
// }

// console.log('--while 반복문--');
// let b = 0; // 초기화식의 분리

// while(b<5) { // 조건식
//   //표현식을 조건식에 도달할 기준이 없음 : 무한루프

//   console.log(b);

//   //증감식 : 코드블록 내에 존재
//   //while은 조건에 도달하지 않으면 코드불록의 완전한 반복 후 다시 조건을 검토
//   b++; // = b = b + 1과 동일 (b += 1)

// }

// console.log{'do-while'};

// let c =0;
// do {
//   //실행블록 내에 초기화식 작성의 경우
//   //반복할때마다 초기화 되어 무한 루프와 동일해짐
//   console.log(c);

//   c += 1;
// }while(c < 5);


//! 1에서 20까지의 숫자 중에서 3의 배수만 출력하는 코드


console ('--반복문 / 조건문 활용 예제--')

for(let i = 1; i <= 20; i++ ){

  if(i % 3 === 0){
    console.log(i);
  }

}


