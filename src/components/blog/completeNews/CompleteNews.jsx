import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { changePage } from '../../../services/changePage';

import './completeNews.css'

CompleteNews.propTypes = {
    config: PropTypes.object
};

export function CompleteNews({ config }) {
    useEffect(() => {
        changePage('blog');
    }, []);

    return(
        <>
            <article id='complete-news-container'>
                <img src={config.imagePath + 'news/matchDay/matchDay_3.jpg'} alt="Dinero recaudado" />

                <p>Los Alumnos de 2° de Marketing y publicidad, dieron apertura a la campaña solidaria <span className='elaGreen'>ELA del revés</span> con un torneo en el que participaron alumnos y profesores bajo la premisa <span className='elaGreen'>Mete un gol por la ELA</span>. Se vivió una jornada cargada de emociones, sorpresas y gratas participaciones.</p>

                <div className='image-paragraph'>
                    <p>
                        Es con gran emoción y gratitud que nos dirigimos a ustedes hoy para expresar nuestra profunda apreciación por el apoyo y la participación en el torneo de futsal benéfico que organizamos para recaudar fondos para la investigación de la <span className='elaGreen'>Esclerosis Lateral Amiotrófica (ELA)</span>. Gracias a su generosidad, compromiso y entusiasmo, hemos logrado un gran paso hacia nuestro objetivo de mejorar la calidad de vida de quienes padecen esta enfermedad y, en última instancia, encontrar una cura.
                        <br /><br /><br />
                        El evento fue un gran éxito, gracias a la colaboración de todos ustedes. Desde los equipos participantes y sus jugadores, hasta los patrocinadores y voluntarios, cada uno de ustedes ha contribuido de manera significativa a esta noble causa. La energía y la pasión que se sintieron en el torneo fueron verdaderamente inspiradoras, y estamos seguros de que este es solo el comienzo de un esfuerzo continuo y creciente para hacer una diferencia en la lucha contra la ELA.
                    </p>

                    <img src={config.imagePath + 'news/matchDay.png'} alt="Equipo de marketing" />
                </div>

                <div className='image-paragraph'>
                    <img src={config.imagePath + 'news/matchDay/matchDay_2.jpg'} alt="" />
                    <p>
                        <h3>¡Felicidades a nuestros afortunados ganadores! 🎉🎁</h3>
                        <br />
                        Estamos encantados de anunciar que los ganadores de nuestros sorteos durante el torneo de futsal benéfico fueron seleccionados. Agradecemos a todos los participantes por su generosidad y apoyo a la causa de la ELA. 
                        <br /><br />
                        Los fondos recaudados serán de gran ayuda para financiar la investigación y el apoyo a las personas afectadas por esta enfermedad. ¡Gracias a todos por ser parte de este gran esfuerzo!
                    </p>
                </div>
            </article>
        </>
    )
}