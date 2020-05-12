import React from 'react';
import { Component } from 'react';
import '../../styles/HomeViewStyles/HomeTechSkillsSection.css'
import techSkills from '../../constants/TechSkills.json'
import TechSkillsChart from './TechSkillsChart.js'
import barChartColors from '../../constants/BarChartColors.json'

export default class HomeTechSkillsSection extends Component {

    render() {
        return (
            <section id="homeTechSkillsSection" className="homePageSectionContainer">
                <div className="sectionContent">
                    <h2>Technical Skills</h2>
                    <div id="techSkillsContainer">
                        {Object.keys(techSkills).map((skillCategory, i) => (
                            <TechSkillsChart key={skillCategory} skillCategory={skillCategory} skillCategoryDetails={techSkills[skillCategory]} color={barChartColors[i]} />
                        ))}

                    </div>
                </div>
            </section>
        );
    }
}