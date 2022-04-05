const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        Location: Location_id,
        comment: { type: String, required: true },
        userName: {type: String, required: true }
    },
    { timestamps: true }
)

module.exports = Comment