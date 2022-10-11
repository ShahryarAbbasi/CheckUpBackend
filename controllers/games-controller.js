const express = require("express");
const router = express.Router();

const allGames = require('../models/games')

router.get('/', async (req, res) => {
    try {
        const games = await allGames.find({})
        res.json(books)
    } catch (error) {
        console.log(error)
    }
})

router.get('/:gameid', async (req, res) => {
    try{
        res.json(await allGames.findById(req.params.gameid))
    } catch (error) {
        console.log(error)
    }
})