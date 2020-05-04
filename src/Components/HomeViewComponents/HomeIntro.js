import React from 'react';
import { Component } from 'react';
import '../../styles/HomeViewStyles/HomeIntro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default class HomeIntro extends Component {
    render() {
        return (
            <section className="homePageSectionContainer" id="homeIntroSection">
                <div id="introSection" className="sectionContent">
                    <h2 id="name" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">Salman Hashmi</h2>
                    <p id="title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">Software Engineer</p>
                    <div id="homeResourcesContainer">
                        <a className="homeResource" rel="noopener noreferrer" target="_blank" href="https://github.com/shash222" id="homeGitHubLink">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                            <p>GitHub</p>
                        </a>
                        <a className="homeResource" rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/salman-a-hashmi" id="homeLinkedInLink">
                            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                            <p>LinkedIn</p>
                        </a>
                        <a className="homeResource" href="../../res/resume.pdf" id="homeResumeLink" download>
                            <FontAwesomeIcon icon={faDownload} size="lg" />
                            <p>Resume</p>
                        </a>
                    </div>
                </div>

                <div id="arrowContainer">

                </div>
            </section>
        );
    }
}