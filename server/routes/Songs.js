const express=require("express");
const router=express.Router()
const {Songs}=require("../models")

router.get('/:playlistId', async (req,res)=>{
    const playlistId=req.params.playlistId
    const songs=await Songs.findAll({where:{
       PlaylistId:playlistId 
    }})
    res.json(playlist)
})


module.exports=router