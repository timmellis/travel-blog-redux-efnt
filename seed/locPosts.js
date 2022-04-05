const db = require('../db')
const { allLocations } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const allLocations = () => {
    let cities = [
        {
            name: "New York City",
            location: "New York City, NY",
            likes: 0
        },

        {
            name: "Los Angeles",
            location: "Los Angeles, CA",
            likes: 0
        },

        {
            name:"Miami",
            location: "Miami, FL", 
            likes: 0
        },

        {
            name: "Chicago",
            Location: "Chicago, IL", 
            likes: 0
        }
    ]
    await allLocations.insertMany(cities)
    console.log('Inserted Locations')

}

// const run = async () => {
//     await allLocations()
//     db.close()
// }

// run()
