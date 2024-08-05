function sum(a,b){
  return a + b;
}

let result = sum(1,2);
console.log(result);
console.log(sum(622515, 5454545));



/*
let button = document.querySelector('button'); //웹문서에서 선택자를 검색, 가져온다 button태그가져온다

- 웹 문서의 요소들과 묶이는 기능 동작을 함수로 미리 정의
function message(){
  console.log('버튼이 클릭되었습니다.');
}
- 웹 문서의 내용인 button 클릭시 동작을 설계
button.addEventListener('click', message);

*/
//# 3. 함수 구현방법 ("함수생성")
// : function 키워드를 사용

/*
  function 함수명 (매개변수, parameter ){
  - 함수가 수행할 코드
  return 결과값;
  }
 */

  //? 함수명
  //: 변수 명명 규칙과 유사, 동사 사용을 권장

  //? 매개변수 (parameter, 파라미터)
  //: 함수에 입력으로 제공 되는 값(데이터)
  //: 대부분 해당 값을 통해 특정 작업을 수행

  //? 결과값 (return, 리턴값)
  // : 함수가 작업을 완료한 후 반환하는 값
  // : return키워드를 사용하여 결과값을 반환
  // > 함수명 , 매개변수, 결과값은 선택 가능

  //# 함수 선언 방식


  greet();
  console.log('함수 선언 이전');
  //함수 선언(정의)
  function greet(){
    console.log('안녕하세요');
  }
  //함수 호출(사용)
  greet();


  //greet2(); 오류남 선언하기이전에 사용할수없다
  console.log("함수 표현식 선언이전")
  const greet2 = function(){
    console.log('함수 표현식');  
  }
  greet2();
//////////////////////////////////////
// greet3(); 에러남 호이스팅불가
console.log('화살표이전')
  const greet3 = () => {
    console.log('안녕하세요 화살표함수');
  }

  greet3();

  //? 화살표 함수는 경우 함수 본문(기능 구현부)이 단일문인 경우 중괄호와 소괄호, return 키워드 생략이 가능

  const greet4 = name => console.log(`안녕하세요. ${name}님`);

  //? 인자값 (아규먼트, argument)
  // 실제 계산을 위해(함수 사용을 위해) 파라미ㅓㅌ로 전달되는 값 ,파라미터가 변수의 선언, 인자값 변수의 할당,
  // 파라미터와 인자는 생략가능
  //파라미터 ? 인자 ? ??  
  greet4('이승아');
/////////////////////////////////////////

let name = '황현지';

  function lsa() {
    let job = 'Developer';
    console.log(`${name}'s job is ${job}`);
  }