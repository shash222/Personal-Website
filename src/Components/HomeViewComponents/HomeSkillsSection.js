import React from 'react';
import { Component } from 'react';
import SkillCard from './SkillCard.js'
import skillDetails from '../../constants/Skills.json'
import '../../styles/HomeViewStyles/HomeSkillsSection.css'

export default class HomeSkillsSection extends Component {
    render() {
        return (
            <section id="homeSkillsSection" className="homePageSectionContainer" data-aos="fade-down" data-aos-duration="1000" data-aos-anchor-placement="top-center">
                <div className="sectionContent">
                    <h2>Skills</h2>
                    <div id="skillsContainer">
                        {skillDetails.skills.map((skill, i) => (
                            <SkillCard key={skill.name} skillDetail={skill} delay={i + 1}/> 
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}