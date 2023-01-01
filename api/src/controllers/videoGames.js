const { Genres, Videogames } = require("../db")
const { API_KEY } = process.env;
const getAllGames = require("../helpers/getAllGames");
const axios = require("axios")
const getVideoGames = async (req, res) => {
  const { name } = req.query;
  try {
    const allGames = await getAllGames();
    if (name) {
      const gamesName = allGames.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      gamesName.length
        ? res.status(200).send(gamesName)
        : res.status(404).send("Game not found");
    } else res.status(200).send(allGames);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getVideoGamesById = async (req, res) => {
  const { id } = req.params;
  if (id.includes("-")) {
    const findId = await Videogames.findOne({
      where: {
        id: id
      },
      include: Genres
    })
    try {
      res.status(200).send([findId])
    } catch (error) {
      res.status(400).send("Error VideoGamesss")
    }
  }else {
    const api =  await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    const data = api.data
        const obj = [{
            id : data.id,
            name: data.name,
            image: data.background_image,
            genres: data.genres.map((e) => e.name),
            description : data.description,
            releasedData: data.released,
            rating : data.rating,
            platforms: data.platforms && data.platforms.map((p) => p.platform.name)
        }]
    res.send(obj)
  }
};

const postVideoGames = async (req, res) => {
  const { image, name, description, rating, platforms, releaseData, genres } = req.body;
  try {
      
    const newVideoGame = await Videogames.create({image,name,description,rating,platforms,releaseData});
    console.log(name);
    let findGenres = await Genres.findAll({
      where: { name: genres}});
    await newVideoGame.addGenres(findGenres);

    res.status(200).send(newVideoGame);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { getVideoGames, getVideoGamesById, postVideoGames };
