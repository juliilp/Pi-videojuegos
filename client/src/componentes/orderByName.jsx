// [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating
import { useDispatch } from "react-redux";
import { filterByName } from "../redux/action";

const OrderByName = () => {
  const dispatch = useDispatch();
  const orderHandler = (e) => {
    e.preventDefault();
    dispatch(filterByName(e.target.value));
  };
  return (
    <div>
      <select defaultValue="default" onChange={(e) => orderHandler(e)}>
        <option defaultValue="default">Choose one option</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  );
};

export default OrderByName;
