function bestMove() {
    // AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        // Is the spot available?
        if (board[row][column] == '') {
          board[row][column] = ai;
          let score = minimax(board, 0, false);
          board[row][column] = '';
          if (score > bestScore) {
            bestScore = score;
            move = {row, column };
          }
        }
      }
    }
    board[move.row][move.column] = ai;
    currentPlayer = human;
  }
  
  let scores = {
    AI: 10,
    Player: -10,
    tie: 0
  };
  
  function minimax(board, depth, isMaximizing) {
    let result = checkWinner();
    if (result !== null) {
      return scores[result];
    }
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
          // Is the spot available?
          if (board[row][column] == '') {
            board[row][column] = ai;
            let score = minimax(board, depth + 1, false);
            board[row][column] = '';
            bestScore = max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
          // Is the spot available?
          if (board[row][column] == '') {
            board[row][column] = human;
            let score = minimax(board, depth + 1, true);
            board[row][column] = '';
            bestScore = min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
  }