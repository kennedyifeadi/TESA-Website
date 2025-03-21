import mongoose from "mongoose";
const eventSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    subText:String,
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    }

})

const eventModel = mongoose.model("event", eventSchema)
export default eventModel