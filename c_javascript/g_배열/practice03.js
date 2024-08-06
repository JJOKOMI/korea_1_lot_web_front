//문제1
function findmin(array) {
  let min = array[0];
  let length = array.length;

}

//문제2
let findOdd = (arr) => {
  let odds = [];
  let length = arr.length;

  for (let index = 0; index < length; index++){
    if(arr[index] % 2 !== 0 ){
      odds.push(arr[index]);

    }
  } 
  return odds;

}
console.log(findOdd([1,2,3,4,5,6,7,8,9]));