const authAdmin = (req,res,next) => {

    try {
        if(req.session.admin == null || req.session.admin == undefined){
            console.log(req.session.admin + "error")
            throw new Error("session expired");
        }
        else{
            console.log(req.session.admin + "success")
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