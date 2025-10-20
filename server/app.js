const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/board", (req, res) => {
  res.send({ title: "노드 api 서버 update!!" });
});

const path = require("path");
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// 라우팅 아니고 미들웨어 (에러 처리용)
// 위쪽에서 처리가 안되는건 다 이쪽에서 처리되게
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./public", "index.html"));
});
