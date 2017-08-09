/* eslint-disable */
import React, { Component } from 'react'

class Hheader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      x : 0,
      y : 0,
      width : 500,
      height : 250,
      boxpos : `row`,
      vtextpos : 0,
      hpos : 0,
      mpos : `auto`
    }
  }
  componentDidMount () {
    if(this.props.boxpos == 'start'){
      this.setState({boxpos : `row`})
    }
    else if(this.props.boxpos == 'end'){
      this.setState({boxpos : `row-reverse` , vtextpos : 95})
    }

    if(this.props.hpos == 'start'){
      this.setState({hpos : 0 , mpos : `auto`})
    }
    else if(this.props.hpos == 'center'){
      this.setState({hpos : 20 , mpos : `0px`})
    }
    else if(this.props.hpos == `end`){
      this.setState({hpos : 50 , mpos : `0px`})
    }
  }
  render(){
    const container = {
      width : `${this.state.width}px`,
      height : `auto`,
      display : `flex`,
      flexDirection : `${this.state.boxpos}`,
      position : `relative`
    }
    const vertical = {
      writingMode : `vertical-lr`,
      position : `absolute`,
      bottom : 0,
      left : `${this.state.vtextpos}%`,
      padding : `5px 0px`
    }
    const column = {
      display :  `flex`,
      flexDirection : `column`,
      justifyContent : `space-between`,
      alignItems : `flex-${this.props.boxpos}`
    }
    const middle = {
      margin : `${this.state.mpos} 10px`,
      zIndex : `10`
    }
    const transform1 = {
      position : `absolute`,
      color: `white`,
      top : `${this.state.hpos}%`,
      left : `17%`,
      fontSize : `${this.props.hsize}px`,
      transform : `translate(${this.state.x}px,${this.state.y}px)`,
      transition : `all 0.2s ease`
    }
    const transform2 = {
      transform : `translate(-${this.state.x}px,-${this.state.y}px)`,
      width : `${this.props.width}px`,
      height : `${this.props.height}px`,
      backgroundColor : `#eee`,
      transition : `all 0.2s ease`
    }
    const hover = event => {
      if(this.props.animation){
        this.setState({ x : (event.pageX - document.getElementById('div').offsetLeft)*0.1, y : (event.pageY - document.getElementById('div').offsetTop)*0.2 })
      }
    }
    const leave = event => {
      this.setState({ x : 0 , y : 0 })
    }
    const enter = event => {
      if(this.props.animation){
        this.setState({ x : event.clientX*0.05 , y : event.clientY*0.05 })
      }
    }
    return(
      <div onMouseMove = {hover.bind(this)} onMouseEnter = {enter.bind(this)} onMouseLeave = {leave.bind(this)} style={container} id='div'>
        <div style = {transform2}>
          <img src = {this.props.source} width={this.props.width} height={this.props.height}/>
        </div>
        <p style={vertical}>{this.props.vtext}</p>
        <h1 style = {transform1}>{this.props.htext}</h1>
        <div style={column}>
          <p style={middle}>{this.props.mtext}</p>
          <p style={{zIndex : `10` , margin : `0px 10px`}}>{this.props.btext}</p>
        </div>
      </div>
    )
  }
}

export default Hheader
