import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './delreves.css'
import { Video } from './video/Video' 
import { changePage } from '../../services/changePage';

Delreves.propTypes = {
    config: PropTypes.object
};

export function Delreves({ config }){
    useEffect(() => {
        changePage('delreves');
    }, []);

    return(
        <>
            <h2 id='delrevesTitle'>Últimos <span className='elaGreen'>Videos</span></h2>
            <div id='videosContainer'>
                <Video user={'@eladelreves'} video={config.videoPath + 'wantToHelp.mp4'}></Video>
                <Video user={'@eladelreves'} video={config.videoPath + 'interview12October.mp4'}></Video>
                <Video user={'@eladelreves'} video={config.videoPath + 'matchDay_video.mp4'}></Video>
            </div>
        </>
    )
}