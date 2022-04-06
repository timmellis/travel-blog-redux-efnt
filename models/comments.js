const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    location: { type: Schema.Types.ObjectId, ref: 'locations' },
    comment: { type: String, required: true },
    userName: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Comment
