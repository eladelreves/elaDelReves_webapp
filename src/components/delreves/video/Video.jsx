import './video.css'
import PropTypes from 'prop-types';

Video.propTypes = {
    config: PropTypes.object
};

export function Video({ config }){
    return(
        <div className="div-con-video">
            <span>@eladelreves</span>

            <video autoPlay loop muted controls>
                <source src={config.videoPath + 'wantToHelp.mp4'} type="video/mp4"/>
                Tu navegador no admite el elemento de video.
            </video>
        </div>
    )
}