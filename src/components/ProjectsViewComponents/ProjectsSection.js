import React, { Component } from 'react';
import projectDetails from '../../constants/Projects.json'
import DetailedProjectCard from './/DetailedProjectCard.js'
import '../../styles/ProjectsViewStyles/ProjectsSection.css'

export default class ProjectsSection extends Component {
    constructor(props) {
        super(props)
        this.handleTagSelection = this.handleTagSelection.bind(this)
        this.state = {
            skillMapping: {},
            statusMapping: {},
            typeMapping: {},
            skills: new Set(),
            types: new Set(),
            statuses: new Set(),
            autocompleteResults: [],
            showAutocompleteResults: false,
            hoveringOverAutocompleteResult: false
        }
        this.parseTags = this.parseTags.bind(this)
        this.updateDisplayedProjects = this.updateDisplayedProjects.bind(this)
        this.displayAllProjects = this.displayAllProjects.bind(this)
        this.handleViewButtonClick = this.handleViewButtonClick.bind(this)
        this.getDropdownValues = this.getDropdownValues.bind(this)
        this.handleSampleDivs = this.handleSampleDivs.bind(this)
    }

    componentDidMount() {
        this.parseTags()
    }

    parseTags() {
        var skillMapping = {}
        var statusMapping = {}
        var typeMapping = {}
        var skills = new Set();
        var types = new Set();
        var statuses = new Set();
        projectDetails.forEach((project) => {
            project.technologies.forEach((technology) => {
                skills.add(technology);
                if (skillMapping[technology] === undefined)
                    skillMapping[technology] = new Set()
                skillMapping[technology].add(project.name)
            })
            statuses.add(project.status)
            types.add(project.type)
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
            typeMapping: typeMapping,
            skills: skills,
            types: types,
            statuses: statuses
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
                var projectNamesCorrespondingToTag = [];
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

    getDropdownValues(e) {
        fetch(`http://hashmi.site:8080/SpellCheck/autocompleteBackup?words=${[...this.state.skills, ...this.state.statuses, ...this.state.types]}&search=${e.target.value}`).then((res) => {
            return (res.json())
        }).then((res) => {
            let autocompleteResults = res.map((r) => {
                return r.word
            })

            autocompleteResults = [...new Set(autocompleteResults)].sort((a, b) => {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            });
            this.setState({ autocompleteResults: autocompleteResults })

        }).catch((e) => {
            console.log("Ran into error");
            console.log(e);
        });
    }

    showAutocompleteResults(showAutocompleteResults, hoveringOverAutocompleteResult) {
        if (!hoveringOverAutocompleteResult)
            this.setState({ showAutocompleteResults: showAutocompleteResults, hoveringOverAutocompleteResult: hoveringOverAutocompleteResult })
    }

    handleAutocompleteResultHover(hoveringOverAutocompleteResult) {
        if (this.state.hoveringOverAutocompleteResult !== hoveringOverAutocompleteResult)
            this.setState({ hoveringOverAutocompleteResult: hoveringOverAutocompleteResult })
    }

    handleDropdownTagSelection(e) {
        var tags = document.getElementsByClassName("tag");
        Array.from(tags).forEach((tag) => {
            if (tag.innerHTML === e.target.innerHTML) {
                tag.classList.add("selectedTag")
                this.updateDisplayedProjects()
                this.showAutocompleteResults(false, false)
                document.querySelector("#autocompleteContainer>input").value = ""
                return;
            }
        })
    }

    handleSampleDivs(e) {
        var buttons = document.getElementsByTagName("button")
        var openSampleNode = document.getElementsByClassName("iframeContainer")[0];
        // var openSampleNode = undefined
        for (let button of buttons) {
            // var sampleNode = this.getSampleNode(button.parentNode.parentNode)
            // if (button !== e.target) {
            if (button !== undefined && button.classList.contains("active")) {
                button.classList.remove("active")
                openSampleNode.classList.remove("selected")
                openSampleNode.classList.add("unselected")
            }
            // }
        }
        if (e.target.tagName.toLowerCase() === "button") {
            this.handleViewButtonClick(e, openSampleNode)
        }

    }

    handleViewButtonClick(e, sampleNode) {
        var iframeContainer = document.getElementsByClassName("iframeContainer")[0];
        if (sampleNode !== undefined && e.target.classList.contains("active")) {
            e.target.classList.remove("active")
            // iframeContainer.classList.remove("selected")
            // iframeContainer.classList.add("unselected")
            sampleNode.classList.remove("selected")
            sampleNode.classList.add("unselected")
            window.setTimeout(() => {
                if (e.targetNode)
                    e.target.parentNode.scrollIntoView({ block: "center" })
            }, 500)
        } else {
            e.target.classList.add("active")
            // iframeContainer.classList.add("selected")
            // iframeContainer.classList.remove("unselected")
            sampleNode.classList.add("selected")
            sampleNode.classList.remove("unselected")
            window.setTimeout(() => { sampleNode.scrollIntoView({ block: "center" }) }, 500);
        }
        iframeContainer.classList.add("selected");
        document.getElementsByClassName("sample")[0].src = e.target.getAttribute("data-sample-url")
    }

    render() {
        return (
            <section id="projectsSectionContainer" className="projectsViewSection">
                <div className="iframeContainer">
                    <div className="x" onClick={this.handleSampleDivs}>X</div>
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
                    <div id="autocompleteContainer">
                        <input type="text" onKeyUp={(event) => this.getDropdownValues(event)} onFocus={() => this.showAutocompleteResults(true, this.state.hoveringOverAutocompleteResult)} onBlur={() => this.showAutocompleteResults(false, this.state.hoveringOverAutocompleteResult)} placeholder="Search for tags" autoComplete="off"></input>
                        {this.state.showAutocompleteResults
                            ? <div id="autocompleteResultsContainer">
                                {this.state.autocompleteResults.map((r) => (
                                    <button key={r + "DropdownItem"} className="autocompleteResult" onClick={(event) => this.handleDropdownTagSelection(event)} onMouseOver={() => this.handleAutocompleteResultHover(true)} onMouseOut={() => this.handleAutocompleteResultHover(false)}>{r}</button>
                                ))}
                            </div>
                            : null}
                    </div>
                    <div id="detailedProjectCardsContainer">
                        {projectDetails.map((project, i) => (
                            <DetailedProjectCard key={project.name} delay={i} project={project} getDropdownValues={this.handleSampleDivs} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}