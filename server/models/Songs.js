
const Playlists = require("./Playlists")

module.exports = (sequelize, DataTypes)=>{

    const Songs=sequelize.define("Songs",{
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        titlu: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        stil:{
            type:DataTypes.STRING,
            allowNull: false
        }
    })

    return Songs
}