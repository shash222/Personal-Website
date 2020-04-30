import React, { Component } from 'react';
import '../../styles/HomeViewStyles/DescriptionCard.css'

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
                    <p className="descriptionWordText">{this.props.word.description}</p>
                </div >
            </div >
        )
    }
}