import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { changePage } from '../../services/changePage';
import './unete.css';

Unete.propTypes = {
    config: PropTypes.object
};


export function Unete({ config }){
    useEffect(() => {
        changePage('unete');
    }, []);

    return(
        <>
            <section id='join-intro-container'>
                <h2>¡Démosle la <span className='elaGreen'>vuelta</span>!</h2>
                <p>La <span className='elaGreen'>ELA</span> puede ser <span className='elaGreen'>implacable</span>, pero nuestra <span className='elaGreen'>determinación</span> es <span className='elaGreen'>inquebrantable</span>. <br /> Únete a nuestra causa y enfrentemos juntos este desafío con <span className='elaGreen'>fuerza</span>, <span className='elaGreen'>coraje</span> y <span className='elaGreen'>esperanza</span>.</p>
            </section>
            <section>
                <h2>Ayúdanos</h2>
                <p>
                    Tu ayuda es vital, y tienes dos formas muy sencillas de hacerlo. La primera es registrándote con nosotros, tanto desde esta web como desde la app que puedes descargar en esta misma página, donde podrás subir tus videos realizando el reto de "<span className='elaGreen'>ELA</span> del revés"
                </p>
                <p>
                    La segunda forma es donando una pequeña cantidad a alguna de las dos asociaciones contra el ELA con las que colaboramos, y que se encargan de que tu ayuda llegue a las personas que más lo necesitan para llevar un poco mejor las dificultades de su día a día.
                </p>
            </section>
            <section>
                <h2>¿Cómo ayudas al <span className='elaGreen'>registrarte</span>?</h2>
                <p>Al registrarte en nuestra página web o app móvil, estás apoyando activamente la lucha contra la ELA. Cada registro activará una donación de las empresas colaboradoras a las asociaciones que trabajan en la lucha contra la enfermedad, lo que permitirá financiar proyectos y servicios para mejorar la calidad de vida de las personas afectadas.</p>
            </section>
        </>
    )
}