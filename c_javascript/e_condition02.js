let score = 101;

// switch(true){
//   case score < 0 || score > 100 : 
//     grade = '유효한 값이 아닙니다.';
//     break;
//   case score <= 90 :
//     grade = 'A'
//     break;
//   default :
//     grade = 'F';
//     break;
// };
// console.log(grade);

switch(true){
  case score < 0 || score > 100 : 
    grade = '안1'
    console.log(grade);
    break;
  case score <= 90 :
    console.log('안2');
    break;
  default :
    console.log('안');
    break;
};

true || console.log('출력a');
