import PropTypes from 'prop-types';
import { useState } from 'react';

Ayuda.propTypes = {
    config: PropTypes.object
};

export function Ayuda({ config }){
    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    return(
        <>
            <h2>Ayúdanos</h2>
            <p>
                Tu ayuda es vital, y tienes dos formas muy sencillas de hacerlo. La primera es registrándote con nosotros, tanto desde esta web como desde la app que puedes descargar en esta misma página, donde podrás subir tus videos realizando el reto de "<span className='elaGreen'>ELA</span> del revés"
            </p>

            <div id='donate-buttons-container'>
                <div className="donateButtons" style={{backgroundImage: `url(${config.imagePath + 'fundela.jpg'})`}} onMouseEnter={() => setHovered(true)}onMouseLeave={() => setHovered(false)}>
                    <span style={{opacity: hovered ? 1 : 0,}}>Donar</span>
                </div>

                <div className="donateButtons" style={{backgroundImage: `url(${config.imagePath + 'adEla.jpg'})`}} onMouseEnter={() => setHovered2(true)}onMouseLeave={() => setHovered2(false)}>
                    <span style={{opacity: hovered2 ? 1 : 0,}}>Donar</span>
                </div>
            </div>

            <p>
                La segunda forma es donando una pequeña cantidad a alguna de las dos asociaciones contra el ELA con las que colaboramos, y que se encargan de que tu ayuda llegue a las personas que más lo necesitan para llevar un poco mejor las dificultades de su día a día.
            </p>
        </>
    )
}