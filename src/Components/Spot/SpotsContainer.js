import React, {Component} from 'react'
import SpotList from './SpotList.js'
import axios from 'axios'
// import MapContainer from '../Map/MapContainer.js'
import GoogleMap from '../Map/google_map.js'

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
      <GoogleMap lat={-34.397} lng={150.644}/>
      </div>
    )
  }
}

export default SpotsContainer
