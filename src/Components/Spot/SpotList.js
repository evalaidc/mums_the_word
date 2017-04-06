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
        <div className="ListImgs" key={index}>
        <Link to={
          {pathname: pathname ,
            state: {selectedSpot: spot}
          }
        }>
         <img src={spot.photo_url} alt={spot.title} />
        </Link>
        </div>
      )
    })
    return (
      <div>
      <div className="listHeading"><h1> Pick Your Next Adventure </h1></div>
        <div className="locationList"> {locations} </div>
      </div>
    )
  }

}

export default SpotList
