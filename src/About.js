import React, {Component} from 'react'
import './Components/css/About.css'

class About extends Component {

  render(){
    return(
      <div className="AboutContainer">
        <h1> The Motivation </h1>
        <p> Sometimes the best adventures are the ones we do not expect.
          This page was created with the intention to let others know about
          fun places that you admire and find others that you otherwise would
          not have found. Whether it be quirky, strange, or just special to
          you. Go ahead find some place new, enjoy it, and/or leave your mark.
        </p>
        <img src="https://lh3.googleusercontent.com/_vDCrcDrxUBSiCsK18N-Fkdxgdl-vLFYqffjXXdW5l8Ouz1EPmjlZI0cczxkTPRtr4ss=w300"
        alt="Sphere with different country flags as tiles." /> 
      </div>
    )
  }
}

export default About
