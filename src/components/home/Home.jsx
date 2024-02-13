import { useEffect, useRef } from 'react';
import './home.css';
import PropTypes from 'prop-types';
import { changePage } from '../../services/changePage';

Home.propTypes = {
    config: PropTypes.object
};

export function Home({ config }) {
    const logoRef = useRef(null);
    const elementsRef = useRef([]);
    const h2Ref = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
        changePage('home');
    }, []);

    const handleArrowClick = () => {
        const introContainer = document.getElementById('introContainer');
        introContainer.scrollIntoView({ behavior: 'smooth', block: 'start'});
    };

    const setRef = (element) => {
        if (element) elementsRef.current.push(element);
    };

    useEffect(() => {
        const logo = logoRef.current;
        const h2 = h2Ref.current;
        const arrow = arrowRef.current;

        const handleScroll = () => {
            const logoRect = logo.getBoundingClientRect();
            const containerHeight = document.getElementById('stickyContainer').clientHeight;
        
            // Calcular la posición vertical absoluta del logo en el contenedor
            const logoYPosition = logoRect.top + window.scrollY - document.getElementById('stickyContainer').getBoundingClientRect().top;
        
            // Calcular la rotación basada en la posición vertical absoluta del logo en el contenedor
            const rotation = (logoYPosition / containerHeight) * 250;
        
            // Aplicar la rotación al logo
            logo.style.transform = `rotateX(${rotation}deg)`;

            const elements = elementsRef.current;

            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                const threshold = 0.5;
        
                return (
                    rect.top + rect.height * threshold >= 0 &&
                    rect.bottom - rect.height * threshold <= windowHeight
                );
            }
        
            elements.forEach((element) => {
                if (isElementInViewport(element)) {
                    element.classList.add('animated');
                }
            });
            
            // Calcular la opacidad del h2 basada en la rotación del logo
            const opacity = 1 - (rotation / 360); // 360 grados es una vuelta completa
            h2.style.opacity = opacity < 0 ? 0 : opacity; // Asegurar que la opacidad no sea negativa
            arrow.style.opacity = opacity < 0 ? 0 : opacity;

        };

        window.addEventListener('scroll', handleScroll);

        handleScroll(); // Asegurar que los elementos visibles al cargar también se animen

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id='stickyContainer'>
                <div>
                    <img ref={logoRef} src={config.imagePath + 'logo_main.png'} alt="Logo de ELA"/>
                    <h2 ref={h2Ref}>Sigue bajando para ayudarnos!</h2>
                    <div ref={arrowRef} id="arrow" onClick={handleArrowClick}></div>
                </div>
            </div>
            
            <div id='introContainer'>
                <h1 ref={setRef} className="animate-on-scroll">
                    ¡Cambiemos la historia juntos: <span className='elaGreen'>ELA</span> del Revés!
                </h1>
                <section>
                    <p ref={setRef} className="animate-on-scroll">
                        El proyecto en el que hemos estado trabajando es una iniciativa en colaboración con la <span className='elaGreen'>ELA</span> para crear una plataforma en línea que brinde recursos, información y apoyo a pacientes y familias afectados por la enfermedad.
                    </p>

                    <p ref={setRef} className="animate-on-scroll">
                        La idea de este proyecto surgió como una forma de mejorar la calidad de vida de las personas que viven con la <span className='elaGreen'>ELA</span>. Queríamos crear una plataforma en línea que brindara recursos y apoyo a la comunidad de la <span className='elaGreen'>ELA</span> en todo el mundo, con el fin de mejorar su calidad de vida y su bienestar.
                    </p>

                    <p ref={setRef} className="animate-on-scroll">
                        La clase de marketing ha estado trabajando en la promoción de la plataforma en línea y en la creación de una estrategia de marketing efectiva para llegar a la comunidad de la <span className='elaGreen'>ELA</span>. Han estado desarrollando campañas de concientización en las redes sociales y en otros canales de marketing, con el fin de atraer a más personas a la plataforma y aumentar su alcance.
                    </p>
                </section>
            </div>

            <div id='laEla'>
                <h2 ref={setRef} className="animate-on-scroll">La <span className='elaGreen'>ELA</span></h2>
                <section>
                    <p ref={setRef} className="animate-on-scroll">"Frase aleatoria curiosa del <span className='elaGreen'>ELA</span> cogida desde Base de Datos"</p>
                    <img id='elaDay' ref={setRef} className="animate-on-scroll" src={config.imagePath + 'elaDay.png'}  alt="" />
                    <p ref={setRef} className="animate-on-scroll">
                        Los <span className='elaGreen'>objetivos</span> y <span className='elaGreen'>metas</span> del proyecto son mejorar la calidad de vida de las personas afectadas por la <span className='elaGreen'>ELA</span>, brindar recursos y apoyo a la comunidad de la <span className='elaGreen'>ELA</span> en todo el mundo y aumentar la concientización sobre la enfermedad y su impacto en la sociedad. Además, queremos fomentar la colaboración y el intercambio de información entre los pacientes y los profesionales de la salud para mejorar el tratamiento y la atención de la <span className='elaGreen'>ELA</span>.
                    </p>
                </section>
            </div>

            <div id='Blog'>
                <h2 ref={setRef} className="animate-on-scroll">El <span className='elaGreen'>blog</span></h2>
                <section>
                    <p ref={setRef} className="animate-on-scroll">Carrusel de fotos de blog que vayan pasando</p>
                </section>
            </div>

            <div id='Unete'>
                <h2>Únete a la <span className='elaGreen'>causa</span></h2>
                <section>
                    <p>Puedes aportar tu pequeño grano de arena tan solo enviándonos un vídeo con el reto que te proponemos en el apartado de nuestra página: <a href=""><span className='elaGreen'>Únete</span></a>. Tu participación puede marcar la diferencia y ayudar a aumentar la conciencia sobre la lucha contra el ELA. ¡Únete a nosotros en esta importante causa y demuestra tu apoyo dándote la vuelta a la camiseta!</p>
                </section>
                
                <br />
                <button class="btnUnete desLog" title="Registrarse">
                ÚNETE
                    <svg height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H24V24H0z" fill="none"></path>
                        <path
                        d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z">
                        </path>
                    </svg>
                </button>
                <br />
            </div>
        </>
    );
}
