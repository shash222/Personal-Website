import React, { Component } from 'react';
import '../../styles/ExperienceViewStyles/ExperienceViewIntroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class ExperienceViewIntroSection extends Component {
    render() {
        return (
            <section id="experienceViewIntroSection" className="introSection">
                <h1 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">Experience</h1>
                <div className="experienceArrowContainer navigationArrowContainer viewNavigationArrowContainer down" onClick={() => this.props.handleSectionNavigationArrowClick(1)}>
                    {/* <Link
                        activeClass="active"
                        to="experienceSectionContainer"
                        spy={true}
                        smooth={true}
                        duration={500}> */}
                    <FontAwesomeIcon icon={faChevronDown} size="lg" />
                    {/* <div id="downArrow" className="experienceViewArrow"></div> */}
                    {/* </Link> */}
                </div>
            </section>
        )
    }
}