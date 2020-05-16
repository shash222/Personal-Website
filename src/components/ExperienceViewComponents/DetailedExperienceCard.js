import React, { Component } from 'react';
import '../../styles/ExperienceViewStyles/DetailedExperienceCard.css'

export default class DetailedExperienceCard extends Component {
    render() {
        return (
            <div className="detailedExperienceCardContainer" data-aos={this.props.count % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="1000">
                <div className="detailedExperienceCardHeader">
                    <h3 className="detailedExperienceCardCompanyName">{this.props.experience.company}</h3>
                    <p className="detailedExperienceCardCompanyRole">{this.props.experience.position}</p>
                </div>
                <div className="detailedExperienceCardBody">
                    <p className="detailedExperienceCardDescription"><b>Role Description: </b>{this.props.experience.description}</p>
                    <b><u>Task:</u></b>
                    <ul>
                        {this.props.experience.bullets.map((bullet, i) => (
                            <li key={this.props.experience.company + "Bullet" + i} className="detailedExperienceCardBullet">{bullet}</li>
                        ))}
                    </ul>
                    {/* <p className="detailedExperienceCardTakeAway"><b>Key Takeaway: </b>{this.props.experience.takeAway}</p> */}
                    <p className="detailedExperienceCardSkills"><b>Skills: </b>{this.props.experience.skillsGained.join(", ")}</p>
                </div>
                <div className="detailedExperienceCardFooter">
                    <span className="detailedExperienceCardCompanyWorkDuration">{this.props.experience.startDate} - {this.props.experience.endDate}</span>
                    <span className="detailedExperienceCardCompanyWorkLocation">{this.props.experience.location}</span>
                </div>
            </div>
        )
    }
}
