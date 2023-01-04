import { Link } from "react-router-dom"
import  style from './NotFound_modules.css'
const NotFound = () => {
    return (
        <div className="container_notfound" >
            <h1 className="tittle_notfound" >Error 404: Página no encontrada</h1>
            <Link to='/home' ><button className="button_notfound" >Volver al menu principal</button> </Link>
        </div>
    )
}
export default NotFound