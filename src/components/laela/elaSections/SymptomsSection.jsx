import PropTypes from 'prop-types';

Symptoms.propTypes = {
    config: PropTypes.object
};

export function Symptoms(){
    return(
        <>
            <h2>¿Cuáles son los síntomas del <span className='elaGreen'>ELA</span>?</h2>
            <p>
                Los síntomas incluyen debilidad muscular, dificultad para hablar y tragar, problemas respiratorios, calambres musculares y espasmos en brazos, hombros y lengua, llanto, risa o bostezos inapropiados y cambios cognitivos y de comportamiento.
            </p>
            <div id='video-container'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tFUWFustQ5w?si=G4VbFNjUCTffHsyM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quos officiis, deleniti harum cupiditate nesciunt molestias eos ea culpa! Vitae deleniti pariatur vel officia maiores praesentium iusto quidem unde molestiae natus mollitia doloremque ipsam quas consequatur est magni ipsum voluptas architecto, necessitatibus corrupti perferendis! Beatae placeat soluta saepe libero, praesentium eligendi voluptatum itaque impedit debitis tenetur inventore distinctio harum sint quis blanditiis quae, non vitae eum dolore aut enim? Molestiae quo odio nulla minima odit maxime ex impedit dicta id.</p>
            </div>
        </>
    )
}