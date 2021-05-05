import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import mongoose from "mongoose";
import app from "./app.js";

mongoose
  .connect(
    `mongodb+srv://AurelM:${process.env.DB_PASS}@cluster1.m4oz9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err.message));

const port = process.env.PORT || 4050;

app.listen(port, () => console.log(`Listening for port: ${port}`));
