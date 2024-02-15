import PropTypes from 'prop-types';
import { Video } from '../../delreves/video/Video' 

DelrevesSection.propTypes = {
    config: PropTypes.object
};

export function DelrevesSection({ config }) {
    return(
        <>
            <h2  className="animate-on-scroll">Del <span className='elaGreen'>Revés</span></h2>
            
            <div>
                <p  className="animate-on-scroll">¡Únete a nuestra comunidad en delReves y comparte tu momento de apoyo! Sube tu video dándote la vuelta a la camiseta o a una prenda y sé parte del movimiento para aumentar la conciencia sobre el <span className='elaGreen'>ELA</span>. Juntos, podemos hacer una diferencia.</p>
                
                <Video user={'@eladelreves'} video={config.videoPath + 'wantToHelp.mp4'}></Video>
            </div>
        </>
    )
}