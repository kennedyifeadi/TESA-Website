import mongoose from "mongoose"

const eventImgSchema = new mongoose.Schema({
    event:String,
    image:String,
})
const eventImgModel = mongoose.model("eventImage", eventImgSchema)
export default eventImgModel