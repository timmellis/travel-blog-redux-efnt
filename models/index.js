const { model } = require('mongoose')
const CommentSchema = require('./comment')

const Comment = model('comments', CommentSchema)

module.exports = {
    Comment
}