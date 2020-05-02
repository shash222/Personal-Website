import React, {Component} from 'react';
import ContactViewIntroSection from '../components/ContactViewComponents/ContactViewIntroSection.js'
import ContactSection from '../components/ContactViewComponents/ContactSection.js'
import '../styles/ContactViewStyles/ContactView.css'

export default class ContactView extends Component {
    render() {
        return(
            <div id="contactView">
                <ContactViewIntroSection />
                <ContactSection />
            </div>
        )
    }
}