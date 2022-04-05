const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const locations = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        likes: {type: Number, required: true}

    }
)
module.exports = locations