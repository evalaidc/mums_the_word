import React, {Component} from 'react'
import axios from 'axios'

class NewSpotForm extends Component {
  constructor(props) {
   super(props);
   this.state = {
    author: '',
    blurb: '',
    photo_url: '',
    title: '',
    address: '',
    longitude: 0,
    latitude: 0,
    hasPosted: false
   }
 }

   // Get new Spot Parameters functions
     setNewSpotTitle(e){
       this.setState({
         title: e.target.value
       })
     }

     setNewSpotBlurb(e){
       this.setState({
         blurb: e.target.value
       })
     }

     setNewSpotAuthor(e){
       this.setState({
         author: e.target.value
       })
     }

     setNewSpotAadress(e){
       this.setState({
         address: e.target.value
       })
     }

     setNewSpotPhoto(e){
       this.setState({
         photo_url: e.target.value
       })
     }

     setNewSpotLongitude(e){
       this.setState({
         longitude: e.target.value
       })
     }

     setNewSpotLatitude(e){
       this.setState({
         latitude: e.target.value
       })
     }

  addNewSpot(e) {
    let author = this.state.author.trim();
    let blurb = this.state.blurb.trim();
    let title = this.state.title.trim();
    let photo_url = this.state.photo_url.trim();
    let address = this.state.address.trim();
    let longitude = this.state.longitude;
    let latitude = this.state.latitude;


    axios.post("http://localhost:3101/api/spots/new", {title, blurb, author, photo_url, address, longitude, latitude})
    .then(res => {
      console.log('created')

      this.setState({
        author: '',
        blurb: '',
        photo_url: '',
        title: '',
        address: '',
        longitude: 0,
        latitude: 0,
        hasPosted: true
      })
    })
    .catch((err) => {
      console.log(err)
    })

  }



  render(){

    return(
      <div>
      <h2> Make Your Mark, By Creating A New Spot </h2>
        <form onSubmit={(e) => {this.addNewSpot(e)}}>
          <input type="text" placeholder="Title" value={ this.state.title } onChange={(e) => this.setNewSpotTitle(e)}/>
          <br />
          <input type="text" placeholder="Blurb" value={ this.state.blurb } onChange={(e) => this.setNewSpotBlurb(e)}/>
          <br />
          <p> Upload your own image <a href='http://imgur.com/'>here</a> and copy the link into the space below </p>
          <input type="text" placeholder="Image Url" value={ this.state.photo_url } onChange={(e) => this.setNewSpotPhoto(e)}/>
          <br />
          <input type="text" placeholder="Author"  value={ this.state.author } onChange={(e) => this.setNewSpotAuthor(e)}/>
          <br />
          <input type="text" placeholder="Address"  value={ this.state.address } onChange={(e) => this.setNewSpotAddress(e)}/>
          <br />
          <a href='http://www.latlong.net/'> Find Longitude </a>
          <br />
          <input type="number" step="any" value={ this.state.longitude } placeholder="Longitude" onChange={(e) => this.setNewSpotLongitude(e)}/>
          <br />
          <a href='http://www.latlong.net/'> Find Latitude </a>
          <br />
          <input type="number" step="any" value={ this.state.latitude } placeholder="Latitude" onChange={(e) => this.setNewSpotLatitude(e)}/>
          <br />
          <button type="submit">Add Spot</button>
        </form>
      </div>
    )
  }

}

export default NewSpotForm
