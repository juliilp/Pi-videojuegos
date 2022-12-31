const getAllGames = require("./getAllGames")

const findVideoGame = async (req,res) => {
    try {
        const {name} = req.query

        const results = await getAllGames({
            where: {
                name
            }
        })
        res.status(200).send(results)
    } catch (error) {
        res.status(400).send("No estoy entrando a la query")
    }
}
    
module.exports = findVideoGame

