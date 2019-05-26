import React, {Component} from 'react'
import {connect} from 'react-redux'

import { dropTile } from './actions'

class GridCell extends Component {
  // constructor(props) {
  //   super()
  // }
  handleClick() {
    console.log(`Clicked on column ${this.props.x} row ${this.props.y}`)
    console.log( this.props)
    this.props.putTileDrop(this.props.x)
  }

  render() {
    const board = this.props.board;
    const x = this.props.x;
    const y = this.props.y;

    let colorClass = 'cell';

    if(board[x][y] !== undefined) {
      if (board[x][y] === 'red') {
        colorClass += ' player2'
      } else {
        colorClass += ' player1'
      }
    }
    
    return(
      <div className={colorClass} onClick={() => this.handleClick()}>
        <p>{this.props.x}, {this.props.y}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
  };
};

const mapDispatchToProps= dispatch => {
  return {
     putTileDrop: col =>
      dispatch(dropTile(col))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(GridCell)