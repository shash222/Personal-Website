import React, { Component } from 'react';
import DetailedExperienceCard from './DetailedExperienceCard.js'
import '../../styles/ExperienceViewStyles/ExperienceSection.css'
import experience from '../../constants/Experiences.json'

export default class ExperienceSection extends Component {
    state = {
        parsedExperiences: {}
    }

    componentDidMount() {
        var parsedExperiences = {}
        experience.forEach((experience, i) => {
            if (!parsedExperiences[experience.type]) {
                parsedExperiences[experience.type] = []
            }
            parsedExperiences[experience.type].push(experience)
        })
        this.setState({ parsedExperiences: parsedExperiences })
    }

    scrollToPosition(position) {
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    }

    scrollToElement(id) {
        (!window.matchMedia('(max-width: 1300px)').matches)
            ? this.scrollToPosition(document.getElementById(id).offsetTop - 100)
            : this.scrollToPosition(document.getElementById(id).offsetTop)


    }

    render() {
        return (
            <section id="experienceSectionContainer" className="experienceViewSection">
                <div id="detailedExperienceContainer">
                    <h2>Experience</h2>
                    <nav id="experienceViewNavBar">
                        <ul id="experienceViewNavItems">
                            {Object.keys(this.state.parsedExperiences).map((type) => (
                                <li key={type + "NavItem"} className="experienceViewNavItem navItem">
                                    <button onClick={() => this.scrollToElement(`${type}Heading`)}>{type}</button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div id="detailedExperienceCardsContainer">
                        {Object.keys(this.state.parsedExperiences).map((type) => ([
                            <h3 key={type + "Heading"} id={type + "Heading"} className="experienceTypeHeading">{type}</h3>,
                            this.state.parsedExperiences[type].map((experience, i) => (
                                <DetailedExperienceCard key={experience.company + i} experience={experience} count={i} />
                            ))
                        ]))}
                    </div>
                </div>
            </section>
        );
    }
}