const { Router} = require("express")
const {validatePost, validateId} = require("../controllers/validate")
const {getVideoGames,getVideoGamesById,postVideoGames} = require("../controllers/videoGames")
const videoGamesRouter = Router()


videoGamesRouter.get("/", getVideoGames)
videoGamesRouter.get("/:id", validateId, getVideoGamesById)
videoGamesRouter.post("/", validatePost, postVideoGames)


module.exports = videoGamesRouter