import React from 'react';
import { Component } from 'react';
import '../../styles/HomeViewStyles/HomeIntro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';
import resume from '../../res/Salman_Hashmi_Resume.pdf'

export default class HomeIntro extends Component {

    render() {
        return (
            <section className="homePageSectionContainer introSection" id="homeIntroSection">
                <div id="introSection" className="sectionContent">
                    <div id="descriptionContainer">
                        <h1 id="name" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">Salman Hashmi</h1>
                        <h1 id="title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">Software Engineer</h1>
                        <p id="description" data-aos="fade-in" data-aos-duration="2500" data-aos-delay="600">Welcome to my portfolio site! My name is Salman Hashmi and I am a professional software engineer at SAP with a passion for making an impact. Feel free to explore my website to learn more about me, my experiences and projects I have worked on.</p>
                    </div>
                    <div id="homeResourcesContainer">
                        {(!window.matchMedia('(max-width: 1300px)').matches)
                            ? [
                                <a className="homeResource" rel="noopener noreferrer" target="_blank" href="https://github.com/shash222" id="homeGitHubLink" data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1000" data-aos-once={true}>
                                    <FontAwesomeIcon icon={faGithub} size="lg" />
                                    <p>GitHub</p>
                                </a>,
                                <a className="homeResource" rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/salman-a-hashmi" id="homeLinkedInLink" data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1000" data-aos-once={true}>
                                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                                    <p>LinkedIn</p>
                                </a>]
                            : [
                                <NavLink to="/about" className="homeResource" data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1000" data-aos-once={true}><p>About Me</p></NavLink>,
                                <NavLink to="/contact" className="homeResource" data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1000" data-aos-once={true}><p>Contact Me</p></NavLink>,
                            ]
                        }

                        <a className="homeResource" href={resume} id="homeResumeLink" download data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1000" data-aos-once={true}>
                            <FontAwesomeIcon icon={faDownload} size="lg" />
                            <p>Resume</p>
                        </a>
                    </div>
                </div>

                <div id="arrowContainer">

                </div>
            </section >
        );
    }
}
