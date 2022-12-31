const { DataTypes, Model } = require("sequelize")

const Genres = (sequelize) => {
    sequelize.define("Genres", {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            limit: 18

        },
        name : {
            type: DataTypes.STRING
        },
        
    },{
        timestamps: false
    })
}

module.exports = Genres