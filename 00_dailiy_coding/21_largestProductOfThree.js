/*
문제
정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

입력
인자 1 : arr
number 타입을 요소로 갖는 임의의 배열

출력
number 타입을 리턴해야 합니다.

주의사항
입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
배열의 요소는 음수와 0을 포함하는 정수입니다.
배열의 길이는 3 이상입니다.

입출력 예시
let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
*/

const largestProductOfThree = function (arr) {
  // val1 = 모두 양수
  // val2 = 앞 두 개 음수
  // val3 = 음/양/0 조합
  arr = arr.sort((a,b)=>a-b) // -1 0 1 2
  let len = arr.length;

  let val1 = arr[len-1] * arr[len-2] * arr[len-3]
  let val2 = arr[0] * arr[1] * arr[len-1]
  return Math.max(val1, val2)
};
