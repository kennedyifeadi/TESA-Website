const authAdmin = (req,res,next) => {

    try {
        if(req.session.admin.login == null || req.session.admin.login == undefined){
            throw new Error("session expired");
        }
        else{
            next()
        }
    } catch (error) {
        if(error){
            console.log(error)
            res.status(500).json({
                success:false,
                message:"session timeout, login again"
            })
        }
    }
   
}

export default authAdmin