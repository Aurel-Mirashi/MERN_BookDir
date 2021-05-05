import express from "express";
import cors from "cors";
import path from "path";
import bookRouter from "./routes/bookRoutes.js";
const app = express();

//Body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cors
app.use(cors({ origin: "*" }));
//Server static files using the absolute path of the current directory
const __dirname = path.resolve(); // it returns the absolute path of the  current working directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Mount the routes
app.use("/api/bookdir", bookRouter);

export default app;
