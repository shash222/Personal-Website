import React from 'react';
import { Component } from 'react';
import SkillCard from './SkillCard.js'
import '../../styles/HomeViewStyles/HomeSkillsSection.css'
import experiences from '../../constants/Experiences.json'
import projects from '../../constants/Projects.json'
import education from '../../constants/Education.json'
import techSkills from '../../constants/TechSkills.json'
import nonTechSkills from '../../constants/NonTechSkills.json'
import TechSkillsChart from './TechSkillsChart.js'
import barChartColors from '../../constants/BarChartColors.json'

export default class HomeSkillsSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            skillMapping: {}
        }
        this.parseSkills = this.parseSkills.bind(this)
    }

    componentDidMount() {
        this.parseSkills()
    }

    parseSkills() {
        var skillMapping = {}
        experiences.forEach((exp) => {
            var skillSource = "Experience"
            exp.skillsGained.forEach((skill) => {
                if (skillMapping[skill] === undefined)
                    skillMapping[skill] = {}
                if (skillMapping[skill][skillSource] === undefined)
                    skillMapping[skill][skillSource] = new Set()
                if (exp.company.length === 0)
                    skillMapping[skill][skillSource].add(exp.position)
                else
                    skillMapping[skill][skillSource].add(exp.company)
            })
        })
        projects.forEach((project) => {
            var skillSource = "Projects"
            project.technologies.forEach((technology) => {
                if (skillMapping[technology] === undefined)
                    skillMapping[technology] = {}
                if (skillMapping[technology][skillSource] === undefined)
                    skillMapping[technology][skillSource] = new Set()
                skillMapping[technology][skillSource].add(project.name)
            })
        })
        education.forEach((education) => {
            var skillSource = "Courses"
            education.relevantCourses.forEach((course) => {
                if (course.technologies) {
                    course.technologies.forEach((technology) => {
                        if (skillMapping[technology] === undefined)
                            skillMapping[technology] = {}
                        if (skillMapping[technology][skillSource] === undefined)
                            skillMapping[technology][skillSource] = new Set()
                        skillMapping[technology][skillSource].add(course.courseName)
                    })
                }

            })
        })
        this.setState({ skillMapping: skillMapping })
        // experiences.forEach((exp) => {
        //     exp.skillsGained.forEach((skill) => {
        //         if (skillMapping[skill] === undefined)
        //             skillMapping[skill] = new Set()
        //         skillMapping[skill].add(exp.company)
        //     })
        // })
        // projects.forEach((project) => {
        //     project.technologies.forEach((technology) => {
        //         if (skillMapping[technology] === undefined)
        //             skillMapping[technology] = new Set()
        //         skillMapping[technology].add(project.name)
        //     })
        // })
        // education.forEach((education) => {
        //     education.relevantCourses.forEach((course) => {
        //         if (course.technologies) {
        //             course.technologies.forEach((technology) => {
        //                 if (skillMapping[technology] === undefined)
        //                     skillMapping[technology] = new Set()
        //                 skillMapping[technology].add(course.courseName)
        //             })
        //         }

        //     })
        // })
        // Object.keys(skillMapping).map((skill, i) => {
        //     console.log(skill, skillMapping[skill])
        // })
    }


    render() {
        return (
            <section id="homeSkillsSection" className="homePageSectionContainer">
                <div className="sectionContent">
                    <h2>Skills</h2>
                    <div id="techSkillsContainer">
                        {Object.keys(techSkills).map((skillCategory, i) => (
                            <TechSkillsChart key={skillCategory} skillCategory={skillCategory} skillCategoryDetails={techSkills[skillCategory]} color={barChartColors[i]} />
                        ))}

                    </div>
                    <div id="skillsContainer">
                        {/* {skillDetails.map((skill, i) => (
                            <SkillCard key={skill.name} skillDetail={skill} delay={i + 1} />
                        ))} */}
                        {/* {Object.keys(this.state.skillMapping).map((skill, i) => (
                            <SkillCard key={skill} skill={skill} skillSources={this.state.skillMapping[skill]} delay={i + 1} />
                        ))} */}
                        {nonTechSkills.map((skill, i) => (
                            <SkillCard key={skill.skill} skill={skill.skill} skillSources={skill.experience} delay={i + 1} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}