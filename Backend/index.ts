import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import env from "dotenv";
import testRoute from "./routes/api/test";
env.config();

const port = process.env.PORT || 3600;

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/test", testRoute);
app.use("*", (req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.listen(port, async () => {
    try {
        //await mongoose.connect(process.env.MONGO_URI || "");
        console.log(`Server is running on port ${port}`);
    } catch (error) {
        console.log(error);
    }
})