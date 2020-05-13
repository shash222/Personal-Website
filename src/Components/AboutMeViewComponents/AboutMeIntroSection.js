import React, { Component } from 'react';
import '../../styles/AboutMeViewStyles/AboutMeIntroSection.css';
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class AboutMeIntroSection extends Component {
    render() {
        return (
            <section id="aboutMeViewIntroSection">
                <h1 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">About Me</h1>
                <div className="navigationArrowContainer viewNavigationArrowContainer down">
                    <Link
                        activeClass="active"
                        to="aboutMeSectionContainer"
                        spy={true}
                        duration={1000}>
                        <FontAwesomeIcon icon={faChevronDown} size="lg" />
                        {/* <div id="downArrow" className="contactViewArrow"></div> */}
                    </Link>
                </div>
            </section>
        );
    }
}