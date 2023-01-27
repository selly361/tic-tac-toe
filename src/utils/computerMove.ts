import { IGame, Tboard, Tdifficulty, Tplayer } from "types/types";

import MiniMax from "tic-tac-toe-minimax";

export const computerMove = (state: IGame) => {
  const { ComputerMove } = MiniMax;

  const symbols = {
    aiPlayer: state.settings.player == "X" ? "O" : "X",
    huPlayer: state.settings.player,
  };

  const nextMove: number = ComputerMove(state.board, symbols, state.settings.difficulty);

  return nextMove;
};
