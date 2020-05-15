import React, { Component } from 'react';
import '../../styles/ContactViewStyles/ContactCard.css'


export default class ContactCard extends Component {
    render() {
        return (
            <div className="contactCardContainer" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay={250 * this.props.delay}>
                <div className="contactCard">
                    <a href={this.props.contactDetail.link} target="_blank" rel="noopener noreferrer">
                        <div className="contactDetailLogoContainer" style={{ backgroundImage: `url(${require("../../" + this.props.contactDetail.imgSrc)})` }}></div>
                    </a>
                    <a href={this.props.contactDetail.link} target="_blank" rel="noopener noreferrer">{this.props.contactDetail.value}</a>
                </div>
            </div>
        )

    }
}
