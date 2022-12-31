const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Genres } = require("../db");

// const api = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`,{ headers: { "accept-encoding": "*" } })
const getGenres = async (req, res) => {
    
    // Agarro todos los géneros, Si existe alguno, significa que están todos, si no, voy al else para crearlos, ésto lo hice para que no se me repitan, ya que se me creaban infinitamente 
    
    const gdb = await  Genres.findAll()
    if(gdb.length) {
      return res.json(gdb)
    }
    else {
      const api = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`,{ headers: { "accept-encoding": "*" } })
      const genres = api.data.results
      genres.forEach(async g => {
        await Genres.findOrCreate({
          where:{
            name: g.name
          }
        })
      })
      const screen = genres.map((g) => {
        return {
          id : g.id,
          name : g.name
        }
      })
      res.status(200).send(screen)
    }
};







const postGenres = async (req,res) => {
  const {name} = req.body

    try {
      const newGenre = await Genres.create({name})
      res.status(200).send(newGenre)
    } catch (error) {
      res.status(400).send(error.message)
    }
}

module.exports = {getGenres, postGenres};
