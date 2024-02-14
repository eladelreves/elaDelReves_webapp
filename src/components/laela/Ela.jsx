import { useEffect } from 'react';
import './ela.css';
import PropTypes from 'prop-types';
import { changePage } from '../../services/changePage';

Ela.propTypes = {
    config: PropTypes.object
};


export function Ela({ config }){
    useEffect(() => {
        changePage('ela');
    }, []);

    return(
        <>
            <section id='intro-container'>
                <h1>La Enfermedad del <span className='elaGreen'>ELA</span></h1>
                <p>
                    La esclerosis lateral amiotrófica (<span className='elaGreen'>ELA</span>) es una enfermedad degenerativa que afecta a las células nerviosas encargadas del control muscular. A medida que estas células se van dañando y muriendo, los músculos del cuerpo se debilitan y atrofian, lo que puede llevar a problemas de movilidad, habla, respiración y alimentación.
                </p>
                <p>
                    No se sabe con certeza qué causa la <span className='elaGreen'>ELA</span>, pero se cree que una combinación de factores genéticos y ambientales puede estar involucrada. A menudo, la enfermedad comienza con debilidad en las manos, los brazos, los pies o las piernas, y puede avanzar lentamente o rápidamente.
                </p>
            </section>

            <section id='ela-symptoms'>
                <h2>¿Cuáles son los síntomas del <span className='elaGreen'>ELA</span>?</h2>
                <p>
                    Los síntomas incluyen debilidad muscular, dificultad para hablar y tragar, problemas respiratorios, calambres musculares y espasmos en brazos, hombros y lengua, llanto, risa o bostezos inapropiados y cambios cognitivos y de comportamiento.
                </p>
                <div id='video-container'>
                    <iframe src="https://www.youtube.com/embed/tFUWFustQ5w?si=YeikcxSMIjC1dVM9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum repellendus perspiciatis dignissimos pariatur modi laudantium quo, illo harum vitae consectetur sequi aspernatur repudiandae laboriosam voluptatem, quas cum voluptas accusamus cumque mollitia nemo tenetur facere, culpa sapiente. Ea aperiam aspernatur obcaecati ab architecto quas repellendus, in veniam soluta nostrum, eius illo praesentium ad explicabo asperiores odio ut assumenda, itaque consectetur sunt dolorum. Officia, incidunt praesentium! Nulla et nemo reprehenderit fugiat excepturi incidunt nobis provident architecto. Quae dolorum exercitationem iste accusantium quos.</p>
                </div>
            </section>

            <section id='ela-origin'>
                <h2>¿Cuándo se presenta la <span className='elaGreen'>ELA</span>?</h2>
            </section>
        </>
    )
}