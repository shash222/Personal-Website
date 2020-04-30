import React, { Component } from 'react';
import '../../styles/HomeViewStyles/EducationCard.css'

export default class EducationCard extends Component {
    render() {
        return (
            <div className="educationCardWrapper cardWrapper">
                <h3 className="schoolName">{this.props.education.school}</h3>
                <div className="educationCardContainer">
                    <div className="educationContent">
                        {/* <h3 className="schoolName">{this.props.education.school}</h3> */}
                        <p className="educationDescription">{this.props.education.description}</p>
                        <p className="graduation"><span className="educationTextTitle">Location:</span><span className="educationTextValue">{this.props.education.location}</span></p>
                        <p className="graduation"><span className="educationTextTitle">Graduation:</span><span className="educationTextValue">{this.props.education.graduationDate}</span></p>
                        {/* <p className="relevantCourses"><span className="educationTextTitle">Relevant Courses:</span><span className="educationTextValue">{this.props.education.relevantCourses.join(", ")}</span></p> */}
                        {/* <p className="skillsGained"><span className="educationSkillsTitle">Skills:</span> {this.props.education.skillsGained.join(", ")}</p> */}
                    </div>
                </div>

            </div>
        )
    }
}