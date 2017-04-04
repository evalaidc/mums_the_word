import React, {Component} from 'react'
import SpotList from './SpotList.js'
import axios from 'axios'
import Map from '../Map/Map.js'

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
  //  setInterval(this.loadSpotsFromAPI(), this.props.interval);
   }

  loadSpotsFromAPI() {
    axios.get(this.props.url).then(res => {
      // console.log(res)
      this.setState({
        data: res.data
      })
    }).catch(err => {
      console.log(' api request failed')
   })
  };


  render(){
    return(
      <div>
      <h1> Spots Container </h1>
      <SpotList spots={this.state.data} />
      <Map />
      </div>
    )
  }
}

export default SpotsContainer
