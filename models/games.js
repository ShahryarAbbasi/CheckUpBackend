const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)

const gamesSchema = new mongoose.Schema({
    location: {type: String, required: true},
    time: {type: String, required: true},
    players: {type: Number, required: true}
})

const Game = mongoose.model('Game', gamesSchema)

module.exports = Game

