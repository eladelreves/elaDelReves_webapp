import { useEffect } from 'react';
import './ela.css';
import PropTypes from 'prop-types';
import { changePage } from '../../services/changePage';
import { ElaIntroSection } from './elaSections/ElaIntroSection';
import { Symptoms } from './elaSections/SymptomsSection';
import { Origin } from './elaSections/OriginSection';
import { Treatment } from './elaSections/TreatmentSection';
import { Therapy } from './elaSections/TherapySection';

Ela.propTypes = {
    config: PropTypes.object
};


export function Ela({ config }){
    useEffect(() => {
        changePage('laela');
    }, []);

    return(
        <>
            <section id='intro-container'>
                <ElaIntroSection></ElaIntroSection>
            </section>

            <section id='ela-symptoms'>
                <Symptoms></Symptoms>
            </section>

            <section id='ela-origin'>
                <Origin></Origin>
            </section>

            <section id='ela-treatment'>
                <Treatment></Treatment>
            </section>

            <section id='ela-therapy'>
                <Therapy></Therapy>
            </section>
        </>
    )
}