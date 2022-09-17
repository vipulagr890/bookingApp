import express from "express";
import path from "path";
import url from "url";

const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const PORT = 3001;

app.use(express.static(path.join(__dirname, "public")));

app.get("/hello", (req, res) => {
  res.send("hello world!");
});

app.get("/page1", (req, res) => {
  //   res.sendFile(path.join(__dirname, "index.html"));
  res.json({ vipul: 25, learning: "mern stack development" });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
