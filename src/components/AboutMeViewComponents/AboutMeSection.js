import React, { Component } from 'react';
import '../../styles/AboutMeViewStyles/AboutMeSection.css';
import AboutMeCard from './AboutMeCard.js'
import DescriptionCard from './DescriptionCard.js'
import descriptionWords from '../../constants/DescriptionWords.json';
import aboutMeCardQuestions from '../../constants/AboutMeQuestions'

export default class AboutMeSection extends Component {
    render() {
        return (
            <section id="aboutMeSectionContainer">
                <div id="detailedAboutMeContainer">
                    <h2>About Me</h2>
                    {/* <p>Motivated software developer with a background in Computer Engineering and Computer Science and a demonstrated history of experience in a variety of front-end, back-end, database and server-less computing technologies. Skilled in Java, C, Python, ReactJS, AWS, SQL, JavaScript, Linux and more. </p> */}
                    <div id="descriptionCards">
                        {descriptionWords.map((word) => (
                            <DescriptionCard key={word.word} word={word} />
                        ))}
                    </div>
                    <h3 id="faqHeading">FAQs</h3>
                    <div id="aboutMeCardsContainer">
                        {aboutMeCardQuestions.map((question, i) => (
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