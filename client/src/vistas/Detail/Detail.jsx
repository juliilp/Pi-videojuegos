import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../redux/action";
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
                <div>
                  <img src={vg.image} ></img>
                  <h1>{vg.name}</h1>
                  <p>{vg.releasedData}</p>
                  <p>{vg.rating}</p>
                  <p>{vg.genres ? vg.genres : vg.Genres.name}</p>
                  <p>{vg.description}</p>
                  
                  {vg.platforms.map((e) => <span> {e.name}</span> )}
                  
                </div>
            )
          }) : <p>Loading...</p>  
      }
      </div>
  );
};

export default Detail;
