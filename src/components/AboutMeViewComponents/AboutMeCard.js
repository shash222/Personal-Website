import React, { Component } from 'react';
import '../../styles/AboutMeViewStyles/AboutMeCard.css';

export default class AboutMeCard extends Component {
    render() {
        return (
            <div className="aboutMeCardContainer" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                <div className="aboutMeCardContent">
                    <div className="aboutMeCardQuestionWrapper">
                        <p className="aboutMeCardQuestion">{this.props.question}</p>
                    </div>
                    <p className="aboutMeCardAnswer">{this.props.answer}</p>
                </div>
            </div>
        );
    }
}