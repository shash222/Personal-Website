import React from 'react';
import { Component } from 'react';
import ExperienceItem from './ExperienceItem.js';
import experiences from '../../constants/Experiences.json';
import { NavLink } from 'react-router-dom';
import '../../styles/HomeViewStyles/HomeExperiencesSection.css';

export default class HomeExperiencesSection extends Component {
    render() {
        return (
            <section id="homeExperiencesSection" className="homePageSectionContainer">
                <div id="homeExperienceSectionContent" className="sectionContent" data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="top-center">
                    <h2>Relevant Experience</h2>
                    <div id="experiencesContainer">
                        <div id="verticalBar"></div>
                        {experiences.filter((exp) => {
                            return exp.relevant;
                        }).map((exp, i) => (
                            <ExperienceItem key={exp.company + i} experience={exp} />
                        ))}
                    </div>
                    <div id="allExperiencesLinkContainer">
                        <NavLink to="/experience"><span id="allExperiencesLink">More Experiences</span></NavLink>
                    </div>
                </div>
            </section>
        );
    }
}