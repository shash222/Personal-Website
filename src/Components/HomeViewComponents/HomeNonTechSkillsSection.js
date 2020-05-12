import React from 'react';
import { Component } from 'react';
import SkillCard from './SkillCard.js'
import '../../styles/HomeViewStyles/HomeNonTechSkillsSection.css'
import nonTechSkills from '../../constants/NonTechSkills.json'

export default class HomeNonTechSkillsSection extends Component {
    render() {
        return (
            <section id="homeNonTechSkillsSection" className="homePageSectionContainer">
                <div className="sectionContent">
                    <h2>Non-Technical Skills</h2>
                    <div id="nonTechSkillsContainer">
                        {nonTechSkills.map((skill, i) => (
                            <SkillCard key={skill.skill} skill={skill.skill} skillSources={skill.experience} delay={i + 1} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}