const { Router } = require('express');
const videoGamesRouter = require("./videoGamesRouter")
const genresRoutes = require("./genresRouter")
const router = Router();

router.use("/videogames", videoGamesRouter)
router.use("/genres", genresRoutes)


module.exports = router;
