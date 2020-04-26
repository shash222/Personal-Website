import React from 'react';
import { Component } from 'react';
import ExperienceItem from './ExperienceItem.js';
import experiences from '../constants/Experiences.json';
import '../styles/HomeExperiencesSection.css';

export default class HomeExperiencesSection extends Component {
    render() {
        return (
            <section id="homeExperiencesSection" className="homePageSectionContainer">
                <div className="sectionContent" data-aos="zoom-out" data-aos-duration="2000" data-aos-anchor-placement="top-center">
                    <h2>Experience</h2>
                    <div id="experiencesContainer">
                        <div id="verticalBar"></div>
                        {experiences.experiences.map((exp, i) => (
                            <ExperienceItem key={exp.company + i} experience={exp} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}