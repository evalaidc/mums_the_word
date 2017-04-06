import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'
import '../css/spotlist.css'

class SpotList extends Component {

  render(){
    let locations = this.props.spots.map((spot, index) => {
      let pathname = `/spots/${spot.title}`
      return (
        <div key={index}>
        <Link to={
          {pathname: pathname ,
            state: {selectedSpot: spot}
          }
        }>
          <h3>{spot.title}</h3>
        </Link>
        </div>
      )
    })
    return (
      <div>
      <h1> Pick Your Next Adventure </h1>
        <div className="locationList"> {locations} </div>
      </div>
    )
  }

}

export default SpotList
