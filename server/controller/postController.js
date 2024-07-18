import postModel from "../model/postModel.js";
import jwt from "jsonwebtoken";

const postAdd = async (req, res) => {
    const image = req.file.filename;
    try {
        const info = req.user;
            // const userData = await userModel.findById(info.userId);
            const {title , description ,category , summary } = req.body;
            const newPost =  new postModel({
                title ,
                description ,
                category ,
                auther : info.userId,
                image,
                summary
            }); 
            // userData.post.push(newPost._id);
            await newPost.save(); 
            res.status(201).json({message : "Blog added successfully"});
        
    } catch (error) {
        return res.json({error}) 
    }
};


export const findAllPost = async (req , res) => {
    const postData = await postModel.find().populate("auther");
    res.json(postData);
} 

export const searchPost = async (req, res) => {
    const { category, title, auther } = req.query;
    const queryObject = {};

    if (category) {
        queryObject.category = { $regex: category, $options: "i" };
    }

    if (title) {
        queryObject.title = { $regex: title, $options: "i" };
    }

    if (auther) {
        queryObject["auther.username"] = { $regex: auther, $options: "i" };
    }

    try {
        const postData = await postModel.find(queryObject).populate("auther");
        if (postData) {
            res.json({ postData });
        } else {
            res.status(404).json({ message: "No posts found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export default postAdd  