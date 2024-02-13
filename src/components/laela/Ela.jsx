import { useEffect } from 'react';
import './ela.css';
import PropTypes from 'prop-types';
import { changePage } from '../../services/changePage';

Ela.propTypes = {
    config: PropTypes.object
};


export function Ela({ config }){
    useEffect(() => {
        changePage('ela');
    }, []);

    return(
        <>
            <h1>Hola</h1>
        </>
    )
}