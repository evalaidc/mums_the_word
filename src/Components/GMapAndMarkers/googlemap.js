/* eslint-disable no-undef */
import React, {Component} from 'react'
import '../css/Map1.css'

export default class GoogleMap extends Component {
  // determines if component will rerender - if true it will
  shouldComponentUpdate(){
    return false
  }

  // allows us to update/ migrate from one set of props to another one
  componentWillReceiveProps(nextProps){

  }

  componentDidMount(){
    // 2nd parameter - custimzation of how the map works
    // 1st param - tells google map to attempt to render itself to the div that
      //has the ref.
        // create new google map and insert it into that div
            // save ref as this.map
    this.map = new google.maps.Map(this.refs.map , {
      center: { lat: 38.907192, lng: -77.036871 },
      zoom: 14
    })

    // creating markers
    var marker = new google.maps.Marker({
      position: {
        lat: 38.907192,
        lng: -77.036871
      },
      map: this.map

    })
  }

  render(){
    // ref system used to reference a direct DOM element
    return (
      <div id='map' ref='map' />
    )
  }
}
