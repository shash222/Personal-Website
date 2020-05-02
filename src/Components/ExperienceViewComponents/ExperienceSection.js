import React, { Component } from 'react';
import DetailedExperienceCard from './DetailedExperienceCard.js'
import '../../styles/ExperienceViewStyles/ExperienceSection.css'
import experience from '../../constants/Experiences.json'

export default class ExperienceSection extends Component {
    render() {
        return (
            <section id="experienceSectionContainer" className="experienceViewSection">
                <div id="detailedExperienceContainer">
                    <h2>Experience</h2>
                    <div id="detailedExperienceCardsContainer">
                        {experience.experiences.map((experience) => (
                            <DetailedExperienceCard experience={experience} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}