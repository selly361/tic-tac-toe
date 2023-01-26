import { Tboard, Tdifficulty, Tplayer } from "types/types";

import MiniMax from "tic-tac-toe-minimax";

export const computerMove = (
  huPlayer: Tplayer,
  aiPlayer: Tplayer,
  board: Tboard,
  difficulty: Tdifficulty,
) => {
  const ComputerMove = MiniMax;

  const symbols = {
    aiPlayer,
    huPlayer,
  };

  const nextMove: number = ComputerMove(board, symbols, difficulty);

  return nextMove;
};
