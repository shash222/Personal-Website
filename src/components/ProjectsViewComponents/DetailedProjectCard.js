import React, { Component } from 'react';
import '../../styles/ProjectsViewStyles/DetailedProjectCard.css'



export default class DetailedProjectCard extends Component {

    constructor(props) {
        super(props)
        this.handleViewButtonClick = this.handleViewButtonClick.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.getChildren = this.getChildren.bind(this)
        this.handleSampleDivs = this.handleSampleDivs.bind(this)
    }

    componentDidMount() {
        window.addEventListener('click', (e) => this.handleClick(e))
    }

    handleClick(e) {
        this.handleSampleDivs(e)
    }

    handleSampleDivs(e) {
        var buttons = document.getElementsByTagName("button")
        var openSampleNode = document.getElementsByClassName("iframeContainer")[0];
        // var openSampleNode = undefined
        for (let button of buttons) {
            // var sampleNode = this.getSampleNode(button.parentNode.parentNode)
            // if (button !== e.target) {
            if (button.classList.contains("active")) {
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

    getChildren(n, skipMe) {
        var r = [];
        for (; n; n = n.nextSibling)
            if (n.nodeType === 1 && n !== skipMe)
                r.push(n);
        return r;
    };

    getSiblings(n) {
        return this.getChildren(n.parentNode.firstChild, n);
    }

    getSampleNode(parentNode) {
        var siblings = this.getSiblings(parentNode)
        for (let sib of siblings) {
            if (sib.classList.contains("iframeContainer")) {
                return sib
            }
        }
    }

    handleViewButtonClick(e, sampleNode) {
        var iframeContainer = document.getElementsByClassName("iframeContainer")[0];
        if (e.target.classList.contains("active")) {
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
            <div className="detailedProjectCardContainer" data-aos="zoom-in" data-aos-duration="1200" data-aos-once="true">
                <div className="detailedProjectCard">
                    <h3 className="detailedProjectCardProjectName">{this.props.project.name}</h3>
                    <p className="detailedProjectCardProjectDescription">{this.props.project.description}</p>
                    <p className="skills"><b>Skills: </b>{this.props.project.technologies.join(", ")}</p>
                    <p className="status"><b>Status: </b>
                        {this.props.project.status === "Ongoing"
                            ? <span className="ongoing">{this.props.project.status}</span>
                            : this.props.project.status === "In Progress"
                                ? <span className="inProgress">{this.props.project.status}</span>
                                : <span className="completed">{this.props.project.status}</span>}</p>
                    <div className="detailedProjectCardClickablesContainer">
                        {this.props.project.sample
                            ? (
                                [<a key={this.props.project.name + "SiteLink"} target="_blank" rel="noopener noreferrer"
                                    href={this.props.project.sampleLink}>Visit Website</a>,
                                <button key={this.props.project.name + "SampleButton"} onClick={this.handleClick} data-sample-url={this.props.project.sampleLink}>View Sample</button>]
                            )
                            : null}
                        {this.props.project.githubLink
                            ? <a target="_blank" rel="noopener noreferrer"
                                href={this.props.project.githubLink}>View on GitHub</a>
                            : null}
                    </div>
                </div>

                {/* <div className="sample"></div> */}
            </div>
        )
    }
}