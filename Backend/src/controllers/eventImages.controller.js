import eventImgModel from "../models/eventImg.model.js"
import cloudinary from "../../cloudinary/cloudinary.js"

export const eventImages = async (req,res) => {
    const {event,image} = req.body

    try {
        const upl = await  cloudinary.uploader.upload(
            image,{}
        )
        if(!upl){
            throw new Error("couldn't upload images");
        }
       const store = await eventImgModel.create({
            event:event,
            image:upl.secure_url
        })

        if(store){
            res.status(200).json({
                success:true,
                message:"successfully uploaded image",
                data:{
                    event:event,
                image:upl.secure_url
                }
            })
        }else{
            throw new Error("couldn't upload image");
        }
    } catch (error) {
        if(error){
            console.log(error)
            res.status(404).json({
                success: false,
                message: "could'nt post images",
                error:{
                    error
                }
            })
        }
    }
}

export const geteventImages = async (req,res) => {
    try {
      const eventImages = await  eventImgModel.find({})
      if(eventImages == "" || eventImages == [] || eventImages == null){
        throw new Error("couldn't get eventImages");
      }
      res.status(200).json({
        success:true,
        message:"success",
        data:{
            eventImages
        }
      })
    } catch (error) {
        if(error){
            console.log(error)
            res.status(200).json({
                success:false,
                message:"An error occured, couldn't get Images",
                error:{
                    error
                }
              })
        }
    }
}

export const deleteEventImage = async (req,res) => {
    const {_id} = req.body
    try {
        const Response = await eventImgModel.deleteOne({_id:_id})
        console.log(Response)
        if(!Response){
            throw new Error("couldn't delete data");
        }
        if(Response){
            res.status(200).json({
                success:true,
                message:"advert deleted successfully",
                data:{
                    Response
                }
            })
        }
    } catch (error) {
        if(error){
            console.log(error)
            res.status(404).json({
                success:false,
                message:"couldn't delete data",
                error
            })
        }
    }
}