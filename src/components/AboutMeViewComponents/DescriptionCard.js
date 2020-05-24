import React, { Component } from 'react';
import '../../styles/AboutMeViewStyles/DescriptionCard.css'

export default class DescriptionCard extends Component {
    render() {
        return (
            <div className="descriptionCardWrapper">
                <div className="descriptionCard">
                    <div className="hexagonContainer" data-aos="rotate" data-aos-duration="1500">
                        <div className="hexagon">
                        </div>
                        <p className="descriptionWord">{this.props.word.word}</p>

                    </div>
                </div >
            </div >
        )
    }
}