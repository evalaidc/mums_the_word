import React, { Component } from 'react';
import '../css/App.css';
import SpotsContainer from '../Spot/SpotsContainer.js'

class App extends Component {
  render() {
    return (
      <SpotsContainer
      url='http://127.0.0.1:3101/api/spots'
      interval={2000}
      />
    );
  }
}

export default App;
