import './footer.css'
import PropTypes from 'prop-types';

Footer.propTypes = {
    config: PropTypes.object
};

export function Footer ({ config }){
    console.log(config.imagePath + 'logo_centerTie.png');
    return(
        <footer>
            <div id="info">
                <div id="help">
                    <h4>Ayuda</h4>
                    <a href="">Avisos legales</a>
                    <a href="">Protección de datos</a>
                    <a href="">Política de privacidad</a>
                    <a href="">Cookies</a>+
                </div>

                <div id="imgFooter">
                    <a href="#" id="goToTopLink">
                        <img src={config.imagePath + 'logo_centerTie.png'} alt=""/>
                    </a>
                </div>

                <div id="contactFooter">
                    <h4>Datos de Contacto</h4>
                    <div>
                        <span className="icon-mail2"></span>
                        <span>fisioterapianeros@gmail.com</span>
                    </div>
                    <div>
                        <span className="icon-phone"></span>
                        <span>916 034 590</span>
                    </div>
                    <div>
                        <span className="icon-whatsapp"></span>
                        <span>+34 640 064 623</span>
                    </div>
                </div>
            </div>
            <div id="copyright">
                <span>Copyright 2023 © | Designed By <a href="">brodevs</a></span>
            </div>
        </footer>
    )
}