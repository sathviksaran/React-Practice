import React, { Component } from 'react'
import BellA from './images.jpeg'
import BellB from './images.png'

class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to Simplilearn",
         sub: "Subscribe",
         imageURL: BellA
      };
    }
    styles = {
        fontStyle: "italic",
        color: "purple"
    }
    ButtonChange = () => {
        this.setState({
            message: "Click the bell icon to never miss an update",
            sub: "Subscribed"
        })
    }
    imageChange = () => {
        this.setState({
            message: "Thank you, Happy Learning!",
            imageURL: BellB
        })
    }
  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p></p>
        <img style={{width: "30px", height: "30px"}} 
        src={this.state.imageURL} 
        onClick={this.imageChange}
        alt=''></img>
      </div>
    )
  }
}

export default NewComp