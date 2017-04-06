/* eslint-disable no-undef */
/* eslint-disable no-useless-concat */
/* eslint-disable array-callback-return */

import React, {Component} from 'react'
import '../css/Map1.css'

export default class GoogleMap extends Component {
  constructor(props){
    super(props)
    this.state={
      data: this.props.spots
    }
  }
  // determines if component will rerender - if true it will
  shouldComponentUpdate(){
    return false
  }


  componentDidMount(){
    // 2nd parameter - custimzation of how the map works
    // 1st param - tells google map to attempt to render itself to the div that
      //has the ref.
        // create new google map and insert it into that div
            // save ref as this.map
    let self = this
    self.map = new google.maps.Map(this.refs.map , {
      center: { lat: 38.907192, lng: -77.036871 },
      zoom: 14
    })
    let markers = []
    let infowindows = []
    // function to create markers
    function addMarker(lati,long,title){
      var marker = new google.maps.Marker({
        position: {
          lat: lati,
          lng: long
        },
        map: self.map,
        title: title

      })
      markers.push(marker)
    }

    //add infoWindow
    function addInfoWindow(spot, title, blurb, photo, author, address){
      var infowindow = new google.maps.InfoWindow({
        content: (
          '<h2>' + `${title}` + '</h2>' + '<br />' +
          '<img src=' + `"${photo}"` + 'alt=' + `"${title}"` + '/>' +'<br />' +
           'Posted By: ' + `${author}` + '<br />' +
           'Address: ' + `${address}`
           + '<br />' + `${blurb}`

        )
      })
      infowindows.push(infowindow)

    }
    // adding all markers using long and lats from data
    this.state.data.map((spot, index) => {
      addMarker(spot.latitude, spot.longitude, spot.title)
      addInfoWindow(spot, spot.title, spot.blurb, spot.photo_url, spot.author ,spot.address)

        markers[index].addListener('click', function(){
          infowindows[index].open(self.map, markers[index])
        })
    })

  }

  render(){
    // ref system used to reference a direct DOM element
    return (
      <div className="mapContainer">
      <div id='map' ref='map' />
      </div>
    )
  }
}
