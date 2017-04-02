import React, {Component} from 'react'

class MapContainer extends Component {

  render(){
    // if(!this.props.loaded){
    //   return <div> Loading... </div>
    //   }

    // height and width of the map
    const style = {
      width: '100vw',
      height: '100vh'
    }

      return (
        <div style={style}>
        <Map google={this.props.google} />
        <div>
      )
  }



}

export default GoogleApiComponent({
  apiKey: AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
})(Container)
