import './toolbar.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

Toolbar.propTypes = {
    config: PropTypes.object
};

export function Toolbar({ config }){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/" className='selectedLi'>Home</Link></li>
                    <li><Link to="/">La Ela</Link></li>
                    <li><Link to="/">Blog</Link></li>

                    <li><img src={config.imagePath + 'logo_main.png'} alt="" /></li>

                    <li><Link to="/">Únete</Link></li>
                    <li><Link to="/">Del Revés</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}