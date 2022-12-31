require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogames, Genres } = require("../db");

const apiData = async () => {
  try {
    const apiGames = [];
    for (let i = 1; i <= 5; i++) {
      let api = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`,
        { headers: { "accept-encoding": "*" } }
      );
      api.data.results.map((e) => {
        apiGames.push({
          id: e.id,
          name: e.name,
          image: e.background_image,
          rating: e.rating,
          released: e.released,
          platforms: e.platforms.map((p) => p.platform.name).join(", "),
          genres: e.genres.map((g) => g.name).join(", "),
          description: e.description
        });
      });
    }
    return apiGames;
  } catch (error) {
    console.log({ error: error.message });
  }
};

// const apiData = async () => {
//   const apiGames = []

//   for (let i=1; i <=5 ; i++) {
//     const api = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`,{headers: {"accept-encoding": "*"}})
//   }
// }

const VideoGamesDB = async () => {
  const result = await Videogames.findAll({
    include: {
      model: Genres,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return result;
};

const getAllGames = async () => {
  const apiGames = await apiData();
  const dbGames = await VideoGamesDB();
  return [...dbGames, ...apiGames];
};

module.exports = getAllGames;
