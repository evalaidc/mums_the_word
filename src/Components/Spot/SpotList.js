import React, {Component} from 'react';

class SpotList extends Component {

  render(){
    let locations = this.props.spots.map((spot, index) => {
      return (
        <div key={index}>
        <h3> {spot.title} </h3>
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
