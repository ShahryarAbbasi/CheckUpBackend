const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)

const playerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    game: {type: mongoose.Types.ObjectId, ref: 'Game', required: true}
});

const Player = mongoose.model('Player',  playerSchema)

module.exports = Player
