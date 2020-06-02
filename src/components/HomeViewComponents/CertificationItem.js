import React, { Component } from 'react';
import CertificationCard from './CertificationCard.js'
import certifications from '../../constants/Certifications.json'
import '../../styles/HomeViewStyles/CertificationItem.css'

export default class CertificationItem extends Component {
    render() {
        return (
            <div className="certificationItemWrapper itemWrapper">
                <div className="certificationItemContainer">
                    <h3 className="relevantCertificationsHeading">Certifications</h3>
                    <div className="relevantCertificationsCardsContainer">
                        {certifications.map((certification, i) => (
                            <CertificationCard key={certification.certification} certification={certification} delay={i} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}