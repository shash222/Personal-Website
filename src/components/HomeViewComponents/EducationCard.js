import React, { Component } from 'react';
import '../../styles/HomeViewStyles/EducationCard.css'

export default class EducationCard extends Component {
    render() {
        return (
            <div className="educationCardWrapper cardWrapper">
                <div className="educationCardContainer">
                    <div className="educationContent">
                        <div className="schoolHeader">
                            <h3 className="schoolName">{this.props.education.school}<span className="schoolLocation"> - {this.props.education.location}</span></h3>
                            <p className="enrolledDates">{this.props.education.startDate} - {this.props.education.graduationDate}</p>
                        </div>
                        <p className="educationDescription">{this.props.education.description}</p>
                    </div>
                </div>

            </div>
        )
    }
}