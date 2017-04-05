import React, {Component} from 'react'
// import Map from './Map.js'
import InitialMap from './Map.js'

export class MapContainer extends Component {

    constructor(props){
      super(props)
      this.state={
        markers: [{
          position: {
            lat: 25.111,
            lng: 121.52
          }
        }]
      }
    }

  render(){


      return (
        <div style={{height: "100%"}}>
          <InitialMap
            containerElement={
              <div style={{height: "100%"}} />
            }
            mapElement={
              <div style={{height: "100%"}} />
            }
            markers={this.state.markers}
          />
        </div>
      )
  }



}


export default MapContainer
