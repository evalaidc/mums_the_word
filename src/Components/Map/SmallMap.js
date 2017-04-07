/* eslint-disable no-undef */
import React, {Component} from 'react'
import '../css/SmallMap.css'

export default class GoogleMap extends Component {
  // determines if component will rerender - if true it will
  shouldComponentUpdate(){
    return false
  }

  componentDidMount(){
        // create new google map and insert it into that div
     let map = new google.maps.Map(this.refs.singlemap , {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 14
    })
    // function to make marker
    function addMarker(lati,long,title){
       marker = new google.maps.Marker({
        position: {
          lat: lati,
          lng: long
        },
        map: map,
        title: title
      })
    }
    // passing parameters to make marker
      addMarker(this.props.lat, this.props.lng, this.props.title)
  }

  render(){
    // ref system used to reference a direct DOM element
    return (
      <div className='SingMap' ref='singlemap' />
    )
  }
}
