import { Link } from 'react-router-dom';
import './news.css'
import PropTypes from 'prop-types';

DynamicNews.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string
};

export function DynamicNews({ imgUrl, title }) {
    return(
        <>
            <Link to='/blog/match-day' className='newsTemplate' style={{backgroundImage: `url(${imgUrl})`}}>
                <h3>{title}</h3>
            </Link>
        </>
    )
}