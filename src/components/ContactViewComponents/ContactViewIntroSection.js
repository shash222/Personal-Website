import React, { Component } from 'react';
import '../../styles/ContactViewStyles/ContactViewIntroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class ContactViewIntroSection extends Component {
    render() {
        return (
            <section id="contactViewIntroSection" className="introSection">
                <h1 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">Contact</h1>
                <div className="navigationArrowContainer navigationArrowContainer viewNavigationArrowContainer down" onClick={() => this.props.handleSectionNavigationArrowClick(1)}>
                    <FontAwesomeIcon icon={faChevronDown} size="lg" />
                </div>
            </section>
        )
    }
}