const { model } = require('mongoose')
const LocationSchema = require('./locations')
const CommentSchema = require('./comments')

const Locations = model('locations', LocationSchema)
const Comment = model('comments', CommentSchema)

module.exports = {
    Locations, Comment
}