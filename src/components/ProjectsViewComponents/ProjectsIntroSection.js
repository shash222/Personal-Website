import React, { Component } from 'react';
import '../../styles/ProjectsViewStyles/ProjectsIntroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class ProjectsIntroSection extends Component {
    render() {
        return (
            <section id="projectsViewIntroSection" className="projectsViewSection introSection">
                <h1 data-aos="fade-in" data-aos-duration="1500" data-aos-delay="500">Projects</h1>
                <div className="navigationArrowContainer navigationArrowContainer viewNavigationArrowContainer down" onClick={() => this.props.handleSectionNavigationArrowClick(1)}>
                    {/* <Link
                        activeClass="active"
                        to="projectsSectionContainer"
                        spy={true}
                        smooth={true}
                        duration={500}> */}
                    <FontAwesomeIcon icon={faChevronDown} size="lg" />
                    {/* <div id="downArrow" className="projectViewArrow"></div> */}
                    {/* </Link> */}
                </div>
            </section>
        );
    }
}