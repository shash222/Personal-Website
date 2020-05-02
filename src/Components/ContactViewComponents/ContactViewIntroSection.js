import React, {Component} from 'react';
import '../../styles/ContactViewStyles/ContactViewIntroSection.css'
import {Link} from 'react-scroll'

export default class ContactViewIntroSection extends Component {
    render() {
        return(
            <section id="contactViewIntroSection">
                <h1 data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="500">Contact</h1>
                <div className="projectArrowContainer down">
                    <Link
                        activeClass="active"
                        to="contactSectionContainer"
                        spy={true}
                        duration={1000}>
                        <div id="downArrow" className="contactViewArrow"></div>
                    </Link>
                </div>
            </section>
        )
    }
}