import PropTypes from 'prop-types';

UneteIntroSection.propTypes = {
    config: PropTypes.object
};

export function UneteIntroSection(){
    return(
        <>
            <h2>¡Démosle la <span className='elaGreen'>vuelta</span>!</h2>
            <p>La <span className='elaGreen'>ELA</span> puede ser <span className='elaGreen'>implacable</span>, pero nuestra <span className='elaGreen'>determinación</span> es <span className='elaGreen'>inquebrantable</span>. <br /> Únete a nuestra causa y enfrentemos juntos este desafío con <span className='elaGreen'>fuerza</span>, <span className='elaGreen'>coraje</span> y <span className='elaGreen'>esperanza</span>.</p>
        </>
    )
}