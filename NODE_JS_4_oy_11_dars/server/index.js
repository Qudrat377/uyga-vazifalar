const express = require("express");
const cors = require("cors");
const dataRouter = require("./router/data.routes");
const authRouter = require("./router/auth.routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4020;
app.use(express.json())
app.use(cors())

// router 
app.use(dataRouter)
app.use(authRouter)

app.listen(PORT, () => {
  console.log("Servr is running at: " + PORT);
});
