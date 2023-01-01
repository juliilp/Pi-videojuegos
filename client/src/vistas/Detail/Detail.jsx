import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../redux/action";
import s from './Detail.css'
// Ruta de detalle de videojuego: debe contener

// [ ] Los campos mostrados en la ruta principal para cada videojuegos (nombre, imagen, y géneros)
// [ ] Descripción X
// [ ] Fecha de lanzamiento ✓
// [ ] Rating ✓
// [ ] Plataformas ✓
// [ ] name ✓
// [ ] imagen ✓
// [ ] generos ✓

const Detail = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const DetailState = useSelector((state) => state.gameDetail);
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);
  console.log(DetailState)


  return (
      <div>
        {DetailState ? 
          DetailState.map((vg) => {
            
            return (
              <div className="container_detail">
                <div className="card_detail">
                  <img src={vg.image} className="image_detail" ></img>
                  
                  <p>{vg.releasedData}</p>
                  <p>Rating: {vg.rating}</p>
                  <p> Genres: {vg.genres ? vg.genres : vg.Genres.map((g) => `${g.name} | `)}</p>
                  <p> Platforms:  {vg.platforms + " |   "}</p>
                  <br/>
                  <Link to='/home' ><button className="button_detail" >Volver</button></Link>
                </div>
                <div> 
                <div className="card_detail2" >
                    <h1>{vg.name }</h1>
                  <p>{vg.description.replace(/<[^>]*>?/g,'')}</p>
                  </div>
                </div>
                </div>
            )
          }) : <p>Loading...</p>  
      }
      </div>
  );
};

export default Detail;