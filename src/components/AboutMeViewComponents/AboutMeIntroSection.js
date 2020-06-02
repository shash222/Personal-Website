import React, { Component } from 'react';
import '../../styles/AboutMeViewStyles/AboutMeIntroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class AboutMeIntroSection extends Component {
    render() {
        return (
            <section id="aboutMeViewIntroSection" className="introSection">
                <h1 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">About Me</h1>
                <div className="navigationArrowContainer viewNavigationArrowContainer down" onClick={() => this.props.handleSectionNavigationArrowClick(1)}>
                    {/* // <Link
                    //     activeClass="active"
                    //     to="aboutMeSectionContainer"
                    //     spy={true}
                    //     smooth={true}
                    //     duration={500}> */}
                    <FontAwesomeIcon icon={faChevronDown} size="lg" />
                    {/* // <div id="downArrow" className="contactViewArrow"></div>
                    // </Link> */}
                </div>
            </section>
        );
    }
}