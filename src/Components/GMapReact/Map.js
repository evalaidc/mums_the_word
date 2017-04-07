import {
  default as React,
  Component
} from 'react'

import {
  withGoogleMap,
  GoogleMap,
  // InfoWindow,
  Marker
} from 'react-google-maps'

const InitialMap = withGoogleMap(props => {
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={14}
      defaultCenter={{lat: 40.66, lng: -73.99}}
      >
    this.props.markers.map((marker, index) =>  {
    <Marker
      // key={index}
      position={{lat: 40.33, lng: 23.43}}
      onClick={() => props.onMarkerClick(marker)}
    ></Marker>
  })
    </GoogleMap>
  )
})

export default InitialMap






// previous verison of map api https://github.com/istarkov/google-map-react

// class Map extends Component {
//   // componentDidUpdate(prevProps, prevState){
//   //   if (prevProps.google !== this.props.google ){
//   //     this.loadMap()
//   //   }
//   // }
//   //
//   // loadMap(){
//   //   if(this.props === this.props.google){
//   //     // google is available
//   //     const {google} = this.props;
//   //     const maps = google.maps;
//   //     // where we want to make ref for the map to be rendered
//   //     const mapRef = this.refs.map;
//   //     const node = ReactDOM.findDOMNode(mapRef);
//   //
//   //     // lets us instantiate a googlemaps object
//   //      // how close to the center to display
//   //     let zoom = 14;
//   //     let lat = 37.774929;
//   //     let lng = -122.419416;
//   //     //the combination of latitude and longitude to display
//   //     const center = new maps.LatLng(lat, lng);
//   //     const mapConfig = Object.assign({}, {
//   //       center: center,
//   //       zoom: zoom
//   //     })
//   //     // accepts a DOM node and a configuration object to create a map
//   //     this.map = new maps.Map(node, mapConfig);
//   //   }
//   // }
//
//
//   render(){
//     return (
//       <div>
//       <navigate></navigate>
//
//     <input id="pac-input" className="controls" type="text"
//         placeholder="Enter a part of the world!"></input>
//     <div id="map"></div>
//       <script>
//         var map;
//         function initMap() {
//           map = new google.maps.Map(document.getElementById('map'), {
//             center: {lat: -34.397, lng: 150.644},
//             zoom: 8
//           })
//         }
//       </script>
//     </div>
//     )
//   }
//
//
// }
//
// export default Map
