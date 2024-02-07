import './toolBar.css'
import { Link } from 'react-router-dom'
import LogoEla from './../../../assets/media/img/landingPage/LogoEla.png'; 

export function Toolbar(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/" className='selectedLi'>Inicio</Link></li>
                    <li><Link to="/">La Ela</Link></li>
                    <li><Link to="/">Blog</Link></li>

                    <li><img src={LogoEla} alt="" /></li>

                    <li><Link to="/">Únete</Link></li>
                    <li><Link to="/">Del Revés</Link></li>
                    <li><Link to="/">Extra</Link></li>
                </ul>
            </nav>
        </header>
    )
}