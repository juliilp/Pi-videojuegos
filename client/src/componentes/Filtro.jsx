// [ ] Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros
import { useDispatch } from "react-redux";
import { filterCreate } from "../redux/action";

const Filtro = () => {
  const dispatch = useDispatch();
  const filterHandlers = (e) => {
    dispatch(filterCreate(e.target.value));
  };

  return (
    <div>
      <select onChange={(e) => filterHandlers(e)}>
        <option>All</option>
        <option>Created for me</option>
        <option>Api-key</option>
      </select>
    </div>
  );
};
export default Filtro;
