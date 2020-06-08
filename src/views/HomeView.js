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
        // this.handleSectionChange(0)
        // window.addEventListener('scroll', this.setHomeViewNavLinkToActive)
    }

    getSectionNumber() {
        const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const elementDistanceFromTop = document.querySelector('section').getBoundingClientRect().top
        return Math.abs(elementDistanceFromTop / vh);
    }

    handleSectionChange(incrementValue) {
        // Number of section being scrolled to
        var newSectionNumber = this.state.displayedSectionNumber + incrementValue
        var prevSection = homeViewSections.sections[newSectionNumber - 1];
        var nextSection = homeViewSections.sections[newSectionNumber + 1];

        // ID of section below current section to assign "to" property to in Link component
        var nextSectionId = "";

        // ID of section above current section to assign "to" property to in Link component
        var prevSectionId = "";
        var downArrowContainer = document.querySelector('.navigationArrowContainer.down')
        var upArrowContainer = document.querySelector('.navigationArrowContainer.up')

        // Repositions down arrow if intro section is displayed
        if (newSectionNumber === 0) {
            downArrowContainer.classList.add("homeIntroPosition")
        } else {
            downArrowContainer.classList.remove("homeIntroPosition")
        }

        // Displays up arrow if any section other than the first one is displayed
        if (newSectionNumber > 0) {
            prevSectionId = prevSection.referenceId
            upArrowContainer.style.visibility = "initial"
        } else {
            upArrowContainer.style.visibility = "hidden"
        }

        // Displays down arrow if any section other than the last  one is displayed
        if (newSectionNumber < homeViewSections.sections.length - 1) {
            nextSectionId = nextSection.referenceId;
            downArrowContainer.style.visibility = "initial"
        } else {
            downArrowContainer.style.visibility = "hidden"
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
                        // spy={true}
                        // onSetActive={() => this.handleSectionChange(-1)}
                        smooth={true}
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
                {/* <section id="div0" className="sectionDiv homeIntro">
                    <h1>div0</h1>
                </section>
                <section id="div1" className="sectionDiv">
                    <h1>div1</h1>
                </section>
                <section id="div2" className="sectionDiv">
                    <h1>div2</h1>
                </section>
                <section id="div3" className="sectionDiv">
                    <h1>div3</h1>
                </section>
                <section id="div4" className="sectionDiv">
                    <h1>div4</h1>
                </section>
                <section id="div5" className="sectionDiv">
                    <h1>div5</h1>
                </section> */}
                <div className="homeNavigationArrowContainer navigationArrowContainer viewNavigationArrowContainer down fixed">
                    <Link
                        activeClass="active"
                        to={this.state.nextSectionId}
                        // spy={true}
                        // onSetActive={() => this.handleSectionChange(1)}
                        smooth={true}
                        duration={1000}>
                        <FontAwesomeIcon icon={faChevronDown} size="lg" />
                    </Link>
                </div>
            </div>
        );
    }

}