import express from "express"
const app = express()


app.get("/", (req,res) => {
    res.send({message: "cool"})
})

app.listen(4000, (req,res) => {
    console.log("server running on port 4000")
})