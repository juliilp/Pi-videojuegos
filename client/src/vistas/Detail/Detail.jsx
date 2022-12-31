import { Link, useParams } from "react-router-dom";
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
  const getDetails = useSelector((state) => state.gameDetail);
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  return (

    <div>
      {
      getDetail.length ? (
        getDetails.map((vg) => {
          return (
            <div>
              <h1>{vg.name}</h1>
              <img src={vg.image} alt="Image Not Found" />
              <h3>{vg.rating}</h3>
              <h3>{vg.platforms}</h3>
              <h3>{vg.released}</h3>
              <h4>Generos:  {vg.genres ? vg.genres : vg.Genres.map((e) => `  ${e.name}  ` )}</h4>
              <Link exact to="/home"> <button>Volver</button> </Link>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
