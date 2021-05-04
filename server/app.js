const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT;
dotenv.config({ path: "./config.env" });

require("./db/conn");
app.use(require("./router/auth"));

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
