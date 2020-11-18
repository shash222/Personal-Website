import React, { Component } from 'react';
import projectDetails from '../../constants/Projects.json'
import DetailedProjectCard from './/DetailedProjectCard.js'
import '../../styles/ProjectsViewStyles/ProjectsSection.css'
// import skills from '../../constants/Skills.json'
// import experiences from '../../constants/Experiences.json'

export default class ProjectsSection extends Component {
    constructor(props) {
        super(props)
        this.handleTagSelection = this.handleTagSelection.bind(this)
        this.state = {
            skillMapping: {},
            statusMapping: {},
            typeMapping: {}
        }
        this.parseTags = this.parseTags.bind(this)
        this.updateDisplayedProjects = this.updateDisplayedProjects.bind(this)
        this.displayAllProjects = this.displayAllProjects.bind(this)
    }

    componentDidMount() {
        this.parseTags()
    }

    parseTags() {
        var skillMapping = {}
        var statusMapping = {}
        var typeMapping = {}
        projectDetails.forEach((project) => {
            // var skillSource = "Projects"
            project.technologies.forEach((technology) => {
                if (skillMapping[technology] === undefined)
                    skillMapping[technology] = new Set()
                // if (skillMapping[technology][skillSource] === undefined)
                //     skillMapping[technology][skillSource] = new Set()
                skillMapping[technology].add(project.name)
            })
            if (statusMapping[project.status] === undefined)
                statusMapping[project.status] = new Set()
            statusMapping[project.status].add(project.name)
            if (typeMapping[project.type] === undefined)
                typeMapping[project.type] = new Set()
            typeMapping[project.type].add(project.name)

        })
        this.setState({
            skillMapping: skillMapping,
            statusMapping: statusMapping,
            typeMapping: typeMapping
        })
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
        var selectedTags = document.getElementsByClassName("selectedTag")
        var detailedProjectCardContainers = document.getElementsByClassName("detailedProjectCardContainer");
        if (selectedTags.length === 0)
            this.displayAllProjects()
        else {
            var projectNamesOfProjectsToDisplay = new Set()
            for (let selectedTag of selectedTags) {
                var selectedTagValue = selectedTag.getAttribute('data-tag-value')
                var projectNamesCorrespondingToTag;
                if (this.state.skillMapping[selectedTagValue])
                    projectNamesCorrespondingToTag = this.state.skillMapping[selectedTagValue]
                else if (this.state.statusMapping[selectedTagValue])
                    projectNamesCorrespondingToTag = this.state.statusMapping[selectedTagValue]
                else if (this.state.typeMapping[selectedTagValue])
                    projectNamesCorrespondingToTag = this.state.typeMapping[selectedTagValue]


                projectNamesCorrespondingToTag.forEach((projectName) => {
                    projectNamesOfProjectsToDisplay.add(projectName)
                })
            }
            for (let container of detailedProjectCardContainers) {
                container.classList.add("hide")
                container.classList.remove("show")
            }
            setTimeout(() => {
                var containersToHide = document.getElementsByClassName("hide")
                var detailedProjectCardContainers = document.getElementsByClassName("detailedProjectCardContainer");
                for (let container of containersToHide) {
                    container.style.display = "none"
                }
                for (let container of detailedProjectCardContainers) {
                    var projectName = container.getElementsByClassName("detailedProjectCardProjectName")[0].innerHTML
                    if (projectNamesOfProjectsToDisplay.has(projectName)) {
                        container.classList.add("aos-animate")
                        container.style.display = "block"

                        container.classList.add("show")
                        container.classList.remove("hide")
                    }
                }

            }, 1000)
        }
    }

    displayAllProjects() {
        var detailedProjectCardContainers = document.getElementsByClassName("detailedProjectCardContainer");
        var selectedTags = document.getElementsByClassName("selectedTag")

        for (let selectedTag of selectedTags) {
            selectedTag.classList.remove("selectedTag")
        }
        for (let container of detailedProjectCardContainers) {
            container.classList.add("hide")
            container.classList.remove("show")
        }
        setTimeout(() => {
            for (let container of detailedProjectCardContainers) {
                if (container.classList.contains("hide")) {
                    container.style.display = "block"
                    container.classList.add("show")
                    container.classList.remove("hide")
                }
            }
        }, 1000)
    }

    render() {
        return (
            <section id="projectsSectionContainer" className="projectsViewSection">
                <div className="iframeContainer">
                    <div className="x">X</div>
                    <iframe className="sample" title="sample"></iframe>
                </div>
                <div id="detailedProjectsContainer">
                    <h2>All Projects</h2>
                    <div id="allTagsContainer">
                        <p className="tagTitle">Skills:</p>
                        <div className="tagsContainer">
                            {Object.keys(this.state.skillMapping).map((skill) => (
                                <span className="skillTag tag" key={skill} data-tag-value={skill} onClick={this.handleTagSelection}>{skill}</span>
                            ))}
                        </div>
                        <div className="tagsContainer">
                            <p className="tagTitle">Type:</p>
                            {Object.keys(this.state.typeMapping).map((type) => (
                                <span className="typeTag tag" key={type} data-tag-value={type} onClick={this.handleTagSelection}>{type}</span>
                            ))}
                        </div>
                        <div className="tagsContainer">
                            <p className="tagTitle">Status:</p>
                            {Object.keys(this.state.statusMapping).map((status) => (
                                <span className="statusTag tag" key={status} data-tag-value={status} onClick={this.handleTagSelection}>{status}</span>
                            ))}
                        </div>
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