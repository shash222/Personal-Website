import React from 'react';
import { Component } from 'react';
import EducationItem from './EducationItem.js';
import education from '../../constants/Education.json'
import CertificationItem from './CertificationItem'
import '../../styles/HomeViewStyles/HomeEducationSection.css'

export default class HomeEducationSection extends Component {
    render() {
        return (
            <section id="homeEducationSection" className="homePageSectionContainer">
                <div className="sectionContent">
                    <h2>Education</h2>
                    <div id="educationContainer">
                        {education.map((edu, i) => (
                            <EducationItem key={edu.school + i} education={edu} />
                        ))}
                    </div>
                    <div id="certificationContainer">
                        <CertificationItem />
                    </div>
                </div>
            </section>
        );
    }
}