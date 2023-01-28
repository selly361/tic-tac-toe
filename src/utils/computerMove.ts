import { IGame, Tboard, Tdifficulty, Tplayer } from "../types/types";

import { minimax } from "utils";

export function computerMove(state: IGame) {
  const { board } = state
  const { player, difficulty } = state.settings
  
  const aiPlayer = player == "X" ? "O" : "X"

  let depth = 0;
  if (difficulty == "Easy") {
    depth = 1;
  } else if (difficulty == "Normal") {
    depth = 2;
  } else if (difficulty == "Hard") {
    depth = 3;
  }

  return minimax(board, player, depth, aiPlayer);
}
