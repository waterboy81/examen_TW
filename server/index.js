const express = require('express')
const app=express()
const cors=require('cors')

app.use(express.json())
app.use(cors())

const db=require('./models')

//Routers
const playlistsRouter=require('./routes/Playlists')
app.use("/Playlists",playlistsRouter)
const songsRouter=require('./routes/Songs')
app.use("/songs",songsRouter)

db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("PORT 3001")
    });
});


 