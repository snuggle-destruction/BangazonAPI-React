import React, { Component } from 'react';
import Navbar from './components/navbar';
import ApplicationViews from './applicationViews';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}
