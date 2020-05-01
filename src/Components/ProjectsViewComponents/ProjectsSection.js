import React, { Component } from 'react';
import projectDetails from '../../constants/Projects.json'
import DetailedProjectCard from './/DetailedProjectCard.js'
import '../../styles/ProjectsViewStyles/ProjectsSection.css'
import skills from '../../constants/Skills.json'
import experiences from '../../constants/Experiences.json'

export default class ProjectsSection extends Component {
    constructor(props) {
        super(props)
        this.handleTagSelection = this.handleTagSelection.bind(this)
    }

    handleTagSelection(e) {
        if (e.target.classList.contains("selectedTag")) {
            e.target.classList.remove("selectedTag")
        } else {
            e.target.classList.add("selectedTag")
        }
    }

    render() {
        return (
            <section id="projectsSectionContainer" className="projectsViewSection">
                <div id="detailedProjectsContainer">
                    <h2>All Projects</h2>
                    <div id="allTagsContainer">
                        <div className="tagsContainer">
                            <span className="tagTitle">Skills:</span>
                            {skills.skills.map((skill) => (
                                <span className="skillTag tag" key={skill.name} data-tag-value={skill.name} onClick={this.handleTagSelection}>{skill.name}</span>
                            ))}
                        </div>
                        <div className="tagsContainer">
                            <span className="tagTitle">Experiences:</span>
                            {experiences.experiences.map((experience) => (
                                <span className="experienceTag tag" key={experience.company} data-tag-value={experience.company} onClick={this.handleTagSelection}>{experience.company}</span>
                            ))}
                        </div>
                        <div className="tagsContainer">
                            <span className="tagTitle">Status:</span>
                            <span className="statusTag tag" data-tag-value="In Progress" onClick={this.handleTagSelection}>In Progress</span>
                            <span className="statusTag tag" data-tag-value="Completed" onClick={this.handleTagSelection}>Completed</span>
                        </div>
                        <input type="text" id="tagSearchBar" name="tagSearch" placeholder="Enter Skill, Experience or Status" />
                    </div>
                    <div id="detailedProjectCardsContainer">
                        {projectDetails.projects.map((project, i) => (
                            <DetailedProjectCard key={project.name} delay={i} project={project} />
                        ))}

                    </div>
                </div>
            </section>
        );
    }
}