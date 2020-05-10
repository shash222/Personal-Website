import React, { Component } from 'react';
import '../../styles/HomeViewStyles/SkillCard.css'

export default class SkillCard extends Component {
    render() {
        return (
            <div className="skillCardWrapper cardWrapper" data-aos="flip-up" data-aos-duration="500" data-aos-anchor-placement="center-bottom">
                <div className="skillCard card">
                    <div className="front">
                        <p className="skillName">{this.props.skill}</p>
                    </div>
                    <div className="back">
                        {/* <p className="skillDescription">{this.props.skillDetail.description}</p> */}
                        {Object.keys(this.props.skillSources).map((source, i) => (
                            <p key={source + i} className="skillDescription"><b>{source}:</b> <span>{Array.from(this.props.skillSources[source]).join(", ")}</span></p>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}