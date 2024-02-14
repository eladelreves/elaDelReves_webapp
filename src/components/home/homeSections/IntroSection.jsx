import PropTypes from 'prop-types';

IntroSection.propTypes = {
    config: PropTypes.object
};

export function IntroSection(){
    return(
        <>
            <h1 className="animate-on-scroll">
                ¡Cambiemos la historia juntos: <span className='elaGreen'>ELA</span> del Revés!
            </h1>
            
            <div>
                <p className="animate-on-scroll">
                    El proyecto en el que hemos estado trabajando es una iniciativa en colaboración con la <span className='elaGreen'>ELA</span> para crear una plataforma en línea que brinde recursos, información y apoyo a pacientes y familias afectados por la enfermedad.
                </p>

                <p className="animate-on-scroll">
                    La idea de este proyecto surgió como una forma de mejorar la calidad de vida de las personas que viven con la <span className='elaGreen'>ELA</span>. Queríamos crear una plataforma en línea que brindara recursos y apoyo a la comunidad de la <span className='elaGreen'>ELA</span> en todo el mundo, con el fin de mejorar su calidad de vida y su bienestar.
                </p>

                <p className="animate-on-scroll">
                    La clase de marketing ha estado trabajando en la promoción de la plataforma en línea y en la creación de una estrategia de marketing efectiva para llegar a la comunidad de la <span className='elaGreen'>ELA</span>. Han estado desarrollando campañas de concientización en las redes sociales y en otros canales de marketing, con el fin de atraer a más personas a la plataforma y aumentar su alcance.
                </p>
            </div>
        </>
    )
}