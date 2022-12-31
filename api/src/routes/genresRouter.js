const { Router } = require("express")
const {getGenres, postGenres  } = require("../controllers/Genres")

const genresRoutes =  Router()


genresRoutes.get("/", getGenres)
genresRoutes.post("/",postGenres)


module.exports = genresRoutes