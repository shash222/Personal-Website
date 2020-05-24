import React from 'react';
import { Component } from 'react';
import '../styles/HomeViewStyles/HomeView.css'
import HomeIntro from '../components/HomeViewComponents/HomeIntro.js'
// import HomeAboutMe from '../components/HomeViewComponents/HomeAboutMe.js'
import HomeEducationSection from '../components/HomeViewComponents/HomeEducationSection.js'
import HomeExperiencesSection from '../components/HomeViewComponents/HomeExperiencesSection.js'
// import HomeSkillsSection from '../components/HomeViewComponents/HomeSkillsSection.js'
import HomeProjectsSection from '../components/HomeViewComponents/HomeProjectsSection.js'
import HomeViewNavBar from '../components/HomeViewComponents/HomeViewNavBar.js';
import HomeNonTechSkillsSection from '../components/HomeViewComponents/HomeNonTechSkillsSection';
import HomeTechSkillsSection from '../components/HomeViewComponents/HomeTechSkillsSection';
import homeViewSections from '../constants/HomeViewLinks.json'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class HomeView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayedSectionNumber: 0,
            prevSectionId: "",
            nextSectionId: homeViewSections.sections[1].referenceId
        }
        this.getSectionNumber = this.getSectionNumber.bind(this)
        this.handleSectionChange = this.handleSectionChange.bind(this)
    }

    componentDidMount() {
        this.handleSectionChange(0)
    }

    getSectionNumber() {
        const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const elementDistanceFromTop = document.querySelector('section').getBoundingClientRect().top
        return Math.abs(elementDistanceFromTop / vh);
    }

    handleSectionChange(incrementValue) {
        var newSectionNumber = this.state.displayedSectionNumber + incrementValue
        var prevSection = homeViewSections.sections[newSectionNumber - 1];
        var nextSection = homeViewSections.sections[newSectionNumber + 1];
        var nextSectionId = "";
        var prevSectionId = "";
        if (newSectionNumber === 0) {
            document.querySelector('.navigationArrowContainer.down').classList.add("homeIntroPosition")
        } else {
            document.querySelector('.navigationArrowContainer.down').classList.remove("homeIntroPosition")
        }
        if (newSectionNumber > 0) {
            prevSectionId = prevSection.referenceId
            document.querySelector('.navigationArrowContainer.up').style.visibility = "initial"
        } else {
            document.querySelector('.navigationArrowContainer.up').style.visibility = "hidden"
        }
        if (newSectionNumber < homeViewSections.sections.length - 1) {
            nextSectionId = nextSection.referenceId;
            document.querySelector('.navigationArrowContainer.down').style.visibility = "initial"
        } else {
            document.querySelector('.navigationArrowContainer.down').style.visibility = "hidden"
        }
        this.setState({
            displayedSectionNumber: newSectionNumber,
            prevSectionId: prevSectionId,
            nextSectionId: nextSectionId
        })


    }

    render() {
        return (
            <div id="homeView" className="view">
                <div className="homeNavigationArrowContainer navigationArrowContainer viewNavigationArrowContainer up fixed">
                    <Link
                        activeClass="active"
                        to={this.state.prevSectionId}
                        spy={true}
                        onSetActive={() => this.handleSectionChange(-1)}
                        duration={1000}>
                        <FontAwesomeIcon icon={faChevronUp} size="lg" />
                    </Link>
                </div>
                <HomeViewNavBar handleSectionChange={this.handleSectionChange} currentSectionNumber={this.state.displayedSectionNumber} getCurrentSectionNumber={this.getSectionNumber} />
                <HomeIntro />
                <HomeTechSkillsSection />
                <HomeNonTechSkillsSection />
                <HomeEducationSection />
                <HomeExperiencesSection />
                <HomeProjectsSection />
                <div className="homeNavigationArrowContainer navigationArrowContainer viewNavigationArrowContainer down fixed">
                    <Link
                        activeClass="active"
                        to={this.state.nextSectionId}
                        spy={true}
                        onSetActive={() => this.handleSectionChange(1)}
                        duration={1000}>
                        <FontAwesomeIcon icon={faChevronDown} size="lg" />
                    </Link>
                </div>
            </div>
        );
    }

}