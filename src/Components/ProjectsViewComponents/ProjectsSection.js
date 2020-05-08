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
        this.state = {
            skillMapping: {}
        }
        this.parseSkills = this.parseSkills.bind(this)
        this.updateDisplayedProjects = this.updateDisplayedProjects.bind(this)
        this.displayAllProjects = this.displayAllProjects.bind(this)
        this.changeItemsWithHideClassToDisplayNone = this.changeItemsWithHideClassToDisplayNone.bind(this)
    }

    componentDidMount() {
        this.parseSkills()
    }

    parseSkills() {
        var skillMapping = {}
        projectDetails.forEach((project) => {
            // var skillSource = "Projects"
            project.technologies.forEach((technology) => {
                if (skillMapping[technology] === undefined)
                    skillMapping[technology] = new Set()
                // if (skillMapping[technology][skillSource] === undefined)
                //     skillMapping[technology][skillSource] = new Set()
                skillMapping[technology].add(project.name)
            })
        })
        this.setState({ skillMapping: skillMapping })
    }

    handleTagSelection(e) {
        if (e.target.classList.contains("selectedTag")) {
            e.target.classList.remove("selectedTag")
        } else {
            e.target.classList.add("selectedTag")
        }
        this.updateDisplayedProjects()
    }

    updateDisplayedProjects() {
        console.log("Updating")
        var selectedTags = document.getElementsByClassName("selectedTag")
        var detailedProjectCardContainers = document.getElementsByClassName("detailedProjectCardContainer");
        console.log(selectedTags.length)
        if (selectedTags.length === 0)
            this.displayAllProjects()
        else {
            var projectNamesOfProjectsToDisplay = new Set()
            for (let selectedTag of selectedTags) {
                var selectedTagValue = selectedTag.getAttribute('data-tag-value')
                console.log(selectedTagValue)
                var projectNamesCorrespondingToTag = this.state.skillMapping[selectedTagValue]
                projectNamesCorrespondingToTag.forEach((projectName) => {
                    projectNamesOfProjectsToDisplay.add(projectName)
                })
            }
            for (let container of detailedProjectCardContainers) {
                var projectName = container.getElementsByClassName("detailedProjectCardProjectName")[0].innerHTML
                if (projectNamesOfProjectsToDisplay.has(projectName)) {
                    container.classList.add("aos-animate")
                    if (container.classList.contains("hide")) {
                        container.style.display = "block"

                        container.classList.add("show")
                        container.classList.remove("hide")
                    }
                } else {
                    container.classList.add("hide")
                    container.classList.remove("show")
                }
            }
            setTimeout(this.changeItemsWithHideClassToDisplayNone, 1000)
        }
    }

    changeItemsWithHideClassToDisplayNone() {
        var containersToHide = document.getElementsByClassName("hide")
        for (let container of containersToHide) {
            container.style.display = "none"
        }
    }

    displayAllProjects() {
        var detailedProjectCardContainers = document.getElementsByClassName("detailedProjectCardContainer");
        var selectedTags = document.getElementsByClassName("selectedTag")

        for (let selectedTag of selectedTags) {
            selectedTag.classList.remove("selectedTag")
        }
        for (let container of detailedProjectCardContainers) {
            if (container.classList.contains("hide")) {
                container.style.display = "block"
                container.classList.add("show")
                container.classList.remove("hide")
            }
        }
    }

    render() {
        return (
            <section id="projectsSectionContainer" className="projectsViewSection">
                <div className="iframeContainer">
                    <div className="x">X</div>
                    <iframe className="sample" ></iframe>
                </div>
                <div id="detailedProjectsContainer">
                    <h2>All Projects</h2>
                    <div id="allTagsContainer">
                        <p className="tagTitle">Skills:</p>
                        <div className="tagsContainer">
                            {/* <span className="skillTag tag selectedTag" data-tag-value="all" onClick={this.displayAllProjects}>All</span> */}
                            {Object.keys(this.state.skillMapping).map((skill) => (
                                <span className="skillTag tag" key={skill} data-tag-value={skill} onClick={this.handleTagSelection}>{skill}</span>
                            ))}
                        </div>
                        {/* <div className="tagsContainer">
                            <span className="tagTitle">Skills:</span>
                            {skills.map((skill) => (
                                <span className="skillTag tag" key={skill.name} data-tag-value={skill.name} onClick={this.handleTagSelection}>{skill.name}</span>
                            ))}
                        </div> */}
                        {/* <div className="tagsContainer">
                            <span className="tagTitle">Experiences:</span>
                            {experiences.map((experience) => (
                                <span className="experienceTag tag" key={experience.company} data-tag-value={experience.company} onClick={this.handleTagSelection}>{experience.company}</span>
                            ))}
                        </div>
                        <div className="tagsContainer">
                            <span className="tagTitle">Status:</span>
                            <span className="statusTag tag" data-tag-value="In Progress" onClick={this.handleTagSelection}>In Progress</span>
                            <span className="statusTag tag" data-tag-value="Completed" onClick={this.handleTagSelection}>Completed</span>
                        </div> */}
                        <input type="text" id="tagSearchBar" name="tagSearch" placeholder="Enter Skill, Experience or Status" />
                    </div>
                    <div id="detailedProjectCardsContainer">
                        {projectDetails.map((project, i) => (
                            <DetailedProjectCard key={project.name} delay={i} project={project} />
                        ))}

                    </div>
                </div>
            </section>
        );
    }
}