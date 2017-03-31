import React, { Component } from 'react';
import '../css/App.css';
import SpotsContainer from '../Spot/SpotsContainer.js'

class App extends Component {
  render() {
    return (
      <SpotsContainer
      url='http://localhost:3101/api/spots'
      pollInterval={2000}
      />
    );
  }
}

export default App;
