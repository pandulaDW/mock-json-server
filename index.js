const express = require("express");

const PORT = 5000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello, world!" });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
