import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import playerRoutes from "./src/routes/playerRoutes.js";
import userInfoRoutes from "./src/routes/userInfoRoutes.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/player", playerRoutes);
app.use("/user", userInfoRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`, "http://localhost:" + PORT);
});
