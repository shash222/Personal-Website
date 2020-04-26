import React, { Component } from 'react';
import '../styles/ProjectCard.css'

export default class ProjectCard extends Component {
    render() {
        return (
            <div className="projectCardWrapper cardWrapper">
                <div className="projectCard card" data-aos="flip-right" data-aos-duration="1000" data-aos-delay={this.props.delay * 150}>
                    <div className="front">
                        <p className="projectName">{this.props.projectDetail.name}</p>
                    </div>
                    <div className="back">
                        <p className="projectDescription">{this.props.projectDetail.description}</p>
                        <a href={this.props.projectDetail.href} className="projectLink">More</a>
                    </div>
                </div>
            </div>
        );
    }
}