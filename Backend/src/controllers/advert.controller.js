import cloudinary from "../../cloudinary/cloudinary.js"
import advertModel from "../models/adverts.model.js";



export const postAdvert =async (req,res) => {
    const {name,description,image} = req.body

    try {
        if(!name){
            throw new Error("Name not found");
        }
        if(!description){
            throw new Error("Description not found");
        }
        if(!image){
            throw new Error("Image not found");
        }

        const uploadAdvert = await cloudinary.uploader.upload(
            image,{}
        )

        if(!uploadAdvert){
            throw new Error("couldn't upload image");
        }

        const sendAd = await advertModel.create({
            name:name,
            description:description,
            image:uploadAdvert.secure_url
        })
        if(sendAd){
            res.status(200).json({
                success:true,
                message:"successfully added advert",
                data:{
                    name:name,
                    description:description,
                    image:uploadAdvert.secure_url
                }
            })
        }
        if(!sendAd){
            throw new Error("Advert not added to DB");
        }

    } catch (error) {
        if(error){
            console.log(error)
            res.status(404).json({
                success: false,
                message: "could'nt post Advert",
            })
        }
    }
}

export const getAdvert = async (req,res) => {
    try {
     const adverts = await advertModel.find({})
     if(adverts){
        res.status(200).json({
            success:true,
            message:"success",
            data:{
                adverts
            }
        })
     }
    } catch (error) {
        console.log(error)
        if(error){
            console.log(error)
            res.status(404).json({
                success: false,
                message: "could'nt get Advert",
            })
        }
    }
}

export const deleteAdvert = async (req,res) => {
    const {_id} = req.body
    try {
        const Response = await advertModel.deleteOne({_id:_id})
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