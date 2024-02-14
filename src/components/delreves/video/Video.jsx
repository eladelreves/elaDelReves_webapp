import './video.css'
import PropTypes from 'prop-types';

Video.propTypes = {
    user: PropTypes.string,
    video: PropTypes.string
};

export function Video({ user, video }){
    return(
        <div className="div-con-video">
            <span>{user}</span>

            <video autoPlay loop muted controls>
                <source src={video} type="video/mp4"/>
                Tu navegador no admite el elemento de video.
            </video>
        </div>
    )
}