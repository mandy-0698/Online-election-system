const express = require("express");
const app = express();
require("./db");

const port = 3000;
app.listen(port, () => {
  console.log(`Server2 running on ${port}`);
});
