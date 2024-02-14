import PropTypes from 'prop-types';

Therapy.propTypes = {
    config: PropTypes.object
};

export function Therapy(){
    return(
        <>
            <h2 className="animate-on-scroll">Terapias de la <span className='elaGreen'>ELA</span></h2>
            <p className="animate-on-scroll">Cuando la  <span className='elaGreen'>ELA</span> afecta la capacidad de respirar, hablar y moverse, las terapias y otros tipos de apoyo pueden ayudar:</p>
            <ul className='ela-list'>
                <li>
                    <p className="animate-on-scroll">
                        <b>Atención médica de la respiración</b>. Con el tiempo, la mayoría de las personas con ELA tienen más problemas para respirar a medida que los músculos se debilitan. El proveedor de atención médica puede examinar la respiración regularmente y proporcionar dispositivos, conocidos como ventilación mecánica, para ayudar a respirar por la noche.
                    </p>
                </li>
                <li>    
                    <p className="animate-on-scroll">
                        <b>Fisioterapia</b>. Un fisioterapeuta puede abordar el dolor, la marcha, el movimiento, los dispositivos ortopédicos y las necesidades de equipos que te ayuden a mantener tu independencia. Hacer ejercicio de bajo impacto puede ayudarte a que conserves un buen estado cardiovascular, la fuerza muscular y la amplitud de movimiento durante el mayor tiempo posible.
                    </p>
                </li>
                <li>
                    <p className="animate-on-scroll">
                        <b>Terapia ocupacional</b>. Un terapeuta ocupacional puede ayudarte a encontrar maneras de mantener tu independencia a pesar de la debilidad en las manos y los brazos. Los dispositivos de adaptación pueden ayudarte a hacer actividades como vestirte, asearte, comer y bañarte.
                    </p>
                </li>
            </ul>
        </>
    )
}