// let array = [1, 2, 3, 4, 5];

// function sumArray(array) {
//   let sum = 0;

// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// // 3 X 3 크기의 2차원 배열

// console.log(matrix[0]); // [ 1, 2, 3 ]
// console.log(matrix[0][1]); // 2

let fruit = ['사과', '바나나', '망고'];

let result1 = fruit.join();
let result2 = fruit.join('');
let result3 = fruit.join('-');

console.log(result1);
console.log(result2);
console.log(result3);

let result4 = result1.split(',');
let result5 = result2.split(' ');
let result6 = result3.split('-');

console.log(result4);
console.log(result5);
console.log(result6);