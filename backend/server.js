const express = require("express");
const cors = require("cors");
const path = require("path");
const emailRoutes = require("./routes/emailRoutes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use("/email", emailRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("listening on port", port);
});
