import React, { Component } from 'react';
import '../../styles/HomeViewStyles/ProjectCard.css'

export default class ProjectCard extends Component {
    render() {
        return (
            (!window.matchMedia('(max-width: 1300px)').matches)
                // Desktop Version
                ? <div className="projectCardWrapper cardWrapper" data-aos="flip-right" data-aos-duration="1000" data-aos-delay={this.props.delay * 150}>
                    <div className="projectCard">
                        <p className="projectName">{this.props.projectDetail.name}</p>
                        <p className="projectDescription">{this.props.projectDetail.description}</p>

                    </div>
                    {/* <div className="projectCard card">
                        <div className="front">
                            <p className="projectName">{this.props.projectDetail.name}</p>
                        </div>
                        <div className="back">
                            <p className="projectDescription">{this.props.projectDetail.description}</p>
                        </div>
                    </div> */}
                </div>

                // Mobile version
                : <div className="projectCardWrapper cardWrapper" data-aos="flip-right" data-aos-duration="1000" data-aos-delay={this.props.delay * 150}>
                    <div className="projectCard card">
                        <div className="front">
                            <p className="projectName">{this.props.projectDetail.name}</p>
                            <p className="projectDescription">{this.props.projectDetail.description}</p>
                        </div>
                        {/* <div className="back">
                            <p className="projectDescription">{this.props.projectDetail.description}</p>
                        </div> */}
                    </div>
                </div>

        );
    }
}