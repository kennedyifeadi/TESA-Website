import mongoose from "mongoose"

const advertSchema = new mongoose.Schema({
    name:String,
    description: String,
    image:String
})

const advertModel = mongoose.model("adverts",advertSchema)

export default advertModel