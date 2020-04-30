import React, { Component } from 'react';
import ProjectsIntroSection from '../components/ProjectsViewComponents/ProjectsIntroSection.js'
import ProjectsSection from '../components/ProjectsViewComponents/ProjectsSection.js'
import '../styles/ProjectsViewStyles/ProjectsView.css'

export default class ProjectsView extends Component {
    render() {
        return (
            <div id="projectsView">
                <ProjectsIntroSection />
                <ProjectsSection />
            </div>
        );
    }
}