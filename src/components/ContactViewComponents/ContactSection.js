import React, { Component } from 'react';
import ContactCard from './ContactCard.js'
import '../../styles/ContactViewStyles/ContactSection.css'
import contactDetails from '../../constants/ContactDetails.json'

export default class ContactView extends Component {
    render() {
        return (
            <section id="contactSectionContainer" className="contactViewSection">
                <div id="detailedContactContainer">
                    <h2>Contact</h2>
                    <div id="contactCardContainer">
                        {contactDetails.map((contactDetail, i) => (
                            <ContactCard key={contactDetail.contactMethod} delay={i} contactDetail={contactDetail}/>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}