
import eventModel from "../models/event.model.js";

export const postEvents = async (req,res) => {
    const {name,subText,date,time,category} = req.body
    try {
        if(!name){
            throw new Error("name doesn't exist");
        }
        if(!subText){
            throw new Error("Sub_Text doesn't exist");
        }
        if(!date){
            throw new Error("date doesn't exist");
        }
        if(!time){
            throw new Error("time doesn't exist");
        }
        if(!category){
            throw new Error("category doesn't exist");
        }

       const pEvent = await  eventModel.create({
            name:name,
            subText:subText,
            date:date,
            time:time,
            category:category
         })


         if(pEvent){
            res.status(200).json({
                success:true,
                message:"successfully added Event",
                data:{
                    name:name,
                    subText:subText,
                    date:date,
                    time:time,
                    category:category
                }
            })
         }else{
            throw new Error("Event not added to database");
         }
        
    } catch (error) {
        if(error){
            console.log(error)
            res.status(404).json({
                success: false,
                message: "could'nt post event",
                error:{
                    error
                }
            })
        }
    }
}

export const getEvents = async (req,res) => {
    try {
    const events = await eventModel.find({})
    if(events == "" || events == [] || events == null){
        throw new Error("couldn't get events");
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
                message: "could'nt get Events",
                error:{
                    error
                }
            })
        }
    }
}