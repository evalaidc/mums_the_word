import React, { Component } from 'react';
import '../css/App.css';
import SpotsContainer from '../Spot/SpotsContainer.js'
import Spot from '../Spot/Spot.js'
import About from '../../About.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)

    }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="links">
            <Link to="/"> About </Link>
            <Link to="/Home"> List Spots </Link>
            </div>
            <Link to='/Home'>
              <div id="iconimage"></div>
            </Link>
            <div className="links">
            <Link to="/Home/NewForm"> Make a New Mark </Link>
            <Link to="/Home/Map"> Map </Link>
            </div>
          </nav>
          <main>
            <Route
              exact path="/"
              component={About}
            />
            <Route
              path='/Home'
              render={() => {
                return (
                  <SpotsContainer
                  url='http://mums-the-word.herokuapp.com/api/spots'
                  interval={2000}
                  />
                )
              }}
            />
            <Route
              path="/spots/:title"
              component={Spot}
            />
            <Route
                path='/*'
                  render={ () => {
                    return <Redirect to='/Home' />
                  }}
              />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
