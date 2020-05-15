import React, { Component } from 'react';
import '../../styles/HomeViewStyles/SkillCard.css'

export default class SkillCard extends Component {
    render() {
        return (
            <div className="skillCardWrapper cardWrapper" data-aos="flip-up" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom">
                <div className="skillCard card">
                    <div className="front">
                        <p className="skillName">{this.props.skill}</p>
                    </div>
                    <div className="back">
                        {/* <p className="skillDescription">{this.props.skillDetail.description}</p> */}
                        <p className="skillDescription">{this.props.skillSources.join(", ")}</p>
                    </div>
                </div>
            </div>
        );
    }
}