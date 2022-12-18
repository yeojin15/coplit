/*
문제
배열과 객체를 입력받아 배열의 각 요소들을 객체의 키로 했을 때 그 값을 추출하여 만든 새로운 객체를 리턴해야 합니다.

입력
인자 1 : arr
string 타입을 요소로 갖는 배열
인자 2 : obj
임의의 속성을 갖는 객체

출력
객체를 리턴해야 합니다.

주의 사항
입력받은 객체에 존재하지 않는 키는 무시합니다.
입력받은 객체를 수정하지 않아야 합니다.

입출력 예시
const arr = ['a', 'c', 'e'];
const obj = { a: 1, b: 2, c: 3, d: 4 };

let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
*/

function select(arr, obj) {
  // TODO: 여기에 코드를 작성합니다.
  // 객체의 키마다 순회해서
  // 배열요소와 같으면 {키: 배열요소} 이 형태로 리턴
  let newObj = {};
  for(let key in obj){
    for(let i=0; i<arr.length; i++){
      if(key === arr[i]){ // 키와 배열요소 같으면
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
}


/*
function select(arr, obj) {
  // TODO: 여기에 코드를 작성합니다.
  // 객체의 키마다 순회하며
  // 배열의 값과 같으면 키: 값을 출력한다
  let newObj = {};
  for(let prop in obj){
    // obj의 키 마다 순회
    for(let i=0; i<arr.length; i++){
      if(prop === arr[i]){
        newObj[prop] = obj[prop];
      }
    }
  }
  return newObj;
}
*/