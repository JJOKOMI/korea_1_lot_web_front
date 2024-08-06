function Person(firstName, lastName, age, gender){
  this.name = {
    first: firstName,
    last: lastName
  };

  this.age = age;
  this.gender = gender;

  this.greeting = function(){
    console.log(`${this.name.last}`);
  }
}

let person1 = new Person('승아','이',50,'female');

person1.greeting();



class Human {
  //속성 : 생성자 함수 정의와 동일

  name;
  age;
  job;

  //생성자 : constructor() 메서드 정의, 생략시 빈 생성자가 자동 정의

  constructor() {
    
  }

}
