import PropTypes from 'prop-types';
import { JoinButton } from './joinButton/JoinButton'

UneteSection.propTypes = {
    config: PropTypes.object
};

export function UneteSection(){
    return(
        <>
            <h2  className="animate-on-scroll">Únete a la <span className='elaGreen'>causa</span></h2>

            <div>
                <p  className="animate-on-scroll">Puedes aportar tu pequeño grano de arena tan solo enviándonos un vídeo con el reto que te proponemos en el apartado de nuestra página: <a href="" className='elaGreen underline'>Únete</a>. Tu participación puede marcar la diferencia y ayudar a aumentar la conciencia sobre la lucha contra el <span className='elaGreen'>ELA</span>. ¡Únete a nosotros en esta importante causa y demuestra tu apoyo dándote la vuelta a la camiseta!</p>
                <p  className="animate-on-scroll">Puedes contribuir significativamente a nuestra misión participando en nuestras campañas de concienciación y recaudación de fondos. Cada donación por pequeña que parezca, nos ayuda a financiar la investigación vital y el apoyo a las personas afectadas por el <span className='elaGreen'>ELA</span>. Juntos, podemos marcar la diferencia y trabajar hacia un futuro donde esta enfermedad ya no represente una amenaza. Únete a nuestra comunidad y sé parte del cambio que queremos ver en el mundo.</p>
            </div>

            <JoinButton></JoinButton>
        </>
    )
}