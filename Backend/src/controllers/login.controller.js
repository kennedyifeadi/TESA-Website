import bcrypt from "bcryptjs"
import adminModel from "../models/admin.model.js"
const login = async (req,res) => {
    const {loginUsername,loginPassword} = req.body
    try {
        const admin = await adminModel.findOne({username:loginUsername})
        
        const {username,password} = admin
        if(username != loginUsername){
            throw new Error("User not found");
        }
        const auth = await bcrypt.compare(loginPassword,password)
        if(!auth){
            throw new Error("incorrect password");
        }
        req.session.admin = {
            username:username,
            login:true
        }
        res.status(200).json({
            success:true,
            message:"login successful",
            data:{
                username:username
            }
        })

    } catch (error) {
        if(error){
            console.log(error)
            res.status(404).json({
                success: false,
                message: "login error",
                error:{
                    error
                }
            })
        }
    }
}

export default login