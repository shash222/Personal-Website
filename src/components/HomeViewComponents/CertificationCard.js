import React, { Component } from 'react';
import '../../styles/HomeViewStyles/CertificationCard.css'

export default class EducationCard extends Component {
    render() {
        return (
            <div className="certificationCardWrapper cardWrapper" data-aos="flip-right" data-aos-duration="500" data-aos-delay={this.props.delay * 100}>
                <div className="certificationCard card" >
                    <div className="front">
                        <p className="certification">{this.props.certification.certification}</p>
                        <p className="certificationPlatform">{this.props.certification.platform}</p>
                    </div>
                    <div className="back">
                        <p className="certificationStatus">{this.props.certification.status}</p>
                    </div>
                </div>
            </div>
        )
    }
}