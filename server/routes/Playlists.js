const express = require('express')
const router = express.Router()
const {Playlists} =require("../models")

router.get("/",async (req,res)=>{
    const listOfPlaylists = await Playlists.findAll()
    res.json(listOfPlaylists)
})

router.get('/byId/:id', async (req,res)=>{
    const id=req.params.id
    const playlist=await Playlists.findByPk(id)
    res.json(playlist)
})

router.post("/",async (req,res)=>{
    const playlist=req.body
    await Playlists.create(playlist)
    res.json(playlist)
})

module.exports=router