const express = require("express");
const readline = require("readline");

const app = express();

// a와 b API 함수 정의
function aAPI() {
  console.log("a API가 호출되었습니다.");
}

function bAPI() {
  console.log("b API가 호출되었습니다.");
}

// 터미널 명령어 입력을 위한 readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "터미널 명령어를 기다리는 중... (a 또는 b를 입력하십시오. 종료하려면 exit를 입력하십시오.)"
);

rl.on("line", (input) => {
  switch (input) {
    case "a":
    // 만약 input이 "a"라면:
    // case "a":와 일치하기 때문에 그 아래에 있는 코드 블록이 실행됩니다.
    // 이어서 case "c":가 나오지만, 이미 일치하는 레이블을 찾았기 때문에 'fall-through'가 발생하고 그 아래의 코드 블록도 실행됩니다.
    // aAPI(); 함수가 호출되며, 이어서 break;문이 실행되어 switch 문을 종료합니다.
    case "c":
      aAPI();
      break;
    // 만약 input이 "c"라면:
    // case "a":는 일치하지 않으므로 넘어갑니다.
    // case "c":와 일치하기 때문에 그 아래에 있는 코드 블록이 실행됩니다.
    // aAPI(); 함수가 호출되며, 이어서 break;문이 실행되어 switch 문을 종료합니다.
    case "b":
      bAPI();
      break;
    case "exit":
      rl.close();
      break;
    default:
      console.log(`'${input}'은/는 알 수 없는 명령어입니다.`);
  }
});
