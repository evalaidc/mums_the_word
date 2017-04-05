import React, {Component} from 'react';
import Spot from './Spot.js'

class SpotList extends Component {

  render(){
    let locations = this.props.spots.map((spot, index) => {
      return (
        <div key={index}>
        <h3> {spot.title} </h3>
        <Spot title={spot.title} blurb={spot.blurb} author={spot.author} lat={spot.latitude} lng={spot.longitude} />
        </div>
      )
    })
    return (
      <div>
      <h1> SpotList </h1>
        <div> {locations} </div>
      </div>
    )
  }

}

export default SpotList
