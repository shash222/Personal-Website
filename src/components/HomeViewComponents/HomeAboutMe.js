import React from 'react';
import { Component } from 'react';
import '../../styles/HomeViewStyles/HomeAboutMe.css';
import DescriptionCard from './DescriptionCard.js'
import descriptionWords from '../../constants/DescriptionWords.json';
import { NavLink } from 'react-router-dom';

export default class HomeAboutMe extends Component {
    render() {
        return (
            <section id="homeAboutMeSection" className="homePageSectionContainer">
                <div id="aboutMe" className="sectionContent" data-aos="fade-in" data-aos-duration="3000" data-aos-offset="-100" data-aos-anchor-placement="center-center">
                    <h2>About Me</h2>
                    <div id="aboutContainer">
                        <div id="descriptionCards">
                            {descriptionWords.map((word) => (
                                <DescriptionCard key={word.word} word={word} />
                            ))}
                        </div>
                        <div id="aboutMeDescriptionContainer">
                            <div className="meImage"><div className="meImage-in1"><div className="meImage-in2"></div></div></div>
                            <p className="aboutMeText">Motivated software developer with a background in Computer Engineering and Computer Science and a demonstrated history of experience in a variety of front-end, back-end, database and server-less computing technologies. Skilled in Java, C, Python, ReactJS, AWS, SQL, JavaScript, Linux and more. </p>
                        </div>
                        <div id="moreAboutMeLinkContainer">
                            <NavLink to="/about"><span id="moreAboutMeLink">More About Me</span></NavLink>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}