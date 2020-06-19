import React, { Component } from 'react';
import '../../styles/HomeViewStyles/EducationCard.css'

export default class EducationCard extends Component {
    render() {
        return (
            <div className="educationCardWrapper cardWrapper">
                <div className="educationCardContainer">
                    <div className="educationContent">
                        <div className="schoolHeader">
                            <h3 className="schoolName">{this.props.education.school}</h3>
                            <p className="schoolLocation">{this.props.education.location}</p>
                        </div>
                        <div className="schoolHeaderSubText">
                            <p className="educationDescription">{this.props.education.description}</p>
                            {(!window.matchMedia('(max-width: 1300px)').matches)
                                // Desktop Version
                                ? <p className="enrolledDates">{this.props.education.startDate} - {this.props.education.graduationDate}</p>
                                // Mobile Version
                                : <p className="enrolledDates">{this.props.education.abbreviatedStartDate} - {this.props.education.abbreviatedGraduationDate}</p>
                            }

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}