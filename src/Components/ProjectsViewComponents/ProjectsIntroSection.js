import React, { Component } from 'react';
import '../../styles/ProjectsViewStyles/ProjectsIntroSection.css'
import {Link} from 'react-scroll'

export default class ProjectsIntroSection extends Component {
    render() {
        return (
            <section id="projectsViewIntroSection" className="projectsViewSection">
                <h1 data-aos="fade-in" data-aos-duration="1500" data-aos-delay="500">Projects</h1>
                <div className="projectArrowContainer down">
                    <Link
                        activeClass="active"
                        to="projectsSectionContainer"
                        spy={true}
                        duration={1000}>
                        <div id="downArrow" className="projectViewArrow"></div>
                    </Link>

                </div>
            </section>
        );
    }
}