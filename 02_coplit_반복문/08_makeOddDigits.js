/*
문제
수(num)를 입력받아 1을 포함하여 num개의 홀수로 구성된 문자열을 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수 (num >= 1)

출력
string 타입을 리턴해야 합니다.

주의 사항
반복문(while)문을 사용해야 합니다.
숫자(number string) 사이의 구분은 없습니다. ('13579')

입출력 예시
let output = makeOddDigits(3);
console.log(output); // --> "135"

output = makeOddDigits(5);
console.log(output); // --> "13579"
*/

function makeOddDigits(num) {
  // TODO: 여기에 코드를 작성합니다.
  let digit = '';
  let i=0;
  let start = 1;
  while(i<num){
    digit = digit + start;
    start = start + 2;
    i++;
  }
  return String(digit)
}
