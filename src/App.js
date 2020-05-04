import React from 'react';
import { Component } from 'react';
import HomeView from './views/HomeView.js';
import ProjectsView from './views/ProjectsView.js';
import ExperienceView from './views/ExperienceView.js'
import ContactView from './views/ContactView.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import TopNavBar from './components/HomeViewComponents/TopNavBar.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    AOS.init();
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  handleScroll() {
    var scrollToTopButtonWrapper = document.getElementById("scrollToTopButtonWrapper")
    console.log(window.scrollY, window.innerHeight)
    if (window.scrollY < window.innerHeight * .1) {
      scrollToTopButtonWrapper.style.display = "none"
    } else {
      scrollToTopButtonWrapper.style.display = "initial"
    }
  }


  render() {
    return (
      <div className="App">
        <Router>
          <TopNavBar />
          <Route path="/" exact component={HomeView} />
          <Route path="/projects" exact component={ProjectsView} />
          <Route path="/experience" exact component={ExperienceView} />
          <Route path="/contact" exact component={ContactView} />
          {/* <Route render={() => (<Redirect to="/" />)}/> */}
        </Router>
        <div id="scrollToTopButtonWrapper">
          <button onClick={this.scrollToTop}>
            <FontAwesomeIcon icon={faArrowCircleUp} size="4x" />
          </button>
          {/* <a href="#" onClick={this.scrollToTop}>
            <FontAwesomeIcon icon={faArrowCircleUp} size="4x" />
          </a> */}
        </div>
      </div>
    );
  }

}
