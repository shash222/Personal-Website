import React, { Component } from 'react';
import '../../styles/ProjectsViewStyles/DetailedProjectCard.css'



export default class DetailedProjectCard extends Component {

    constructor(props) {
        super(props)
        this.getChildren = this.getChildren.bind(this)
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


    render() {
        return (
            <div className="detailedProjectCardContainer" data-aos="zoom-in" data-aos-duration="1200" data-aos-once="true">
                <div className="detailedProjectCard">
                    <div className="detailedProjectCardInfo">
                        <h3 className="detailedProjectCardProjectName">{this.props.project.name}</h3>
                        <p className="detailedProjectCardProjectDescription">{this.props.project.description}</p>
                        <p className="skills"><b>Skills: </b>{this.props.project.technologies.join(", ")}</p>
                        <p className="status"><b>Status: </b>
                            {this.props.project.status === "Ongoing"
                                ? <span className="ongoing">{this.props.project.status}</span>
                                : this.props.project.status === "In Progress"
                                    ? <span className="inProgress">{this.props.project.status}</span>
                                    : <span className="completed">{this.props.project.status}</span>}</p>

                    </div>
                    <div className="detailedProjectCardClickablesContainer">
                        {this.props.project.sample
                            ? (
                                [<a key={this.props.project.name + "SiteLink"} target="_blank" rel="noopener noreferrer"
                                    href={this.props.project.sampleLink}>Visit Website</a>,
                                // (!window.matchMedia('(max-width: 1300px)').matches)
                                // Desktop Version
                                <button key={this.props.project.name + "SampleButton"} onClick={this.props.handleClick} data-sample-url={this.props.project.sampleLink}>View Sample</button>
                                    // Mobile Version
                                ]
                            )
                            : null}
                        {this.props.project.githubLink
                            // If github link included and desktop version
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