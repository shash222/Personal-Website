import React from 'react';
import { Component } from 'react';
import HomeView from './views/HomeView.js';
import ProjectsView from './views/ProjectsView.js';
import ExperienceView from  './views/ExperienceView.js'
import ContactView from  './views/ContactView.js'
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import TopNavBar from './components/HomeViewComponents/TopNavBar.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class App extends Component {
  componentDidMount() {
    AOS.init();
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
          {/* <HomeView /> */}
        </Router>

      </div>
    );
  }

}
