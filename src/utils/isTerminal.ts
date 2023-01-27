import type { Tboard, Tplayer } from "../types/types";


function checkWin(player: Tplayer, board: Tboard) {
  if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
  )
    return true;
}



export function isTerminal(board: Tboard, player: Tplayer) {
  const results = { draw: false, win: false, loss: false };

  if (checkWin(player, board)) {
    results.win = true;
  }

  if (results.win == false && results.loss == false) {
    if (board.filter((cell) => cell == null).length == 0) {
      results.draw = true;
    }
  }

  const opponent = player == "O" ? "X" : "O"

  if (checkWin(opponent, board)) {
    results.loss = true;
  }

  return results;
}
