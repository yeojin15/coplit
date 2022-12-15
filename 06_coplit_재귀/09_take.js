/*
문제
수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수 (num >= 0)
인자 2 : arr
임의의 요소를 갖는 배열

출력
순차적으로 num 개의 요소로 구성된 배열을 리턴해야 합니다.

주의 사항
함수 take는 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용은 금지됩니다.
입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).

입출력 예시
let output = take(2, [1, -2, 1, 3]);
console.log(output); // --> [1, -2]
output = take(5, [1, -2, 1, 3]);
console.log(output); // --> [1, -2, 1, 3]
*/

function take(num, arr) {
  // TODO: 여기에 코드를 작성합니다.
  // head num 개수만큼 더하기
  if(num===0) return [];
  if(num>arr.length) return arr;

  let head = arr[0]
  let tail = arr.slice(1)

  return [head].concat( take(num-1, tail) )

}
