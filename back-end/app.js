require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const router = require("./routes");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Application is running",
  });
});

app.use("/api/v1", router);

app.use((req, res, next) => {
  res.status(404).json({
    status: "Failed",
    message: "API not found",
    isSuccess: false,
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
