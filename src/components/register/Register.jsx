import './register.css'
import PropTypes from 'prop-types';

import { changePage } from '../../services/changePage';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

Register.propTypes = {
    config: PropTypes.object
};

export function Register({ config }){
    useEffect(() => {
        changePage('register');
    }, []);

    const [isVisible, setIsVisible] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };

    return(
        <>
            <div id='login-body'>
                <Link id='backHome' to="/" className='icon-home1'></Link>
                
                <div id='login-container' style={{ height: '600px' }}>
                    <div id='login-logo' style={{ height: '600px' }}>
                        <img src={config.imagePath + 'logo_all_white.png'} alt="" />
                        <span id='createAccount'>¿Ya tienes cuenta? <br /><br /> <Link to='/login'>Iniciar sesión</Link></span>
                    </div>

                    <form id='login-form' style={{ height: '600px' }}>
                        <h2>Register</h2>
                        <label htmlFor="loginEmail">Nombre de Usuario</label>
                        <input id='loginEmail' name='loginEmail' type="text" />
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
                        <label htmlFor="loginPasswordConfirm">Repetir Contraseña</label>
                        <div id='loginPasswordDivConfirm'>
                            <input
                                id='loginPasswordConfirm'
                                name='loginPasswordConfirm'
                                type={isVisible2 ? 'password' : 'text'}
                            />
                            <span
                                className={isVisible2 ? 'icon-remove_red_eye' : 'icon-visibility_off'}
                                onClick={toggleVisibility2}
                            />
                        </div>

                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}