const mongoose = require('mongoose')
const technologySchema = new mongoose.Schema({
    image:String,
    title:String,
    description:String,
    link: String
})
const technologyModel = mongoose.model("technologies", technologySchema)
module.exports=technologyModel