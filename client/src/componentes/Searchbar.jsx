// [ ] Input de búsqueda para encontrar videojuegos por nombre

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { filterInput } from "../redux/action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handlerInput = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handlerSubmit = (e) => {
    dispatch(filterInput(name));
  };

  const inputStyles = {
    width: "120px",
    padding: "7px 5px",
    borderRadius: "5px",
    marginLeft: "5px",
    textAlign : "center"

  }

  const buttonStyles = {
    padding: "8px 15px",
    borderRadius: "5px",
  }

  return (
    <div>
      <input style={inputStyles}
        onChange={(e) => handlerInput(e)}
        placeholder="Find a videogame"
        type="text"
      />
      <button style={buttonStyles}  type="submit" onClick={(e) => handlerSubmit(e)}>Search </button>
    </div>
  );
};

export default SearchBar;
