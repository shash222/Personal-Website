import React from 'react';
import { Component } from 'react';
import HomeView from './views/HomeView.js';
import ProjectsView from './views/ProjectsView.js';
import ExperienceView from './views/ExperienceView.js'
import ContactView from './views/ContactView.js'
import AboutMeView from './views/AboutMeView.js'
import { BrowserRouter as Router, Route, Switch, withRouter, NavLink } from 'react-router-dom';
import './App.css'
import TopNavBar from './components/HomeViewComponents/TopNavBar.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faChevronRight, faChevronLeft, faTimes, faHome, faBars } from '@fortawesome/free-solid-svg-icons'
import topNavLinksDetails from './constants/TopLinks.json'
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      topNavLinks: [""],
      beforeViewChangeIndex: 0,
      // The following 3 states refer to View Indices
      previousIndex: 0,
      currentIndex: 0,
      nextIndex: 0,
      // The following states refer to section indices within View
      currentSectionIndex: 0,
      isHomeNavBarOpen: false
    }
    this.addViewTransitionClass = this.addViewTransitionClass.bind(this)
    this.handleSectionNavigationArrowClick = this.handleSectionNavigationArrowClick.bind(this)
    this.updateViewNavArrowLinks = this.updateViewNavArrowLinks.bind(this)
    this.handleViewChange = this.handleViewChange.bind(this)
    this.getViewNavArrowText = this.getViewNavArrowText.bind(this)
    this.displayTopLeftButtons = this.displayTopLeftButtons.bind(this);
    this.openHomeNavBar = this.openHomeNavBar.bind(this)
    this.closeHomeNavBar = this.closeHomeNavBar.bind(this)
  }

  componentDidMount() {
    AOS.init();
    window.addEventListener('scroll', this.handleScroll)
    this.addViewTransitionClass()
    // this.updateViewNavArrowLinks(0)
    this.handleScroll()

  }

  componentDidUpdate() {
    this.displayTopLeftButtons()
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

  displayTopLeftButtons() {
    if (window.location.pathname === "/") {
      document.getElementsByClassName('fa-home')[0].style.display = "none";
      document.getElementsByClassName('fa-bars')[0].style.display = "block";
    } else {
      document.getElementsByClassName('fa-home')[0].style.display = "block";
      document.getElementsByClassName('fa-bars')[0].style.display = "none";
    }
    document.getElementsByClassName('fa-times')[0].style.display = "none";
  }

  handleViewChange() {
    this.updateViewNavArrowLinks(0)
    this.setState({ currentSectionIndex: 0 })
  }

  updateViewNavArrowLinks(viewIncrement) {
    // if (this.state.topNavLinks.length > 1) {
    var beforeViewChangeIndex = this.state.currentIndex;
    var currentIndex = this.state.topNavLinks.indexOf(window.location.pathname)
    var newIndex = currentIndex + viewIncrement
    if (newIndex < 0)
      newIndex = this.state.topNavLinks.length - 1
    if (newIndex >= this.state.topNavLinks.length)
      newIndex = 0
    var previousIndex =
      (newIndex === 0)
        ? this.state.topNavLinks.length - 1
        : newIndex - 1
    var nextIndex =
      (newIndex === this.state.topNavLinks.length - 1)
        ? 0
        : newIndex + 1;
    this.setState({
      beforeViewChangeIndex: beforeViewChangeIndex,
      currentIndex: newIndex,
      previousIndex: previousIndex,
      nextIndex: nextIndex
    })
    // }
  }

  addViewTransitionClass() {
    var topNavLinks = []
    topNavLinksDetails.forEach((linkDetails) => {
      topNavLinks.push(linkDetails.path)
    })
    this.setState({ topNavLinks: topNavLinks }, () => { this.updateViewNavArrowLinks(0) })

  }

  handleSectionNavigationArrowClick(newSectionIndex) {
    const newSectionScrollPosition = window.innerHeight * newSectionIndex;

    window.scrollTo({ top: newSectionScrollPosition, behavior: 'smooth' })
  }

  getViewNavArrowText(index) {
    var path = this.state.topNavLinks[index]
    for (let linkDetail of topNavLinksDetails) {
      if (path === linkDetail.path)
        return linkDetail.linkText
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',

    })
  }

  handleScroll() {
    var scrollToTopButtonWrapper = document.getElementById("scrollToTopButtonWrapper")
    if (scrollToTopButtonWrapper) {
      if (window.scrollY < window.innerHeight * .1) {
        scrollToTopButtonWrapper.style.display = "none"
      } else {
        scrollToTopButtonWrapper.style.display = "initial"
      }

    }
  }


  render() {
    return (

      (this.state.topNavLinks.length > 0)
        ?
        <div className="App">
          <div id="introBackgroundContainer"></div>
          <Router>
            <div id="topLeftIcon">
              <span id="hamburgerMenuButton" onClick={this.openHomeNavBar}><FontAwesomeIcon icon={faBars} color='white' size="2x" /></span>
              <span id="closeMenuButton" onClick={this.closeHomeNavBar}><FontAwesomeIcon icon={faTimes} color='white' size="2x" /></span>
              <span id="homeButton"><NavLink exact to={"/"}><FontAwesomeIcon icon={faHome} color='white' size="2x" /></NavLink></span>
            </div>
            {(this.state.currentIndex !== 0)
              ? <NavLink to={this.state.topNavLinks[this.state.previousIndex]}>
                <div className="routerNavigationArrowContainer navigationArrowContainer fixed" id="leftRouterNavigationArrowContainer" onClick={() => this.handleViewChange()}>
                  <p>{this.getViewNavArrowText(this.state.previousIndex)}</p>
                  <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                </div>
              </NavLink>
              : null}

            {(this.state.currentIndex !== this.state.topNavLinks.length - 1)
              ? <NavLink to={this.state.topNavLinks[this.state.nextIndex]}>
                <div className="routerNavigationArrowContainer navigationArrowContainer fixed" id="rightRouterNavigationArrowContainer" onClick={() => this.handleViewChange()}>
                  <p>{this.getViewNavArrowText(this.state.nextIndex)}</p>
                  <FontAwesomeIcon icon={faChevronRight} size="lg" />
                </div>
              </NavLink>
              : null}

            <TopNavBar />

            <AnimatedSwitch handleViewChange={this.handleViewChange} scrollToTop={this.scrollToTop} beforeViewChangeIndex={this.state.beforeViewChangeIndex} topNavLinks={this.state.topNavLinks}
              handleSectionNavigationArrowClick={this.handleSectionNavigationArrowClick} closeHomeNavBar={this.closeHomeNavBar} />
          </Router>

          <div id="scrollToTopButtonWrapper">
            {/* <Link
              to="aboutMeSectionContainer"
              smooth={true}
              duration={500}>
              <FontAwesomeIcon icon={faArrowCircleUp} size="4x" />
            </Link> */}
            <button onClick={() => this.scrollToTop()}>
              <FontAwesomeIcon icon={faArrowCircleUp} size="4x" />
            </button>

          </div>

        </div >
        : null
    );
  }

}

const AnimatedSwitch = withRouter(({ location, history, ...props }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}

      // onExit={node => {
      //   node.style.position = "fixed";
      //   node.style.top = 0 + "px";
      // }}
      // onExited={() => }
      onEntering={() => {
        props.handleViewChange();
        props.scrollToTop();
      }}
      // onEntered={() => props.scrollToTop()}
      timeout={1250}
      // mountOnEnter={false}
      classNames={
        props.topNavLinks.indexOf(location.pathname) < props.beforeViewChangeIndex
          ? "slide-left"
          : "slide-right"
      }>
      <Switch location={location}>
        {/* handleSectionNavigationArrowClick */}
        {/* <Route path="/" exact component={HomeView} /> */}
        {/* <Route path="/about" exact component={AboutMeView} /> */}
        {/* <Route path="/experience" exact component={ExperienceView} /> */}
        {/* <Route path="/projects" exact component={ProjectsView} /> */}
        {/* <Route path="/contact" exact component={ContactView} /> */}
        <Route path="/" exact render={() => <HomeView handleSectionNavigationArrowClick={props.handleSectionNavigationArrowClick} closeHomeNavBar={props.closeHomeNavBar} />} />
        <Route path="/about" exact render={() => <AboutMeView handleSectionNavigationArrowClick={props.handleSectionNavigationArrowClick} />} />
        <Route path="/experience" exact render={() => <ExperienceView handleSectionNavigationArrowClick={props.handleSectionNavigationArrowClick} />} />
        <Route path="/projects" exact render={() => <ProjectsView handleSectionNavigationArrowClick={props.handleSectionNavigationArrowClick} />} />
        <Route path="/contact" exact render={() => <ContactView handleSectionNavigationArrowClick={props.handleSectionNavigationArrowClick} />} />

      </Switch>
    </CSSTransition>
  </TransitionGroup >

))

