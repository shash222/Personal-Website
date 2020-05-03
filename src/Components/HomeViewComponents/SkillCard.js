import React, { Component } from 'react';
import '../../styles/HomeViewStyles/SkillCard.css'

export default class SkillCard extends Component {
    render() {
        return (
            <div className="skillCardWrapper cardWrapper" data-aos="flip-right" data-aos-duration="500" data-aos-delay={this.props.delay * 100}>
                <div className="skillCard card">
                    <div className="front">
                        <p className="skillName">{this.props.skillDetail.name}</p>
                    </div>
                    <div className="back">
                        <p className="skillDescription">{this.props.skillDetail.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}