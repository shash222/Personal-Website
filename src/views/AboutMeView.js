import React, { Component } from 'react';
import '../styles/AboutMeViewStyles/AboutMeView.css';
import AboutMeIntro from '../components/AboutMeViewComponents/AboutMeIntroSection.js'
import AboutMeSection from '../components/AboutMeViewComponents/AboutMeSection.js'

export default class AboutMeView extends Component {
    render() {
        return (
            <div id="aboutMeView" className="view">
                <AboutMeIntro />
                <AboutMeSection />
            </div>
        );
    }
} 