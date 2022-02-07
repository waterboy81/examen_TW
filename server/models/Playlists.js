module.exports = (sequelize, DataTypes)=>{

    const Playlists=sequelize.define("Playlists",{
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        descriere: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        data: {
            type:DataTypes.DATE,
            allowNull: false,
        },
    })

    Playlists.associate=(models)=>{
        Playlists.hasMany(models.Songs),{
            onDelete:"cascade",
        }

    }
    return Playlists
}