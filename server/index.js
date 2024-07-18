import express from "express"
import cors from 'cors';
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import 'dotenv/config'
import userRouter from "./routes/userRoute.js";
import postRouter from "./routes/postRoute.js";
import findUserRouter from "./routes/findUserRoute.js";
import FindBlogRouter from "./routes/findBlogroute.js";


mongoose.connect(process.env.DB_CONNECT).then(() => console.log("DB CONNECT")).catch(()=> console.log("CONNECTION FAILED"))

const app = express();

app.use(express.json());
app.use("/image" , express.static("upload"))
app.use(cors());
app.use(cookieParser());

// API
app.use("/api/user" , userRouter);
app.use("/api/post" , postRouter);
app.use("/api/findUser" , findUserRouter);
app.use("/api/findBlog" , FindBlogRouter);

app.get("/" , function(req , res){
    res.send("Hello World");
})

app.listen(3000 , () => {
    console.log("Server is running on port 3000");
}) 