//객체의 멤버 접근 방법

let array = [1, 2, 3, 4];
array[0] = 5;
console.log(array);

let dog = {
  name: {
    last: 'choco',
    first: 'coco'
  },
  age: 3,
  color: 'white',
  favoriteToy: ['곰인형', '탱탱볼'],

  bark: function(){
    console.log('멍멍');
  },

  greet: function(){
    console.log(`${this.name.last}`);
      
  }
}

console.log(dog.age);
console.log(dog.name.first);
console.log(dog.favoriteToy[1]);


dog.greet();

