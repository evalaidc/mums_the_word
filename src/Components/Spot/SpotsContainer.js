import React, {Component} from 'react'
import SpotList from './SpotList.js'
import axios from 'axios'
import {
  Route
} from 'react-router-dom'
import NewSpotForm from '../Spot/NewSpotForm.js'
import '../css/spotcontainer.css'
import GoogleMap from '../Map/LargeMap.js'


class SpotsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
    this.loadSpotsFromAPI = this.loadSpotsFromAPI.bind(this);
  }

  componentDidMount() {
   this.loadSpotsFromAPI();
   setInterval(this.loadSpotsFromAPI(), this.props.interval);
   }

  loadSpotsFromAPI() {
    axios.get(this.props.url).then(res => {
      this.setState({
        data: res.data
      })
    }).catch(err => {
      console.log('api request failed')
   })
  };


  render(){
    return(
      <div className='spotContainer'>
      <Route
        exact path="/mums_the_word/Home/Map"
        render={() => {
          return (
            <GoogleMap spots={this.state.data}/>
          )
        }}
      />

        <Route
          path="/mums_the_word/Home/NewForm"
          render={() => {
            return (
              <NewSpotForm />
              )
            }}
        />
        <SpotList spots={this.state.data}/>
      </div>
    )
  }
}

export default SpotsContainer
