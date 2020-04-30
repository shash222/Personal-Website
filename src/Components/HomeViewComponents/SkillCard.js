import React, { Component } from 'react';
import '../../styles/HomeViewStyles/SkillCard.css'

export default class SkillCard extends Component {
    render() {
        return (
            <div className="skillCardWrapper cardWrapper">
                <div className="skillCard card" data-aos="flip-right" data-aos-duration="1000" data-aos-delay={this.props.delay * 150}>
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