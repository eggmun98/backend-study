const express = require("express"); // express 인스턴스 사용한다는 뜻
const router = express.Router(); // express 라우터를 사용하기 위해 선언

router.get("/", (req, res, next) => {
  res.render("form", { title: "Form 테스트" });
});

router.post("/", (req, res, next) => {
  res.json(req.body);
});

module.exports = router;
