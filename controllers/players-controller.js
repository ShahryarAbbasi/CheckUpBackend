const express = require("express");
const router = express.Router();

const allPlayers = require('../models/players')

router.get('/', async (req, res) => {
    try {
        const players = await allPlayers.find({})
        res.json(players)
    } catch (error) {
        console.log(error)
    }
})

router.get('/:gameId', (req, res) => {
    try {
        const players = await allPlayers.find({game: req.params.gameId})
        res.json(players)
    } catch (error) {
        console.log(error)
    }
})

