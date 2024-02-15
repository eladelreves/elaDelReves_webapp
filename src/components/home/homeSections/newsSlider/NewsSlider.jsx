import './newsSlider.css'
import PropTypes from 'prop-types';
import { News } from '../../../blog/news/News' 
import { useEffect } from 'react';
import { addAnimation } from '../../../../services/animations';
import { DynamicNews } from '../../../blog/news/DynamicNews';

NewsSlider.propTypes = {
    config: PropTypes.object
};

export function NewsSlider({ config }){
    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && document.querySelector(".scroller[data-direction='left']")) {
            if (!document.querySelector(".scroller[data-animated='true']")) {
                addAnimation();
            }
        }
    }, []);

    return(
        <>
            <div className="scroller animate-on-scroll" data-direction="left" data-speed="slow">
                <div className="scroller__inner">
                    <DynamicNews imgUrl={config.imagePath+'news/matchDay.png'} title={'Torneo Benéfico Futsal'}></DynamicNews>
                    <News imgUrl={config.imagePath+'news/laismoEla.png'} title={'LA ELA vs EL ELA'}></News>
                    <News imgUrl={config.imagePath+'news/stephen-hawking.jpg'} title={'Stephen Hawking, ejemplo de lucha'}></News>
                    <News imgUrl={config.imagePath+'news/adela.png'} title={'¡Descubre nuevas formas de ayudar con ADELA!'}></News>
                </div>
            </div>
        </>
    )
}