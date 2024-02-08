import React, { useEffect, useRef } from 'react';
import './landing.css';
import LogoEla from './../../assets/media/img/landingPage/LogoEla.png';

export function Landing() {
    const logoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const logo = logoRef.current;
            const logoRect = logo.getBoundingClientRect();
            const containerHeight = document.getElementById('stickyContainer').clientHeight;
        
            // Calcular la posición vertical absoluta del logo en el contenedor
            const logoYPosition = logoRect.top + window.scrollY - document.getElementById('stickyContainer').getBoundingClientRect().top;
        
            // Calcular la rotación basada en la posición vertical absoluta del logo en el contenedor
            const rotation = ((logoYPosition / containerHeight)) * 250;
        
            // Aplicar la rotación al logo
            logo.style.transform = `rotateX(${rotation}deg)`;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
        <div id='stickyContainer'>
            <div>
                <img ref={logoRef} src={LogoEla} alt="Logo de ELA"/>
            </div>
        </div>
        <div id='mainContainer'>
            <h1>¡Cambiemos la historia juntos: <span className='elaGreen'>ELA</span> del Revés!</h1>
            <section>
                <p>
                    El proyecto en el que hemos estado trabajando es una iniciativa en colaboración con la <span className='elaGreen'>ELA</span> para crear una plataforma en línea que brinde recursos, información y apoyo a pacientes y familias afectados por la enfermedad.
                </p>

                <p>
                    La idea de este proyecto surgió como una forma de mejorar la calidad de vida de las personas que viven con la ELA. Queríamos crear una plataforma en línea que brindara recursos y apoyo a la comunidad de la <span className='elaGreen'>ELA</span> en todo el mundo, con el fin de mejorar su calidad de vida y su bienestar.
                </p>

                <p>
                    La clase de marketing ha estado trabajando en la promoción de la plataforma en línea y en la creación de una estrategia de marketing efectiva para llegar a la comunidad de la <span className='elaGreen'>ELA</span>. Han estado desarrollando campañas de concientización en las redes sociales y en otros canales de marketing, con el fin de atraer a más personas a la plataforma y aumentar su alcance.
                </p>
            </section>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
        
    );
}
