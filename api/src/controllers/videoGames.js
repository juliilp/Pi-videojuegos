const { Genres, Videogames } = require("../db")
const getAllGames = require("../helpers/getAllGames");

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
  try {
    const allGames = await getAllGames();
    const GameId = allGames.filter((e) => e.id.toString() === id.toString());
    res.status(200).send(GameId);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const postVideoGames = async (req, res) => {
  const { image, name, description, rating, platforms, releaseData, genres } = req.body;
  try {
    const newVideoGame = await Videogames.create({image,name,description,rating,platforms,releaseData});

    let findGenres = await Genres.findAll({
      where: { name: genres}});
    await newVideoGame.addGenres(findGenres);

    res.status(200).send(newVideoGame);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { getVideoGames, getVideoGamesById, postVideoGames };
