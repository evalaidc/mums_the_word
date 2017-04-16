import React, {Component} from 'react'
import GoogleMap from '../Map/SmallMap.js'
import axios from 'axios'
import '../css/spot.css'

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
    axios.delete(`http://mums-the-word.herokuapp.com/api/spots/${title}`)
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
      <div className='spot'>
        <div className='spotDets'>
          <h1> {this.state.selectedSpot.title} </h1>
          <h3> Posted By: {this.state.selectedSpot.author}</h3>
            <p> Address: {this.state.selectedSpot.address}</p>
            <p> {this.state.selectedSpot.blurb}</p>
            <button onClick={(e) => {this.handleSpotDelete(e)}}> Delete </button>
          <br />
        </div>
        <div className='indivMap'>
          <GoogleMap lat={this.state.selectedSpot.latitude} lng={this.state.selectedSpot.longitude} title={this.state.selectedSpot.title}/>
        </div>
      </div>
    )
  }

}

export default Spot
