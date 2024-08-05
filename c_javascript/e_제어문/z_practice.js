//배열의 길이 : 배열명.length
//배열 전체를 순회 : 초기화 = 0; 조건식 < 배열명.length; 증감

let fruits = ['apple', 'banana', 'orange'];

console.log('--for문--');

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}
console.log('--while문--');

let a = 0;

while(a < fruits.length){
  console.log(fruits[a]);
  a++;
}

console.log('--do-while문--');

let b = 0;

do{
 console.log(fruits[b]);
 b++;

}while (b < fruits.length);

//반복문 실행시 조건식에 대한 배열의 길이 측정이 단 한번만으로 가능
//let fruitLenth = fruit.length; 
//매번 반복문을 돌며 배열의 길아를 계산하지 않아도 된다.
// 배열의 길이는 루프 바깐에서 한번만 계싼하는 것이 효율적이다.