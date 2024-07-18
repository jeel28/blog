import jwt from "jsonwebtoken";

const tokenVerify = (req , res , next) => {
    const {token} = req.cookies;
    console.log(req.headers.cookie);
    try {
        if(token){
            jwt.verify(token , process.env.JWT_SECRET , (err , decoded) => {
                if(err){
                    console.log(err);
                    return res.status(401).json(err);
                } 
                
                req.user = decoded;
                next();
            })
        }
    } catch (error) { 
        console.log(error);
    }
}

export default tokenVerify;