import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*class Square extends React.Component {
  /* THE DEFAULT VALUE OF THE SQUARE WILL BE NULL WHEN WE FIRST CREATE IT. 
    IT EVENTUALLY TURNS INTO AN 'X' ON FIRST CLICK AS PER THE EVENT HANDLER WE REPLACE
    THE ALERT WITH. /
  constructor() {
    super();
    this.state = {
      value: 'null',
    };
  }
  render() {
    /* THIS WILL RETURN A BOX WITH NUMBERED VALUES BECAUSE WE ARE 
     CALLING renderSquare(i) IN RANGE(1, 7) FROM THE GAME CLASS. /
    // ALSO AS A SIDE NOTE, DON'T PLACE COMMENTS INSIDE RETURN STATEMENT. IT THROWS RENDER OFF.

    // JAVASCRIPT ALSO COMPILES IN REAL TIME SO AS SOON AS I CHANGE SOMETHING IN MY CODE,
    // THE COMPILER AUTOMATICALLY STARTS COMPILING THE CODE AND EITHER GIVES YOU AN ERROR MESSAGE OR A 
    // FINISHED PRODUCT.

    // #### ADDED CODE ####
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}*/
// SINCE WE ONLY HAVE A RENDER METHOD, IT'S SIMPLER TO JUST MAKE THIS A FUNCTION
function Square(props) {
  return <button className="square"
   onClick={props.onClick}>
   {props.value}
   </button> 
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      // POPULATE AN ARRAY THAT WILL REPRESENT ALL MY SQUARES.
      // COLON NOTATION IMPLIES WE'RE WORKING WITH STATE. WE'RE DEFINING STATE SO 
      // NO '='
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  renderSquare(i) {
    /* THIS ALLOWS ME TO CREATE A SQUARE COMPONENT WITH A VALUE OF i.
     REACT WORKS WITHIN HTML BY CREATING COMPONENTS (WHICH ARE COMPLETELY MODULARIZED) 
     THAT GO INSIDE THE ACTUAL HTML. ESSENTIALLY, WE CAN BUILD OUT WEBSITES BY CREATING 
     'PARTS' SIMILAR TO CSS CLASSES EXCEPT WITH MORE DYNAMIC FUNCTIONALITIES.
    */
    // #### ADDED CODE ####
    // THIS IS GOING TO RETURN THE I'TH SQUARE IN MY ARRAY.
    return ( <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    // CREATING CLONE OF THE SQUARES ARRAY. OBJECT POINTERS REMAIN THE SAME THOUGH.
    // [|, |, |, |] --- STATE ARRAY
    // [A, B, C, D] --- OBJECTS IN MEMORY
    // [|, |, |, |] --- NEW ARRAY IN HANDLECLICK()
    const newSquares = this.state.squares.slice();
    if (findWinner(this.state.squares || squares[i])) {
      return;
    }
    // WHY DOESN'T THIS WORK? 
    //
    // if (this.xIsNext) {
    //   newSquares[i] = 'X';
    // } else {
    //     newSquares[i] = 'O';
    // }
    newSquares[i] = this.state.xIsNext ? 'X' : 'O';
    // FACEBOOK USES A DIFFERENT SYNTAX: 
    // SQUARES[I] = THIS.STATE.XISNEXT ? 'X' : 'O';
    // this.xIsNext = !this.xIsNext;
    // SET THE STATE OF THE TIC TAC TOE BOARD AS THE NEWSQUARES
    this.setState({squares: newSquares,
      xIsNext: !this.state.xIsNext});
  }

  render() {
    const winner = findWinner(this.state.squares);
    let status; 
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
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

function findWinner(squares) {
    // IF ANY OF THESE ARE THE SAME, THEN GAME IS OVER
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // SIMILAR TO JAVA
    for (let i = 0; i < lines.length; i++) {
      // GET A LINE FROM THE LINES LIST TO CROSS CHECK WITH SQUARES.
      const [first, second, third] = lines[i];
      if (squares[a] && squares[b] === squares[b] && squares[a]
      === squares[c]) {
        return squares[a];
      }
    }
    // IF NO WINNER
    return null;
}
// ========================================

// ENCAPSULATION!!! ALL WE CALL IN THE FINAL RENDER METHOD IS THE <GAME /> XML TAG. 
// THE REST OF THE WORK IS DONE INSIDE THE OTHER CLASSES WHICH ARE CALLED FROM THE GAME CLASS.
// THINK OF JAVA HELPER CLASSES
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

