import React from 'react';
import { Component } from 'react';
import EducationCard from './EducationCard.js';
import EducationItem from './EducationItem.js';
import CourseCard from './CourseCard.js'
import education from '../../constants/Education.json'
import '../../styles/HomeViewStyles/HomeEducationSection.css'

export default class HomeEducationSection extends Component {
    render() {
        return (
            <section id="homeEducationSection" className="homePageSectionContainer">
                <div className="sectionContent" data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="top-center">
                    <h2>Education</h2>
                    <div id="educationContainer">
                        {education.map((edu, i) => (
                            <EducationItem key={edu.school + i} education={edu} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}