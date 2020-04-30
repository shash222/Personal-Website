import React from 'react';
import { Component } from 'react';
import HomeView from './views/HomeView.js';
import ProjectsView from './views/ProjectsView.js';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import TopNavBar from './components/HomeViewComponents/TopNavBar.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar />
        <Router>
          <Route path="/" exact component={HomeView} />
          <Route path="/projects" exact component={ProjectsView} />
          {/* <Route render={() => (<Redirect to="/" />)}/> */}
          {/* <HomeView /> */}
        </Router>

      </div>
    );
  }

}
