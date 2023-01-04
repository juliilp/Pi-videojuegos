import {
  ALL_GAMES,
  ALL_GENRES,
  FILTER_BY_NAME,
  FILTER_BY_INPUT,
  GET_DETAILS,
  CREATE_VIDEOGAME,
  FILTER_BY_GENRE,
FILTER_BY_VIDEOGAMES,
FILTER_BY_RATING,
} from "./action";

const initialState = {
  allGames: [],
  allGamesOrigin:[],
  allGamesElse: [],
  allGamesFilter: [],
  allGenres:[],
  GenresDB:[],
  GenresApi:[],
  gameDetail:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_GAMES:
      return {
        ...state,
        allGames: action.payload,
        allGamesOrigin: action.payload,
        allGamesElse: action.payload
      };
    case ALL_GENRES:
      return {
        ...state,
        allGenres: action.payload,
        GenresDB: action.payload,
        GenresApi : action.payload
      };
    case FILTER_BY_VIDEOGAMES:
      const createdFilter =
        action.payload === 'db'
          ? state.allGamesOrigin.filter((e) => e.createinDb)
          : state.allGamesOrigin.filter((e) => !e.createinDb);
      return {
        ...state,
        allGames:
          action.payload === 'all' ? state.allGamesOrigin : createdFilter,
      }
    case FILTER_BY_NAME:
      if (action.payload === "asc") {
        return {
          ...state,
          allGames: state.allGames.sort((a, b) => {
            return a.name.localeCompare(b.name);
          }),
        };
      } else if (action.payload === "desc") {
        return {
          ...state,
          allGames: state.allGames.sort((a, b) => {
            return b.name.localeCompare(a.name);
          }),
        };
      }
      else if (action.payload === "all") {
        return {
          ...state,
          allGames: state.allGamesElse,
        };
      }
      else {
        return {
          ...state
        }
      }
      case FILTER_BY_RATING:
        if (action.payload === 'asc') {
          return {
            ...state,
            allGames: state.allGames.sort((a, b) => {
              return a.rating - b.rating;
            }),
          };
        } else if (action.payload === 'desc') {
          return {
            ...state,
            allGames: state.allGames.sort((a, b) => {
              return b.rating - a.rating;
            }),
          };
        } else {
          return {
            ...state,
            allGames: state.allGamesOrigin,
          };
        }
    case FILTER_BY_INPUT:
      return {
        ...state,
        allGames: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        gameDetail: action.payload,
      };
    case CREATE_VIDEOGAME:
      return {
        ...state,
        allGames: [...state.allGamesOrigin, action.payload],
      };
      case FILTER_BY_GENRE :
        
        const main = 
        action.payload === 'All' ? 
        state.allGamesOrigin :
        state.allGamesOrigin.filter((e) => { 
          let generosString = ""
            console.log(e.Genres);
            if(e.Genres) {
              for (let i = 0; e.Genres.length > i ; i++) {
                generosString += e.Genres[i].name
        }
            }
            console.log(generosString); 
          return e.genres ? e.genres.includes(action.payload) : generosString.includes(action.payload);})
        return{
          ...state,
          allGames: main
        }
    default:
      return {
        ...state,
        allGenres: action.payload,
      };
  }
};

export default reducer;
