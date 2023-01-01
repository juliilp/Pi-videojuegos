import axios from "axios";

export const ALL_GAMES = "ALL_GAMES";
export const ALL_GENRES = "ALL_GENRES";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_INPUT = "FILTER_BY_INPUT";
export const GET_DETAILS = "GET_DETAILS";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE"
export const FILTER_BY_VIDEOGAMES = "FILTER_BY_VIDEOGAMES"
export const GENRES_FILTER = "GENRES_FILTER"
export const FILTER_BY_RATING = "FILTER_BY_RATING"


// export const getAllGames = () => {
//   return function (dispatch) {
//     fetch("http://localhost:3001/videogames")
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch({
//           type: ALL_GAMES,
//           payload: data,
//         });
//       });
//   };
// };

export const getAllGames = () => {
  return async function(dispatch) {
    const api = await axios("http://localhost:3001/videogames")
    const results = api.data
    dispatch({
      type: ALL_GAMES,
      payload: results
    })
  }
}


// export const getAllGenres = () => {
//   return function (dispatch) {
//     fetch("http://localhost:3001/genres")
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch({
//           type: ALL_GENRES,
//           payload: data,
//         });
//       });
//   };
// };

export const getAllGenres = () => {
  return async function(dispatch) {
    const api = await axios("http://localhost:3001/genres")
    const results = api.data
    dispatch({
      type: ALL_GENRES,
      payload: results
    })
  }
}


export const filterByName = (payload) => {
  return {
    type: FILTER_BY_NAME,
    payload,
  };
};

export const filterByRating = (payload)=> {
  return function(dispatch) {
      dispatch({
        type: FILTER_BY_RATING,
        payload
      })
  }
}


// export const filterInput = (name) => {
//   return function (dispatch) {
//     fetch(`http://localhost:3001/videogames?name=${name}`)
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({
//           type: FILTER_BY_INPUT,
//           payload: data,
//         });
//       });
//   };
// };

export const filterInput = (name) => {
  return async function(dispatch) {
    const api = await axios(`http://localhost:3001/videogames?name=${name}`)
    const data= api.data
    dispatch({
      type: FILTER_BY_INPUT,
      payload: data
    })
  }
}


// export const getDetail = (id) => {
//   return function (dispatch) {
//     fetch(`http://localhost:3001/videogames/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch({
//           type: GET_DETAILS,
//           payload: data
//         });
//       });
//   };
// };

export const getDetail = (id) => {
  return  async function (dispatch) {
    const api =  await axios(`http://localhost:3001/videogames/${id}`)
    const results = api.data
    dispatch({
      type: GET_DETAILS,
      payload: results
    })
  }
}

export const createVideogame = (videogame) => {
  return async function (dispatch) {
    const newVideogame = await axios.post(
      "http://localhost:3001/videogames/",
      videogame
    );
    return dispatch({
      type: CREATE_VIDEOGAME,
      payload: newVideogame.data,
    });
  };
};


// export const filterByGenre = async (payload) => {
//   const api = await axios.get("http://localhost:3001/videogames")
//   const data = api.data.filter((e) => e.genres)
//   return async function(dispatch) {
//     dispatch({
//       type : FILTER_BY_GENRE,
//       payload : data
//     })
//   }
// }

export const FilterByApiyDB = (payload) => {
  return function(dispatch) {
    dispatch({type: FILTER_BY_VIDEOGAMES, payload })
  }
}



// export const actionFilterGenres = (payload) => {
//   return async function async (dispatch) {
//     const api = await axios.get("http://localhost:3001/videogames")
//     const filtros = api.data.filter((a) => a.createinDb)
//     const filtros2= filtros.map((e) => e.Genres[0].name)
//     const filtrosapi = api.data.filter((e) => e.genres)
//     const filtrosdb = api.data.filter((e) => e.Genres)
//     console.log(filtrosapi);           
//     const data = api.data.filter((e) => e.genres ? e.genres.includes(payload) :  e.Genres[0].name.includes(payload))
//     dispatch({
//       type: FILTER_BY_GENRE,
//       payload: data
//     })
//   }
// }

export const actionFilterGenres = (payload) => {
  return function(dispatch) {
    dispatch({
      type: FILTER_BY_GENRE,
      payload
    })
  }
}