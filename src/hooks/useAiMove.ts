import { IcomputerMove, Tboard } from "types/types";

import Minimax from "tic-tac-toe-minimax";

export const useAiMove = ({
  difficulty,
  huPlayer,
  aiPlayer,
  board,
}: IcomputerMove): Tboard => {
  const { ComputerMove } = Minimax;

  const symbols = {
    huPlayer,
    aiPlayer,
  };

  const nextMove: number = ComputerMove(board, symbols, difficulty);

  board[nextMove] = aiPlayer;

  return board;
};
