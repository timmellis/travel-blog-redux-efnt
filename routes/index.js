const { Comment }  = require('../models')


const createComm = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json({
            comment
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllComms = async (req, res) => {
    try {
        const comments = await Comment.find()
        return res.status(200).json({ comments })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCommById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Comment.findById(id)
        if (comment) {
            return res.status(200).json({ comment });
        }
        return res.status(404).send('Comment with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createComm,
    getAllComms,
    getCommById
}