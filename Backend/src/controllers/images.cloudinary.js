import express from "express"
import cloudinary from "../../cloudinary/cloudinary.js"
import mongoose from "mongoose"
import executiveModel from "../models/executive.model.js"

 export const uploadExco = async (req,res) => {

    const {name,department,level,position,image} = req.body

    try {
        
    const uploadResult = await cloudinary.uploader
    .upload(
        image, {}
    )

    const send = await executiveModel.create({
        name:name,
        department:department,
        level:level,
        position:position,
        image:uploadResult.secure_url
    })
    if(send){
        res.status(200).json({
            success:true,
            message:"successfully added executive",
            data:{
                name:name,
                department:department,
                level:level,
                position:position,
                image:uploadResult.secure_url
            }
        })
    
    }
    if(!send){
        console.log(send.message)
        throw new Error("couldn't register executive");
    }



    } catch (error) {
       console.log(error) 
       res.json({error:"an error occured"})
       return
    }
}



export const getExco = async (req,res) => {

    try {
        const executives = await  executiveModel.find({})
        if(executives == "" || executives == null || executives == []){
            throw new Error("couldn't get data");
        }
        res.status(200).json({
            success:true,
            message:"data gotten successfully",
            data:{
                executives:executives
            }
        })
    } catch (error) {
        if(error){
            res.status(404).json({
                success: false,
                message: "could'nt get exco data",
                error:{
                    error
                }
            })
        }
    }
}

export const deleteExco = async (req,res) => {
    const {_id} = req.body
    try {
        const Response = await executiveModel.deleteOne({_id:_id})
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