import React, {Component} from 'react'

class GridCell extends Component {
  // constructor(props) {
  //   super()
  // }
  handleClick (){
    console.log(`Clicked on column ${this.props.x}`)
  }
  render(){
    return(
      <div onClick={() => handleClick()}>
        <p>{this.props.x}, {this.props.y}</p>
      </div>
    )
  }

}

export default GridCell