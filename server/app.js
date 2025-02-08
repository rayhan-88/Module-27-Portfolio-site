import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import router from "./src/routes/api.js";



export const app = express();

// App Use Default Middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
// app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true }));
app.use(
    helmet({
        crossOriginResourcePolicy: false,
    })
);
app.use(cookieParser());

// App Use Limiter
const limiter = rateLimit({ windowMs: 20 * 60 * 1000, max: 2000 });
app.use(limiter);

// Cache
app.set("etag", false);

// Database Connect
mongoose.connect('mongodb+srv://rayhan:rayhan1234@shop.looku.mongodb.net/portfolio', { autoIndex: true }).then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.log(err.toString());
    });

app.use("/api", router);

app.use("/upload-file", express.static("uploads"));


