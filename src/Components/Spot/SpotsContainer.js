import React, {Component} from 'react'
import SpotList from './SpotList.js'
import axios from 'axios'

class SpotsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
    this.loadSpotsFromAPI = this.loadSpotsFromAPI.bind(this);
  }

  componentDidMount() {
   this.loadSpotsFromAPI();
  //  setInterval(this.loadSpotsFromAPI(), this.props.interval);
   }

  loadSpotsFromAPI() {
    axios.get(this.props.url).then(res => {
      // console.log(res)
      this.setState({
        data: res.data
      })
    }).catch(err => {
      console.log(' api request failed')
   })
  };

  componentWillReceiveProps(nextProps){

  }

  render(){
    let locations = this.state.data.map((spot, index) => {
      return (
        <div key={index}>
        <h3> {spot.title} </h3>
        </div>
      )
    })
    console.log(this.state.data[1])
    return(
      <div>
      <h1> Spots Container </h1>
      {locations}
      <SpotList spots={this.state.data} />
      </div>
    )
  }
}

export default SpotsContainer
