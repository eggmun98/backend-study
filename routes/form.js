const express = require("express"); // express 인스턴스 사용한다는 뜻
const router = express.Router(); // express 라우터를 사용하기 위해 선언

// router.get("/", (req, res, next) => {
//   res.render("form", { title: "Form 테스트" });
// });
// res.render는 view 파일을 랜더링이 가능하다.

router.get("/", (req, res, next) => {
  res.render("form", {
    title: "Form 테스트",
    name: "문성진",
    blog: "https://eggmun98.tistory.com/",
    homepage: "없음",
  });
});

module.exports = router;
