import express from 'express';
import findOneUser, { findUserUpdate } from '../controller/findUserController.js';
import tokenVerify from '../middleware/tokenVerify.js';
import upload from '../middleware/multer.js';
 
const findUserRouter = express.Router();

findUserRouter.get("/user/:id",findOneUser);
findUserRouter.put("/update/:id", upload.fields([{ name: 'profile', maxCount: 1 }, { name: 'banner', maxCount: 1 }]), findUserUpdate);
export default findUserRouter;

// http://localhost:3000/api/findUser/user/6680450a0fb10c1ca837d9af