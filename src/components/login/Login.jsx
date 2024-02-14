import './login.css'
import PropTypes from 'prop-types';

import { changePage } from '../../services/changePage';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

Login.propTypes = {
    config: PropTypes.object
};

export function Login({ config }){
    useEffect(() => {
        changePage('login');
    }, []);

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return(
        <>
            <div id='login-body'>
                <Link id='backHome' to="/" className='icon-home1'></Link>

                <div id='login-container'>
                    <form id='login-form' action="">
                        <h2>Login</h2>
                        <label htmlFor="loginEmail">Email</label>
                        <input id='loginEmail' name='loginEmail' type="text" />

                        <label htmlFor="loginPassword">Contraseña</label>
                        <div id='loginPasswordDiv'>
                            <input
                                id='loginPassword'
                                name='loginPassword'
                                type={isVisible ? 'password' : 'text'}
                            />
                            <span
                                className={isVisible ? 'icon-remove_red_eye' : 'icon-visibility_off'}
                                onClick={toggleVisibility}
                            />
                        </div>

                        <Link>¿Has olvidado la contraseña?</Link>

                        <button type='submit'>Enviar</button>
                    </form>

                    <div id='login-logo'>
                        <img src={config.imagePath + 'logo_all_white.png'} alt="" />
                        <span id='createAccount'>¿No tienes cuenta? <br /><br /> <a href="">Crear cuenta</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}