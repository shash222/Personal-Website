import React from 'react';
import { Component } from 'react';
import HomeView from './views/HomeView.js';
import ProjectsView from './views/ProjectsView.js';
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
          {/* <Route render={() => (<Redirect to="/" />)}/> */}
          {/* <HomeView /> */}
        </Router>

      </div>
    );
  }

}
