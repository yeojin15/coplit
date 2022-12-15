/*
문제
문자열을 입력받아 해당 문자열에 등장하는 각 문자(letter)를 가지고 만들 수 있는 길이 2의 문자열들을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 문자열
출력
string 타입을 리턴해야 합니다.
입력받은 문자열의 각 문자를 0, 1, 2, ..., n이라고 할 경우, 00,01,02,...,nn 형식으로 리턴해야 합니다.
주의 사항
이중 반복문(double for loop)을 사용해야 합니다.
빈 문자열을 입력받은 경우에는 빈 문자열을 리턴해야 합니다.
입출력 예시
1
2
3
4
5
6
7
8
let output = makePermutations('ab');
console.log(output); // --> 'aa,ab,ba,bb'

output = makePermutations('123');
console.log(output); // --> '11,12,13,21,22,23,31,32,33'

output = makePermutations('');
console.log(output); // --> ''
*/

//ab > aa ab ba bb length==2; 0 1
function makePermutations(str) {
  // TODO: 여기에 코드를 작성합니다.
  let word = '';
  for(let i=0; i<str.length; i++){
    for(let j=0; j<str.length; j++){
      word = word + `${str[i]}${str[j]},`;
    }
  }
  return word.slice(0, word.length - 1);
  
}
