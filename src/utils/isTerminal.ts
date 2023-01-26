import type { Tboard, Tplayer } from "../types/types";

export function isTerminal(board: Tboard, player: Tplayer) {
  const results = { draw: false, win: false, loss: false };

  function checkWin(p: Tplayer) {
    if (
      (board[0] == p && board[1] == p && board[2] == p) ||
      (board[3] == p && board[4] == p && board[5] == p) ||
      (board[6] == p && board[7] == p && board[8] == p) ||
      (board[0] == p && board[3] == p && board[6] == p) ||
      (board[1] == p && board[4] == p && board[7] == p) ||
      (board[2] == p && board[5] == p && board[8] == p) ||
      (board[0] == p && board[4] == p && board[8] == p) ||
      (board[2] == p && board[4] == p && board[6] == p)
    )
      return true;
  }

  // Check for win
  if (checkWin(player)) {
    results.win = true;
  }

  // Check for draw
  if (results.win == false && results.loss == false) {
    if (board.filter((cell) => cell == null).length == 0) {
      results.draw = true;
    }
  }

  // Check for loss
  let opponent: Tplayer;
  if (player == "X") {
    opponent = "O";
  } else {
    opponent = "X";
  }

  if (checkWin(opponent)) {
    results.loss = true;
  }

  return results;
}
