import React from 'react';
import { Component } from 'react';
import '../styles/HomeView.css'

export default class ProjectsView extends Component {
    render() {
        return(
            <div id="projectsView" onScroll={() => this.animateHomeViewNavBar}>
                Projects
            </div>
        );
    }
}