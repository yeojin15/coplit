//* 연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.
//* 입출력 예시
/*
let output = computeWhenDouble(7);
console.log(output); // --> 11

output = computeWhenDouble(10);
console.log(output); // --> 8
*/

//!!!!!!!




/*
function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
  let year = 0;
  let principal = 1; // 비율로보고 계산하기 2가 되는 시간 구하는거
  // 이자율 5프로라면 1.05 >>>> 1+ 5/100
  let rate = 1 + interestRate/100; 

  while(principal < 2){
    principal = principal*rate; // 1년(1 * 1.05) >>>  2년(1.05 * 1.05) ... 
    year++;
  }
  return year;
}


function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
  let year = 0;
  for(let i=1; i<2; year++){
    i = i+i*interestRate/100
  }
  return year;
}
*/