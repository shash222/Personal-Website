import React, { Component } from 'react';
import '../../styles/ContactViewStyles/ContactViewIntroSection.css'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class ContactViewIntroSection extends Component {
    render() {
        return (
            <section id="contactViewIntroSection">
                <h1 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">Contact</h1>
                <div className="navigationArrowContainer navigationArrowContainer viewNavigationArrowContainer down">
                    <Link
                        activeClass="active"
                        to="contactSectionContainer"
                        spy={true}
                        duration={1000}>
                        <FontAwesomeIcon icon={faChevronDown} size="lg" />
                        {/* <div id="downArrow" className="contactViewArrow"></div> */}
                    </Link>
                </div>
            </section>
        )
    }
}