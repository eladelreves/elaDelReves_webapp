import PropTypes from 'prop-types';

LaElaSection.propTypes = {
    config: PropTypes.object
};

export function LaElaSection({ config }){
    return(
        <>
            <h2  className="animate-on-scroll">La <span className='elaGreen'>ELA</span></h2>

            <div>
                <p  className="animate-on-scroll">"Frase aleatoria curiosa del <span className='elaGreen'>ELA</span> cogida desde Base de Datos"</p>

                <div id='imageContainer'>
                    <img id='elaDay'  className="animate-on-scroll" src={config.imagePath + 'elaDay.png'}  alt="Imagen de concienciacion de la enfermedad de la ELA en España" />
                    <p  className="animate-on-scroll">Cada día, en España, se diagnostican en promedio tres personas con <span className='elaGreen'>ELA</span>, una enfermedad devastadora que afecta a individuos y a sus familias en todo el país. Con el Día Mundial de la <span className='elaGreen'>ELA</span> el 21 de junio, es crucial recordar la importancia de la concienciación y el apoyo. A través de la educación y la solidaridad, podemos trabajar juntos para mejorar la calidad de vida de quienes viven con <span className='elaGreen'>ELA</span> y avanzar en la investigación hacia tratamientos y, eventualmente, una cura. ¡Únete a nosotros en esta lucha!</p>
                </div>

                <p  className="animate-on-scroll">
                    Los <span className='elaGreen'>objetivos</span> y <span className='elaGreen'>metas</span> del proyecto son mejorar la calidad de vida de las personas afectadas por la <span className='elaGreen'>ELA</span>, brindar recursos y apoyo a la comunidad de la <span className='elaGreen'>ELA</span> en todo el mundo y aumentar la concientización sobre la enfermedad y su impacto en la sociedad. Además, queremos fomentar la colaboración y el intercambio de información entre los pacientes y los profesionales de la salud para mejorar el tratamiento y la atención de la <span className='elaGreen'>ELA</span>.
                </p>
            </div>
        </>
    )
}