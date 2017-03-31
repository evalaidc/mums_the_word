// var env = {
//   dev: 'http://localhost:3000',
//   prod: 'https://MumsTheWord.herokuapp.com',
//   pwd: null
// }
//
// if(this.location.origin.includes('localhost')) {
//   env.pwd = env.dev;
// } else {
//   env.pwd = env.prod;
// }

import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Hello</h2>
        </div>
    );
  }
}

export default App;
