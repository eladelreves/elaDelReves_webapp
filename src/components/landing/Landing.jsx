import React, { useEffect, useRef } from 'react';
import './landing.css';
import LogoEla from './../../assets/media/img/landingPage/LogoEla.png';

export function Landing() {
    const logoRef = useRef(null);
    const elementsRef = useRef([]);
    const h2Ref = useRef(null);
    const arrowRef = useRef(null);

    const handleArrowClick = () => {
        const mainContainer = document.getElementById('mainContainer');
        mainContainer.scrollIntoView({ behavior: 'smooth', block: 'start'});
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
                    <img ref={logoRef} src={LogoEla} alt="Logo de ELA"/>
                    <h2 ref={h2Ref}>Sigue bajando para ayudarnos!</h2>
                    <div ref={arrowRef} className="arrow" onClick={handleArrowClick}></div>
                </div>
            </div>
            <div id='mainContainer'>
                <h1 ref={(element) => elementsRef.current.push(element)} className="animate-on-scroll">
                    ¡Cambiemos la historia juntos: <span className='elaGreen'>ELA</span> del Revés!
                </h1>
                <section>
                    <p ref={(element) => elementsRef.current.push(element)} className="animate-on-scroll">
                        El proyecto en el que hemos estado trabajando es una iniciativa en colaboración con la <span className='elaGreen'>ELA</span> para crear una plataforma en línea que brinde recursos, información y apoyo a pacientes y familias afectados por la enfermedad.
                    </p>

                    <p ref={(element) => elementsRef.current.push(element)} className="animate-on-scroll">
                        La idea de este proyecto surgió como una forma de mejorar la calidad de vida de las personas que viven con la <span className='elaGreen'>ELA</span>. Queríamos crear una plataforma en línea que brindara recursos y apoyo a la comunidad de la <span className='elaGreen'>ELA</span> en todo el mundo, con el fin de mejorar su calidad de vida y su bienestar.
                    </p>

                    <p ref={(element) => elementsRef.current.push(element)} className="animate-on-scroll">
                        La clase de marketing ha estado trabajando en la promoción de la plataforma en línea y en la creación de una estrategia de marketing efectiva para llegar a la comunidad de la <span className='elaGreen'>ELA</span>. Han estado desarrollando campañas de concientización en las redes sociales y en otros canales de marketing, con el fin de atraer a más personas a la plataforma y aumentar su alcance.
                    </p>
                </section>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
}
