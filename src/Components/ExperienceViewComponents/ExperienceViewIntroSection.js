import React, { Component } from 'react';
import '../../styles/ExperienceViewStyles/ExperienceViewIntroSection.css'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class ExperienceViewIntroSection extends Component {
    render() {
        return (
            <section id="experienceViewIntroSection">
                <h1 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">Experience</h1>
                <div className="experienceArrowContainer navigationArrowContainer viewNavigationArrowContainer down">
                    <Link
                        activeClass="active"
                        to="experienceSectionContainer"
                        spy={true}
                        duration={1000}>
                        <FontAwesomeIcon icon={faChevronDown} size="lg" />
                        {/* <div id="downArrow" className="experienceViewArrow"></div> */}
                    </Link>
                </div>
            </section>
        )
    }
}