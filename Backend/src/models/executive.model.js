import mongoose, { Types } from "mongoose";

const executiveSchema = new mongoose.Schema({
    name:String,
    department:String,
    level:Number,
    position:String,
    image:String,
    emailAddress:String,
    phoneNumber:String,
    twitterHandle:String,
    instagramHandle:String,
})
const executiveModel = mongoose.model("executives", executiveSchema)

export default executiveModel