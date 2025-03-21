import mongoose from "mongoose"

const sponsorSchema = new mongoose.Schema({
    image: String,
    name:String,
    position:String,
    text:String
})

const sponsorModel = mongoose.model("sponsor", sponsorSchema)
export default sponsorModel