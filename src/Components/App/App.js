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
import GoogleMap from '../GMapAndMarkers/googlemap.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      newTitle: '',
      newBlurb: '',
      newAuthor: '',
      newPhotoUrl: '',
      newLongitude: 0,
      newLatitude: 0

    }
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/Home"> Home </Link>
            <Link to="/About"> About </Link>
            <Link to="/Home/NewForm"> Make a New Mark </Link>
            <Link to="/Map"> Map </Link>
          </nav>
          <main>
            <Route
              path='/Home'
              render={() => {
                return (
                  <SpotsContainer
                  url='http://127.0.0.1:3101/api/spots'
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
              path="/About"
              component={About}
            />
            <Route
              path="/Map"
              render={() => {
                return <GoogleMap />
              }}
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
