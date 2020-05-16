import React from 'react';
import { Component } from 'react';
import '../../styles/HomeViewStyles/HomeIntro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default class HomeIntro extends Component {
    render() {
        return (
            <section className="homePageSectionContainer introSection" id="homeIntroSection">
                <div id="introSection" className="sectionContent">
                    <h1 id="name" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">Salman Hashmi</h1>
                    <h1 id="title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">Software Engineer</h1>
                    <div id="homeResourcesContainer">
                        <a className="homeResource" rel="noopener noreferrer" target="_blank" href="https://github.com/shash222" id="homeGitHubLink" data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1000">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                            <p>GitHub</p>
                        </a>
                        <a className="homeResource" rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/salman-a-hashmi" id="homeLinkedInLink" data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1000">
                            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                            <p>LinkedIn</p>
                        </a>
                        <a className="homeResource" href="../../res/resume.pdf" id="homeResumeLink" download data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1000">
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