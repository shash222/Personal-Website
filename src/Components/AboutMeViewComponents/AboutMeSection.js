import React, { Component } from 'react';
import '../../styles/AboutMeViewStyles/AboutMeSection.css';
import AboutMeCard from './AboutMeCard.js'
import aboutMeCardQuestions from '../../constants/AboutMeQuestions'

export default class AboutMeSection extends Component {
    render() {
        return (
            <section id="aboutMeSectionContainer">
                <div id="detailedAboutMeContainer">
                    <h2>About Me</h2>
                    <p>Motivated software developer with a background in Computer Engineering and Computer Science and a demonstrated history of experience in a variety of front-end, back-end, database and server-less computing technologies. Skilled in Java, C, Python, ReactJS, AWS, SQL, JavaScript, Linux and more. </p>

                    <div id="aboutMeCardsContainer">
                        {aboutMeCardQuestions.map((question, i) => (
                            // console.log(question.question, typeof (question.question))

                            question.display
                                ? <AboutMeCard key={question.question} delay={i} question={question.question} answer={question.answer} />
                                : null

                        ))}
                    </div>
                </div>
            </section>
        );
    }
}