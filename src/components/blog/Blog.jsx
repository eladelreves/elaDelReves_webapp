import './blog.css'
import { News } from './news/News' 
import PropTypes from 'prop-types';
import { changePage } from '../../services/changePage';
import { useEffect } from 'react';
import { DynamicNews } from './news/DynamicNews';

Blog.propTypes = {
    config: PropTypes.object
};

export function Blog({ config }){
    useEffect(() => {
        changePage('blog');
    }, []);

    return(
        <>
            <h2 id='newsTitle'>Últimas <span className='elaGreen'>Noticias</span></h2>
            <div id='newsContainer'>
                <DynamicNews imgUrl={config.imagePath+'news/matchDay.png'} title={'Torneo Benéfico Futsal'}></DynamicNews>
                <News imgUrl={config.imagePath+'news/laismoEla.png'} title={'LA ELA vs EL ELA'}></News>
                <News imgUrl={config.imagePath+'news/stephen-hawking.jpg'} title={'Stephen Hawking, ejemplo de lucha'}></News>
                <News imgUrl={config.imagePath+'news/adela.png'} title={'¡Descubre nuevas formas de ayudar con ADELA!'}></News>
            </div>
        </>
    )
}