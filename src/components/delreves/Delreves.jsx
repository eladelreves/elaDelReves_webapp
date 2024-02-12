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
            <h2>Últimos <span className='elaGreen'>Videos</span></h2>
            <div id='videosContainer'>
                <Video config={config}></Video>
            </div>
        </>
    )
}