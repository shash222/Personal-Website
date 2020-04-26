import React from 'react';
import { Component } from 'react';
import '../styles/HomeView.css'
import HomeIntro from '../components/HomeIntro.js'
import HomeAboutMe from '../components/HomeAboutMe.js'
import HomeEducationSection from '../components/HomeEducationSection.js'
import HomeExperiencesSection from '../components/HomeExperiencesSection.js'
import HomeSkillsSection from '../components/HomeSkillsSection.js'
import HomeProjectsSection from '../components/HomeProjectsSection.js'
import HomeViewNavBar from '../components/HomeViewNavBar.js';
import TopNavBar from '../components/TopNavBar.js';
import homeViewSections from '../constants/HomeViewLinks.json'
import AOS from 'aos';
import { Link } from 'react-scroll'

import 'aos/dist/aos.css';

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
        AOS.init();
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
            <div id="homeView">
                <div className="navigationArrowContainer up">
                    <Link
                        activeClass="active"
                        to={this.state.prevSectionId}
                        spy={true}
                        onSetActive={() => this.handleSectionChange(-1)}
                        duration={1000}>
                        <div id="upArrow" className="homeViewArrow"></div>
                    </Link>
                </div>
                <TopNavBar />
                <HomeViewNavBar handleSectionChange={this.handleSectionChange} currentSectionNumber={this.state.displayedSectionNumber}getCurrentSectionNumber={this.getSectionNumber} />
                <HomeIntro />
                <HomeAboutMe />
                <HomeEducationSection />
                <HomeExperiencesSection />
                <HomeProjectsSection />
                <HomeSkillsSection />
                <div className="navigationArrowContainer down">
                    <Link
                        activeClass="active"
                        to={this.state.nextSectionId}
                        spy={true}
                        onSetActive={() => this.handleSectionChange(1)}
                        duration={1000}>
                        <div id="downArrow" className="homeViewArrow"></div>
                    </Link>

                </div>
            </div>
        );
    }

}