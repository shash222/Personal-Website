import React from 'react';
import { Component } from 'react';
import '../styles/HomeIntro.css';

export default class HomeIntro extends Component {
    render() {
        return (
            <section className="homePageSectionContainer" id="homeIntroSection">
                <div id="introSection" className="sectionContent">
                    <h2 id="name" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">Salman Hashmi</h2>
                    <p id="title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">Software Engineer</p>
                </div>

                <div id="arrowContainer">

                </div>
            </section>
        );
    }
}