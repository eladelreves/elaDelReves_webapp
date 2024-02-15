import { useEffect } from 'react';
import PropTypes from 'prop-types';

import './home.css';

import { MainLogo } from './mainLogo/MainLogo' 
import { IntroSection } from './homeSections/IntroSection' 
import { LaElaSection } from './homeSections/LaElaSection' 
import { BlogSection } from './homeSections/BlogSection' 
import { UneteSection } from './homeSections/UneteSection' 
import { DelrevesSection } from './homeSections/DelrevesSection' 

import { changePage } from '../../services/changePage';

Home.propTypes = {
    config: PropTypes.object
};

export function Home({ config }) {
    useEffect(() => {
        changePage('home');
    }, []);
    
    return (
        <>
            <MainLogo config={config}></MainLogo>
            
            <section id='introSection'>
                <IntroSection></IntroSection>
            </section>

            <section id='laEla'>
                <LaElaSection config={config}></LaElaSection>
            </section>

            <section id='Blog'>
                <BlogSection config={config}></BlogSection>
            </section>

            <section id='Unete'>
                <UneteSection></UneteSection>
            </section>

            <section id="DelReves">
                <DelrevesSection config={config}></DelrevesSection>
            </section>
        </>
    );
}
