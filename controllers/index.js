const { Comment, Locations }  = require('../models')


const createComm = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json(comment);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllComms = async (req, res) => {
    try {
        const comments = await Comments.find()
        return res.status(200).json( comments )
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllLocs = async (req, res) => {
    try {
        const locations = await Locations.find()
        return res.status(200).json( locations )
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getLocById = async (req, res) => {
    try {
        const { id } = req.params;
        const location = await Locations.findById(id)
        if (location) {
            return res.status(200).json( location );
        }
        return res.status(404).send('Location with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createLoc = async (req, res) => {
    try {
        const location = await new Locations(req.body)
        await location.save()
        return res.status(201).json( location );
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


module.exports = {
    createComm,
    getAllLocs,
    getLocById,
    createLoc,
    getAllComms
}