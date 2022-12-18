/*
문제
배열를 입력받아 배열의 마지막 요소를 리턴해야 합니다.

입력
인자 1 : arr
임의의 요소를 갖는 배열

출력
배열의 요소를 리턴해야 합니다.

주의 사항
빈 배열을 입력받은 경우, undefined를 리턴해야 합니다.

입출력 예시
let output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4
*/

function getLastElement(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // arr = [1,2,3] > legnth 3 / last index 2;
  if(arr.length === 0) return undefined;
  return arr[arr.length - 1];
}
//done
