import PropTypes from 'prop-types';
import { NewsSlider } from './newsSlider/NewsSlider' 

BlogSection.propTypes = {
    config: PropTypes.object
};

export function BlogSection({ config }){
    return(
        <>
            <h2 className="animate-on-scroll">El <span className='elaGreen'>blog</span></h2>
            
            <NewsSlider config={config}></NewsSlider>
        </>
    )
}