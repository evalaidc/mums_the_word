import React, {Component} from 'react'
import GoogleMap from '../Map/google_map.js'
import axios from 'axios'

class Spot extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedSpot: this.props.location.state.selectedSpot
    }
  }
  // delete certain spot
  handleSpotDelete(e){
    e.preventDefault()
    let title = this.state.selectedSpot.title
    axios.delete(`http://localhost:3101/api/spots/${title}`)
      .then(res => {
        console.log('Spot deleted');
        window.location.reload()
      })
      .catch(err => {
        console.error(err);
      });
  }

  render(){
    return(
      <div>
      <h1> {this.state.selectedSpot.title} </h1>
      <h3> Posted By: {this.state.selectedSpot.author}</h3>
      <p> Address: {this.state.selectedSpot.address}</p>
      <p> {this.state.selectedSpot.blurb}</p>
      <button onClick={(e) => {this.handleSpotDelete(e)}}> Delete </button>
      <p />
      <br />
      <GoogleMap lat={this.state.selectedSpot.latitude} lng={this.state.selectedSpot.longitude}/>
      </div>
    )
  }

}

export default Spot
