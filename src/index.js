import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component {
  render() {
    /* THIS WILL RETURN A BOX WITH NUMBERED VALUES BECAUSE WE ARE 
     CALLING renderSquare(i) IN RANGE(1, 7) FROM THE GAME CLASS. */
    // ALSO AS A SIDE NOTE, DON'T PLACE COMMENTS INSIDE RETURN STATEMENT. IT THROWS RENDER OFF.
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    /* THIS ALLOWS ME TO CREATE A SQUARE COMPONENT WITH A VALUE OF i.
     REACT WORKS WITHIN HTML BY CREATING COMPONENTS (WHICH ARE COMPLETELY MODULARIZED) 
     THAT GO INSIDE THE ACTUAL HTML. ESSENTIALLY, WE CAN BUILD OUT WEBSITES BY CREATING 
     'PARTS' SIMILAR TO CSS CLASSES EXCEPT WITH MORE DYNAMIC FUNCTIONALITIES.
    */
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

// ENCAPSULATION!!! ALL WE CALL IN THE FINAL RENDER METHOD IS THE <GAME /> XML TAG. 
// THE REST OF THE WORK IS DONE INSIDE THE OTHER CLASSES WHICH ARE CALLED FROM THE GAME CLASS.
// THINK OF JAVA HELPER CLASSES
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

