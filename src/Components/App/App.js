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
            <Link to="/mums_the_word/"> About </Link>
            <Link to="/mums_the_word/Home"> List Spots </Link>
            </div>
            <Link to='/mums_the_word/Home'>
              <div id="iconimage"></div>
            </Link>
            <div className="links">
            <Link to="/mums_the_word/Home/NewForm"> Make a New Mark </Link>
            <Link to="/mums_the_word/Home/Map"> Map </Link>
            </div>
          </nav>
          <main>
            <Route
              exact path="/mums_the_word/"
              component={About}
            />
            <Route
              path='/mums_the_word/Home'
              render={() => {
                return (
                  <SpotsContainer
                  url='https://mums-the-word.herokuapp.com/api/spots'
                  interval={2000}
                  />
                )
              }}
            />
            <Route
              path="/mums_the_word/spots/:title"
              component={Spot}
            />
            <Route
                path='/*'
                  render={ () => {
                    return <Redirect to='/mums_the_word/Home' />
                  }}
              />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
