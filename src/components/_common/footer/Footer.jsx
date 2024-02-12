import './footer.css'
import PropTypes from 'prop-types';

Footer.propTypes = {
    config: PropTypes.object
};

export function Footer ({ config }){
    const handleClick = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return(
        <footer>
            <div id="footerData">
                <div id="info">
                    <h4>Información</h4>
                    <a href="">Avisos legales</a>
                    <a href="">Protección de datos</a>
                    <a href="">Política de privacidad</a>
                    <a href="">Cookies</a>
                </div>

                <div id="goToTopLink">
                    <a href="#" onClick={handleClick}>
                        <span className='icon-arrow_upward'></span>
                    </a>
                    <a href="#" onClick={handleClick}>
                        <img src={config.imagePath + 'logo_centerTie_White.png'} alt=""/>
                    </a>
                </div>

                <div id="contactData">
                    <h4>Datos de Contacto</h4>
                    <div>
                        <span className="icon-mail2"></span>
                        <span>eladelreves@gmail.com</span>
                    </div>

                    <div>
                        <span className="icon-instagram"></span>
                        <a href='https://www.instagram.com/eladelreves/'>@eladelreves</a>
                    </div>

                    <div>
                        <span className="icon-linkedin"></span>
                        <span>/eladelreves/</span>
                    </div>
                </div>
            </div>

            <span id='copyright'>Copyright 2024 © | Designed By <a href="">kikario</a></span>
        </footer>
    )
}