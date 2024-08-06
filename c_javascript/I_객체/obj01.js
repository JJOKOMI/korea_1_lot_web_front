//? 특성
//  제조사 : '삼성
//  모델 : 아이폰14, 저장공간, 배터리상태  

//? 기능
// 전화하기, 카톡하기, 유튜브보기, 전원끄기, 문자하기

let person = {
  //? 데이터(키:값)
  name: {
    last: '이',
    first: '승아'
  },

  age: 50,
  gender : 'femaale',
  interests: ['development', 'exercise'],
  isMarride: false
}

function Human(nameParam, heightParam){
  this.name = nameParam;
  this.height = heightParam;
  //받아오는 값을 this.객체이름 안에넣어준다

  this.greet = function() {
    console.log('hello')
  }
}
let person1 = new Human('이승아', 169);
let person2 = new Human('이도경', 157);

console.log(person1.name);
person1.greet();