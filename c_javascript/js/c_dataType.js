let str1 = 'hello';
let str2 = "hello";

let str3 = `hello, world`;
//템플릿 문자열

let name = '이승아';
console.log('안녕하세요'+ name + '입니다.');
console.log(`안녕하세요 ${name}입니다.`);

let multiLine = `안녕
하리오까이까잉`
console.log(multiLine);

let num = 10;
let float = 10.5;

console.log(typeof num);
console.log(typeof float);

let bool1 = true;
let bool2 = false;

console.log(bool1);
console.log(typeof bool1);

console.log(bool2);
console.log(typeof bool2);

let hello;

let value = null;
console.log(typeof value);
//object 라고 하면 값이 없다는 것

console.log((typeof value === 'object' && !value) ? 'null' : "not null"); 
console.log(hello);

let num1 =123;
let num2 =579;

console.log(num1 + num2);

let stringNum1 = String(num1);
let stringNum2 = String(num2);

console.log(stringNum1 + stringNum2);

//터미널에서 검은색은 문자, 노란색은 숫자

let notANumber = '안녕하세요';

console.log(Number(notANumber));
//NaN : Not a Number 숫자로 변환 할 수 없는 값을 변환 시도할 경우

console.log(Number(stringNum1));
console.log(typeof Number(stringNum1));


