import React from 'react';
import { Component } from 'react';
import ProjectCard from './ProjectCard.js'
import projectDetails from '../../constants/Projects.json'
import { NavLink } from 'react-router-dom';
import '../../styles/HomeViewStyles/HomeProjectsSection.css'

export default class HomeProjectsSection extends Component {
    render() {
        return (
            <section id="homeProjectsSection" className="homePageSectionContainer">
                <div className="sectionContent" id="projectsSectionContent">
                    <h2>Featured Projects</h2>
                    <div id="projectsContainer">
                        {projectDetails.filter((project) => {
                            return project.featured;
                        }).map((project, i) => (
                            <ProjectCard key={project.name} projectDetail={project} delay={i + 1} />
                        ))}
                    </div>
                    <div id="allProjectsLinkContainer">
                        <NavLink to="/projects"><span id="allProjectsLink">More Projects</span></NavLink>
                    </div>
                </div>
            </section>
        );
    }
}