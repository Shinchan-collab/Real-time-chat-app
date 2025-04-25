import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const protectroute = async (req,res,next) =>{
    try {
        const token=req.cookies.jwt                                                                                                                                     
        

if (!token){
    
}

    } catch (error) {
        
    }
}