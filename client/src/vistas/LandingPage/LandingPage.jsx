import {Link} from 'react-router-dom'
import styles from './LandingPage.modules.css'
const LandingPage = () => {
    return (
        <div className='container' >
            <h1 className='title_landing' > PROYECTO INDIVIDUAL VIDEOGAMES</h1>
            <h3 className='name_landing' >Julian <br/> <span className='apellido' >Lopez Padua</span> </h3>
            <Link to='/home' ><button className='boton_landing'>Ir a Inicio</button></Link>
            {/* <div class="pacman">
               <div class="pacman-top"></div>
                   <div class="pacman-bottom"></div>
               <div class="feed"></div>
             </div> */}

            
        </div>
    )
}

export default LandingPage