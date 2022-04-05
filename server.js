const express = require('express')
const { locations } = require('./models')
const routes = require('./routes')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use('/api', routes)
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})