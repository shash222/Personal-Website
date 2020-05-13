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
import { faArrowCircleUp, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
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
      previousIndex: 0,
      currentIndex: 0,
      nextIndex: 0
    }
    this.addViewTransitionClass = this.addViewTransitionClass.bind(this)
    this.handleViewNavigationArrowClick = this.handleViewNavigationArrowClick.bind(this)
    this.updateViewNavArrowLinks = this.updateViewNavArrowLinks.bind(this)
    this.handleViewChange = this.handleViewChange.bind(this)
    this.getViewNavArrowText = this.getViewNavArrowText.bind(this)
  }

  componentDidMount() {
    AOS.init({
      once: true
    });
    window.addEventListener('scroll', this.handleScroll)
    this.addViewTransitionClass()
    // this.updateViewNavArrowLinks(0)
    this.handleScroll()
  }

  handleViewChange() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
    this.updateViewNavArrowLinks(0)
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

  handleViewNavigationArrowClick(e) {
    var viewNavArrowContainer =
      e.target.parentNode.tagName.toLowerCase().localeCompare("div") === 0
        ? e.target.parentNode
        : e.target.parentNode.parentNode
    var viewIncrement =
      (viewNavArrowContainer.id.localeCompare("leftRouterNavigationArrowContainer") === 0)
        ? -1
        : 1
    this.updateViewNavArrowLinks(viewIncrement)
    // useHistory().push("/experience")

  }

  getViewNavArrowText(index) {
    var path = this.state.topNavLinks[index]
    for (let linkDetail of topNavLinksDetails) {
      if (path === linkDetail.path)
        return linkDetail.linkText
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0)
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

          {/* onClick={(e) => this.handleViewNavigationArrowClick(e)} */}
          <Router>
            {(this.state.currentIndex !== 0)
              ? <NavLink to={this.state.topNavLinks[this.state.previousIndex]}>
                <div className="routerNavigationArrowContainer navigationArrowContainer fixed" id="leftRouterNavigationArrowContainer" onClick={(e) => this.handleViewChange()}>
                  <p>{this.getViewNavArrowText(this.state.previousIndex)}</p>
                  <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                </div>
              </NavLink>

              : null}
            {(this.state.currentIndex !== this.state.topNavLinks.length - 1)
              ? <NavLink to={this.state.topNavLinks[this.state.nextIndex]}>
                <div className="routerNavigationArrowContainer navigationArrowContainer fixed" id="rightRouterNavigationArrowContainer" onClick={(e) => this.handleViewNavigationArrowClick(e)}>
                  <p>{this.getViewNavArrowText(this.state.nextIndex)}</p>
                  <FontAwesomeIcon icon={faChevronRight} size="lg" />
                </div>
              </NavLink>

              : null}
            <TopNavBar />

            <AnimatedSwitch handleViewChange={this.handleViewChange} beforeViewChangeIndex={this.state.beforeViewChangeIndex} topNavLinks={this.state.topNavLinks} />
          </Router>

          <div id="scrollToTopButtonWrapper">
            <button onClick={() => window.scrollTo(0, 0)}>
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
      onEnter={() => props.handleViewChange()}
      timeout={{ enter: 1200, exit: 1200 }}
      classNames={
        props.topNavLinks.indexOf(location.pathname) < props.beforeViewChangeIndex
          ? "slide-left"
          : "slide-right"
      }>
      <Switch location={location}>
        <Route path="/" exact component={HomeView} />
        <Route path="/projects" exact component={ProjectsView} />
        <Route path="/experience" exact component={ExperienceView} />
        <Route path="/contact" exact component={ContactView} />
        <Route path="/about" exact component={AboutMeView} />

      </Switch>
    </CSSTransition>
  </TransitionGroup >

))

