import PropTypes from 'prop-types';

Origin.propTypes = {
    config: PropTypes.object
};

export function Origin(){
    return(
        <>
            <h2 className="animate-on-scroll">¿Cuándo se presenta la <span className='elaGreen'>ELA</span>?</h2>
            <p className="animate-on-scroll">
                La <span className='elaGreen'>ELA</span> suele aparecer entre las edades de <b>40 y 70 años</b>, pero puede darse también en edades más jóvenes o mayores. Suele darse con algo <b>más defrecuencia</b> en los <b>hombres que las mujeres</b>.
            </p>
            <p className="animate-on-scroll">
                En la última década se han realizado importantes avances en el conocimiento de la etiopatogenia de la enfermedad, gracias a la <b>investigación básica y terapéutica</b>.
            </p>
            <ul className='ela-list'>
                <li>
                    <p className="animate-on-scroll">
                        La <b>investigación básica</b> se centra en el estudio de las <b>hipótesis etiopatogénicas</b> que reúnen una mayor evidencia como las <b>alteraciones genéticas</b> ya mencionadas, la disfunción del <b>metabolismo mitocondrial</b>, la <b>excitotoxicidad mediada por el ácido glutámico</b> y la activación de mecanismos de <b>muerte celular programada</b>.
                    </p>
                </li>
                <br />
                <li>
                    <p className="animate-on-scroll">
                        La <b>investigación terapéutica</b> se centra en la búsqueda de nuevos tratamientos basados en el conocimiento de los mecanismos básicos citados. Este tipo de investigación se facilita por la existencia de <b>diversos modelos experimentales con ratones transgénicos de la enfermedad</b>, que permiten estudiar previamente el efecto de los posibles tratamientos antes de pasar a una <b>fase de ensayos clínicos</b>.
                    </p>
                </li>
            </ul>
        </>
    )
}