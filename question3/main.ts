export class Connect4 {

    constructor() {
      // Good luck
  }
    play(col: number): string{
      // Good luck
      let player1 = 0;
      let player2 = 0;
      let player = ''
      let col0 = [];
      let col1 = [];
      let col2 = [];
      let col3 = [];
      let col4 = [];
      let col5 = [];
      let col6 = [];
      let full = false;
      let winner = null;
      let coll = [];
      
      function countInArr(arr, num) {
        let count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                count++;
            }
        }
        if (count == 4) {
          winner = num;
        } else winner = null;
        return winner;
      }

      //always player1 starts and alternates
      if (player1 === player2) {
        if (col === 0) {
          col0.push[1];
        } else if (col === 1) {
          col1.push[1];
        } else if (col === 2) {
          col2.push[1];
        } else if (col === 3) {
          col3.push[1];
        } else if (col === 4) {
          col4.push[1];
        } else if (col === 5) {
          col5.push[1];
        } else if (col === 6) {
          col6.push[1];
        }

        //player1's move
        player1++;                                          
        player = 'Player 1';

      }
      
      else if (player1 > player2) {
        if (col === 0) {
          col0.push[2];
        } else if (col === 1) {
          col1.push[2];
        } else if (col === 2) {
          col2.push[2];
        } else if (col === 3) {
          col3.push[2];
        } else if (col === 4) {
          col4.push[2];
        } else if (col === 5) {
          col5.push[2];
        } else if (col === 6) {
          col6.push[2];
        }

        //player2's move
        player2++;
        player = 'Player 2';
      }


      if (col == 0) {
        countInArr(col0, col)

      } else if (col == 1) {
        countInArr(col1, col)
        
      } else if (col == 2) {
        countInArr(col2, col)
        
      } else if (col == 3) {
        countInArr(col3, col)
        
      } else if (col == 4) {
        countInArr(col4, col)
        
      } else if (col == 5) {
        countInArr(col5, col)
        
      } else if (col == 6) {
        countInArr(col6, col)
        
      }
      
      console.log(player1)
      console.log(player2)

      //case 1: return player has a turn 
      if ((col0.length < 6 || col1.length < 6 || col2.length < 6 || col3.length < 6 || col4.length < 6 || col5.length < 6 || col6.length < 6) && !winner ) {
        return `${player} has a turn`
      }

      //case 2: return winner 
      else if (winner) {
        return `Player ${winner} wins!`
      }
      
      //case 3: return game over
      else {
        return 'Column full!'
      }

    }
}
  
