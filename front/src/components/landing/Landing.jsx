import './landing.css'
import LogoEla from './../../assets/media/img/landingPage/LogoEla.png'; 

export function Landing() {
    return (
        <div id='middleContainer'>
            <img src={LogoEla} alt="Logo de ELA"/>
            <h1>¡Cambiemos la historia juntos: ELA del Revés!</h1>
            <p>
                El proyecto en el que hemos estado trabajando es una iniciativa en colaboración con la <span className='green'>ELA</span> para crear una plataforma en línea que brinde recursos, información y apoyo a pacientes y familias afectados por la enfermedad.
            </p>
            <br/>
            <p>
                La idea de este proyecto surgió como una forma de mejorar la calidad de vida de las personas que viven con la ELA. Queríamos crear una plataforma en línea que brindara recursos y apoyo a la comunidad de la ELA en todo el mundo, con el fin de mejorar su calidad de vida y su bienestar.
            </p>
            <br />
            <p>
                La clase de marketing ha estado trabajando en la promoción de la plataforma en línea y en la creación de una estrategia de marketing efectiva para llegar a la comunidad de la ELA. Han estado desarrollando campañas de concientización en las redes sociales y en otros canales de marketing, con el fin de atraer a más personas a la plataforma y aumentar su alcance.
            </p>
        </div>
    )
}