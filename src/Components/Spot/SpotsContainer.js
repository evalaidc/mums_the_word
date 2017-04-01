import React, {Component} from 'react'

import SpotList from './SpotList.js'

class SpotsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  render(){
    return(
      <div>
      <h1> Spots Container </h1>
      <SpotList data={this.state.data} />
      </div>
    )
  }
}

export default SpotsContainer
