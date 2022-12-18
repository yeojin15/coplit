/*
문제
number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 평균을 리턴해야 합니다.

입력
인자 1 : arr
number 타입을 요소로 갖는 배열

출력
number 타입을 리턴해야 합니다.

주의 사항
반복문(for, while) 사용은 금지됩니다.
반드시 arr.reduce를 이용해서 풀어야 합니다.
빈 배열을 입력받은 경우, 0을 리턴해야 합니다.

입출력 예시
let output = computeAverageOfNumbers([4, 5, 6]);
console.log(output); // --> 5
*/

function computeAverageOfNumbers(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if(arr.length === 0) return 0;
  const sum =  arr.reduce(function(a,b){
    return a+b;
  },0);
  return sum/arr.length;
}
