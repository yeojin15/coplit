/*
문제
문자열을 입력받아 문자열에서 가장 긴 단어를 리턴해야 합니다.

입력
인자 1 : str
string 타입의 공백이 있는 알파벳 문자열

출력
string 타입을 리턴해야 합니다.

주의 사항
단어는 공백 한 칸으로 구분합니다.
가장 긴 단어가 2개 이상이면 첫번째로 등장하는 단어를 리턴해야 합니다.

입출력 예시
let output = getLongestWord('I love codestates');
console.log(output); // --> "codestates"

output = getLongestWord('Teamwork skills will take you anywhere');
console.log(output); // --> "Teamwork"
*/

function getEvenNumbers(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  for(let num of arr){
    if(num%2===0){
      result.push(num);
    }
  }
  return result;
}
//done