/*
문제
수를 입력받아 n-factorial(n!; 엔-팩토리얼) 값을 리턴해야 합니다.
n! 은 1부터 n까지 1씩 증가한 모든 값의 곱입니다.

입력
인자 1 : num
number 타입의 정수 (num >= 0)

출력
number 타입을 리턴해야 합니다.
1 * 2 * ... * num

주의 사항
함수 factorial은 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용은 금지됩니다.
factorial(0)은 1로 정의됩니다.
음수 입력은 들어오지 않습니다.

입출력 예시
let output = factorial(10);
console.log(output); // --> 3628800
*/

function factorial(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  if(num===0) return 1
  return num * factorial(num-1)
}