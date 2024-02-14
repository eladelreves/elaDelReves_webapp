import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { changePage } from '../../services/changePage';
import './unete.css';
import { UneteIntroSection } from './uneteSections/UneteIntroSection';
import { Ayuda } from './uneteSections/AyudaSection';
import { Register } from './uneteSections/RegistrateSection';

Unete.propTypes = {
    config: PropTypes.object
};

export function Unete({ config }){
    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    useEffect(() => {
        changePage('unete');
    }, []);

    return(
        <>
            <section id='join-intro-container'>
                <UneteIntroSection></UneteIntroSection>
            </section>

            <section>
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
            </section>

            <section>
                <Register></Register>
            </section>
        </>
    )
}