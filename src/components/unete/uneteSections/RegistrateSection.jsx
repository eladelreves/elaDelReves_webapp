import PropTypes from 'prop-types';

Register.propTypes = {
    config: PropTypes.object
};

export function Register(){
    return(
        <>
            <h2>¿Cómo ayudas al <span className='elaGreen'>registrarte</span>?</h2>
            <p>Al registrarte en nuestra página web o app móvil, estás apoyando activamente la lucha contra la ELA. Cada registro activará una donación de las empresas colaboradoras a las asociaciones que trabajan en la lucha contra la enfermedad, lo que permitirá financiar proyectos y servicios para mejorar la calidad de vida de las personas afectadas.</p>
        </>
    )
}