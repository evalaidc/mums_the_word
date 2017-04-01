import React, {Component} from 'react';

class SpotList extends Component {
  render(){
    return (
      <div>
      <h1> SpotList </h1>
      <p> {this.props.data} </p>
      </div>
    )
  }

}

export default SpotList
