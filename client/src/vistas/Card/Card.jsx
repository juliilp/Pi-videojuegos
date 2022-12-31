// [ ] Área donde se verá el listado de videojuegos. Deberá mostrar su:
// Imagen
// Nombre
// Géneros
import { Link } from "react-router-dom";
import styles from './Card_modules.css'
const Card = ({ image, name, genre, id, rating }) => {
  return (
    <div className="card" >

      <img className="image"  src={image ? image : "Image not exists"} width="100px" height="100px" />
      <div className="cardinfo">
      <h3 className="name" >{name ? name : "name not exists" }</h3>
      <p className="genre" >{genre ? genre : "Genre not exists"}</p>
      <p className="rating" >{rating ? rating  :"rating not exists"}</p>
      </div>
      <Link to={`/home/${id}`}> <button className="button" >Detail</button> </Link>
      
    </div>
  );
};

export default Card;
