import type { Tboard, Tplayer } from "../types/types";

import { isBoardEmpty } from "./isBoardEmpty";

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
  const opponent = player == "O" ? "X" : "O"

  if (checkWin(player, board)) {
    results.win = true;
  }

  else if (checkWin(opponent, board)) {
    results.loss = true;
  }

  else if(!isBoardEmpty(board)) results.draw = true;

  return results;
}
