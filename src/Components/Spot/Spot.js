import React, {Component} from 'react'
import GoogleMap from '../Map/google_map.js'


class Spot extends Component {
  constructor(props){
    super(props)
    this.state={
      lat: this.props.lat,
      lng: this.props.lng
    }
  }
  render(){
    return(
      <GoogleMap lat={this.state.lat} lng={this.state.lng}/>
    )
  }

}

export default Spot
