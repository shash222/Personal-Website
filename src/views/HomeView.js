import React from 'react';
import { Component } from 'react';
import '../styles/HomeViewStyles/HomeView.css'
import HomeIntro from '../components/HomeViewComponents/HomeIntro.js'
import HomeEducationSection from '../components/HomeViewComponents/HomeEducationSection.js'
import HomeExperiencesSection from '../components/HomeViewComponents/HomeExperiencesSection.js'
import HomeProjectsSection from '../components/HomeViewComponents/HomeProjectsSection.js'
import HomeViewNavBar from '../components/HomeViewComponents/HomeViewNavBar.js';
import HomeNonTechSkillsSection from '../components/HomeViewComponents/HomeNonTechSkillsSection';
import HomeTechSkillsSection from '../components/HomeViewComponents/HomeTechSkillsSection';
import homeViewSections from '../constants/HomeViewLinks.json'
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
        this.openHomeNavBar = this.openHomeNavBar.bind(this);
        this.closeHomeNavBar = this.closeHomeNavBar.bind(this);
    }

    componentDidMount() {
        this.handleSectionChange(0)
    }

    openHomeNavBar() {
        document.getElementById("homeViewNavBarContainer").classList.add('show')
        document.getElementById("homeViewNavBarContainer").classList.remove('hide')
        document.getElementsByClassName('fa-times')[0].style.display = "block";
        document.getElementsByClassName('fa-bars')[0].style.display = "none";
        // this.setState({ isHomeNavBarOpen: true })
    }

    closeHomeNavBar() {
        document.getElementById("homeViewNavBarContainer").classList.add('hide')
        document.getElementById("homeViewNavBarContainer").classList.remove('show')
        document.getElementsByClassName('fa-times')[0].style.display = "none";
        document.getElementsByClassName('fa-bars')[0].style.display = "block";
        // this.setState({ isHomeNavBarOpen: false })
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
        if (newSectionNumber > 0 && prevSection) {
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
                <div className="homeNavigationArrowContainer navigationArrowContainer viewNavigationArrowContainer up fixed" onClick={() => this.props.handleSectionNavigationArrowClick(this.state.displayedSectionNumber - 1)}>
                    <FontAwesomeIcon icon={faChevronUp} size="lg" />
                </div>
                <HomeViewNavBar handleSectionChange={this.handleSectionChange} currentSectionNumber={this.state.displayedSectionNumber} getCurrentSectionNumber={this.getSectionNumber} handleSectionNavigationArrowClick={this.props.handleSectionNavigationArrowClick} closeNavBar={this.closeHomeNavBar} />
                <HomeIntro />
                <HomeTechSkillsSection />
                <HomeNonTechSkillsSection />
                <HomeEducationSection />
                <HomeExperiencesSection />
                <HomeProjectsSection />
                <div className="homeNavigationArrowContainer navigationArrowContainer viewNavigationArrowContainer down fixed" onClick={() => this.props.handleSectionNavigationArrowClick(this.state.displayedSectionNumber + 1)}>
                    <FontAwesomeIcon icon={faChevronDown} size="lg" />
                </div>
            </div>
        );
    }

}