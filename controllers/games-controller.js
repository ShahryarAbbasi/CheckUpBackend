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

router.post('/', async(req, res) => {
    try {
        res.json(await allGames.create(req.body))
    } catch (error) {
        console.log(error)
    }
})

router.put('/:gameId', async (req, res) => {
    try {
        res.json(await allGames.findByIdAndUpdate(req.params.gameId, req.body))
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:gameId', async (req, res) => {
    try {
        res.json(await allGames.findByIdAndDelete(req.params.bookId))
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;