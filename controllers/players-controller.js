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

router.get('/:gameId', async (req, res) => {
    try {
        const players = await allPlayers.find({game: req.params.gameId})
        res.json(players)
    } catch (error) {
        console.log(error)
    }
})

router.get('/player/:playerId', async (req, res) => {
    try {
        const player = await allPlayers.findById(req.params.playerId)
        res.json(player)
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        res.json(await allPlayers.create(req.body))
    } catch (error) {
        console.log(error)
    }
})

router.put('/player/:playerId', async (req, res) => {
    try {
        res.json(await allPlayers.findByIdAndUpdate(req.params.playerId, req.body))
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:playerId', async (req, res) => {
    try {
        res.json(await allPlayers.findByIdAndDelete(req.params.playerId))
    } catch (error) {
        console.log(error)
    }
})