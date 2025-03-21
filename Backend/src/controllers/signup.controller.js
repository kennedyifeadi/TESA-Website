import adminModel from "../models/admin.model.js"
import bcrypt from "bcryptjs"
const signup = async (req,res) => {
    const {username,password} = req.body
    try {
        if(!username){
            throw new Error("username not found");
        }
        if(!password){
            throw new Error("password not found");
        }
        const newPassword = await bcrypt.hash(password,10)
        const admin = await adminModel.create({
            username:username,
            password:newPassword
        })
        if(admin){
            res.status(200).json({
                success:true,
                message:"successfully added admin",
                data:{
                    username:username
                }
            })
        }
    } catch (error) {
        if(error){
            console.log(error)
            res.status(404).json({
                success: false,
                message: "couldn't get users",
                error:{
                    error
                }
            })
        }
    }
}

export default signup