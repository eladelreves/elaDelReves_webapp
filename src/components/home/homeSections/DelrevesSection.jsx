import PropTypes from 'prop-types';

DelrevesSection.propTypes = {
    config: PropTypes.object
};

export function DelrevesSection(){
    return(
        <>
            <h2  className="animate-on-scroll">Del <span className='elaGreen'>Revés</span></h2>
            
            <div>
                <p  className="animate-on-scroll">¡Únete a nuestra comunidad en delReves y comparte tu momento de apoyo! Sube tu video dándote la vuelta a la camiseta o a una prenda y sé parte del movimiento para aumentar la conciencia sobre el <span className='elaGreen'>ELA</span>. Juntos, podemos hacer una diferencia.</p>
                <p  className="animate-on-scroll">Insertar video aleatorio de la red social aquí</p>
            </div>
        </>
    )
}