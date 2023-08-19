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
      aAPI();
      break;
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
