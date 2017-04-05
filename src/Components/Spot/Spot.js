import React, {Component} from 'react'
import GoogleMap from '../Map/google_map.js'


class Spot extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedSpot: this.props.location.state.selectedSpot
    }
  }
  render(){
    return(
      <div>
      <h1> {this.state.selectedSpot.title} </h1>
      <h3> Posted By: {this.state.selectedSpot.author}</h3>
      <p> {this.state.selectedSpot.blurb}</p>
      <br />
      <GoogleMap lat={this.state.selectedSpot.latitude} lng={this.state.selectedSpot.longitude}/>
      </div>
    )
  }

}

export default Spot
