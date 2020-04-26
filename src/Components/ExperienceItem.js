import React from 'react';
import { Component } from 'react';
import '../styles/ExperienceItem.css'

export default class ExperienceItem extends Component {
    render() {
        return (
            <div className="experienceContainer">
                {/* <div className="connectingLine"></div> */}
                <div className="experienceContent">
                    <div className="connectingLine"></div>
                    {/* <p style={{float:"right"}}>tests</p> */}
                    <h3 className="companyName">{this.props.experience.company}</h3>
                    {/* <ul className="experienceDescription">
                        {this.props.experience.description.map((desc) => (
                            <li>{desc}</li>
                        ))}
                    </ul> */}
                    <p className="experienceDescription">{this.props.experience.description}</p>
                    {/* <p className="skillsGained"><span className="experienceSkillsTitle">Skills:</span> {this.props.experience.skillsGained.join(", ")}</p> */}
                </div>
            </div>
        );
    }
}