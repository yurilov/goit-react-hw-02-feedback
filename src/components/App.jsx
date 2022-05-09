import React, { Component } from "react";
import './App.css';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Feedback />
        <Statistics />     
      </>
    );
  }
}
export default App;
