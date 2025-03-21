import cloudinary from "../../cloudinary/cloudinary.js";
import sponsorModel from "../models/sponsor.model.js";

export const postSponsor = async (req,res) => {
    const {image, name, position,text} = req.body
    try {

        if(!name){
            throw new Error("name doesn't exist");
        }
        if(!image){
            throw new Error("SImage doesn't exist");
        }
        if(!position){
            throw new Error("position doesn't exist");
        }
        if(!text){
            throw new Error("text doesn't exist");
        }

        const sponsImage = await cloudinary.uploader
            .upload(
                image, {}
            )
        if(!sponsImage){
            throw new Error("couldn't add images")
        }

        const spons = await sponsorModel.create({
            image:sponsImage.secure_url, 
            name:name,
            position:position,
            text:text
        })
        if(spons){
            res.status(200).json({
                success:true,
                message:"successfully added Sponsors",
                data:{
                    image:sponsImage, 
                    name:name,
                    position:position,
                    text:text
                }
            })
        }else{
            throw new Error("couldn't add sponsor");
        }
    } catch (error) {
        if(error){
            console.log(error)
            res.status(404).json({
                success: false,
                message: "could'nt post sponsor",
                error:{
                    error
                }
            })
        }
    }
}

export const getSponsor = async (req,res) => {
    try {
        const events = await sponsorModel.find({})
        if(events == "" || events == [] || events == null){
            throw new Error("couldn't get sponsors");
        }  
        res.status(200).json({
            success:true,
            message:"success",
            data:{
                events
            }
        })
    } catch (error) {
        if(error){
            console.log(error)
            res.status(404).json({
                success: false,
                message: "could'nt get Sponsor",
            })
        }
    }
}