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
    longitude: 0,
    latitude: 0
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
    e.preventDefault();
    let author = this.state.author.trim();
    let blurb = this.state.blurb.trim();
    let title = this.state.title.trim();
    let photo_url = this.state.photo_url.trim();
    let longitude = this.state.longitude;
    let latitude = this.state.latitude;

    // if (!blurb || !author || !title || !photo_url || !longitude || !latitude) {
    //   return;
    // }
    axios.post("http://localhost:3101/api/spots/new", {title, blurb, author, photo_url, longitude, latitude})
    .then((res) => {
      this.setState({
        author: '',
        blurb: '',
        photo_url: '',
        title: '',
        longitude: 0,
        latitude: 0
      })
      this.props.reload()
    })
    .catch((err) => {
      console.log(err)
    })

  }
  //  this.props.addNewSpot({ author: author, blurb: blurb, photo_url: photo_url, title: title, longitude: longitude, latitude: latitude });
  //  this.setState({
  //    author: '',
  //    blurb: '',
  //    photo_url: '',
  //    title: '',
  //    longitude: 0,
  //    latitude: 0
  //   });
  //   }


  render(){
    return(
      <div>
      <h2> Make Your Mark, By Creating A New Spot </h2>
        <form onSubmit={(e) => {this.addNewSpot(e)}}>
          <input type="text" placeholder="Title" value={ this.state.title } onChange={(e) => this.setNewSpotTitle(e)}/>
          <br />
          <input type="text" placeholder="Blurb" value={ this.state.blurb } onChange={(e) => this.setNewSpotBlurb(e)}/>
          <br />
          <input type="text" placeholder="Image Url" value={ this.state.photo_url } onChange={(e) => this.setNewSpotPhoto(e)}/>
          <br />
          <input type="text" placeholder="Author"  value={ this.state.author } onChange={(e) => this.setNewSpotAuthor(e)}/>
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
