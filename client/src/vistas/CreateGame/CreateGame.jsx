import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { createVideogame, getAllGenres} from "../../redux/action";
import { useHistory, Link} from "react-router-dom";
import styles from './createGame.css'
const CreateGame = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.allGenres);

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);


  const [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    rating: "",
    platforms: "",
    releaseData: "",
    createGenre: "",
    genres: [],
  });

  const [errorsForm, setErrorsForm] = useState({});
  const [errorBtn, setErrorBtn] = useState(errorsForm.length < 1 ? false : true)

  const validate = (input) => {
    let errors = {}

    if (!input.name) {
      errors.name = "Name is required"
    }
    else if (!/^[a-zA-Z0-9-() .]+$/.test(input.name)) {
      errors.name = "Only accepts letters, numbers, mid dashes and parenthesis!"
    }

    if (input.image.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.image)) {
      errors.image = "Invalid URL!"
  }

    if (!input.description) {
        errors.description = "Description is required!"
    }

    if (!input.rating) {
      errors.rating = "Rating is required"
  } else if (input.rating > 5) {
      errors.rating = "Rating must be less than 5"
  } else if (input.rating < 0) {
      errors.rating = "Rating cannot be negative"
  }

  return errors
  }


  const submitHandler = (e) => {
    e.preventDefault();
    setErrorsForm(validate(input))
    dispatch(createVideogame(input));
    setInput({
      name: "",
      image: "",
      description: "",
      rating: "",
      platforms: "",
      releaseData: "",
      createGenre: "",
      genres: [],
    });
    alert("Game succesfully created!");
    history.push("/home");
  };

  const handleChange = (e) => {
    console.log(input);
    setErrorsForm(validate(input))
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      
    });

  }

  const handleSelect = (e) => {
    console.log(input.genres);
    setInput({
      ...input,
      genres : [...input.genres, e.target.value]
      
    })
  }

  return (

    <div className="container_createGame">
      <form  className="createForm"  >
              <h1 className="create_title" >Create your VideoGame!</h1>
              <div className="create_name">
              <label>Name:</label>
        <input className="input_create_name" value={input.name} name="name" onChange={handleChange} required />
              </div>
          <div className="create_image">
          <label>Imagen:</label>
        <input className="input_create_image" value={input.image} name="image" onChange={handleChange} />
          </div>
          <div className="create_rating">
          <label>Rating:{input.rating}</label>
        <input className="input_create_rating"   type='range' value={input.rating} name="rating" onChange={handleChange} min='o' max='5'  pattern="[0-9]+"  />
          </div>
        <div className="create_platforms">
        <label>Platforms:</label>
        <input className="input_create_platforms"   value={input.platforms} name="platforms" onChange={handleChange}  required/>
        </div>
        
          <div className="create_releaseData">
          <label>Release Data:</label>
        <input  className="input_create_releaseData"  value={input.releaseData} name="releaseData" onChange={handleChange} />
          </div>
          <div className="create_description">
          <label className="label_description" >Description:</label>
        <textarea  className="input_create_description" value={input.description} name="description" onChange={handleChange} required />
          </div>
          <div className="create_genres">
          <label>Genres:</label>
        <select onChange={handleSelect} >
        {
        genres.length ?
        
        genres.map((e) => {
          return (
            <option value={genres.name} name={"genres"} >{e.name}</option>
          )
        }) :
          <option>Loading...</option>
      }
        </select>
          </div>

        <div className="li_container">
        <ul className="create_li" >{input.genres.map((e) => <li>{e}</li>)}</ul>
        </div>
        


<div className="buttons_create">
      <Link to='/home' ><button className="button_volver" >Volver</button></Link>
        <button className="button_submit"  onClick={submitHandler} disabled={!input.name || !input.description || !input.rating || input.rating > 5} >Create VideoGame!!</button>
      </div>
<div className="createError">
        {errorsForm.name ? <h4><small>{errorsForm.name}</small></h4> : false}
        {errorsForm.description ? <h4><small>{errorsForm.description}</small></h4> : false}
        {errorsForm.rating ? <h4><small>{errorsForm.rating}</small></h4> : false}
        </div>

      </form>



    </div>
  );
};

export default CreateGame;
