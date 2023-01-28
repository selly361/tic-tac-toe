import { Tboard, Tplayer } from "types/types";

export function minimax(
  board: Tboard,
  player: Tplayer,
  depth: number,
  aiPlayer: Tplayer
): number {
  const opponent = player === "X" ? "O" : "X";
  let bestMove: number = -1;
  let bestScore = player === aiPlayer ? -Infinity : Infinity;
  let currentScore: number;

  for (let i = 0; i < board.length; i++) {
    if (typeof board[i] === "number") {
      const newBoard = [...board];
      newBoard[i] = player;

      if (depth === 0) {
        currentScore = 0;
      } else {
        currentScore = minimax(newBoard, opponent, depth - 1, aiPlayer);
      }

      if (player === aiPlayer) {
        if (currentScore > bestScore) {
          bestScore = currentScore;
          bestMove = i;
        }
      } else {
        if (currentScore < bestScore) {
          bestScore = currentScore;
          bestMove = i;
        }
      }
    }
  }

  if (bestMove === -1) {
    return 0;
  } else {
    return bestMove;
  }
}
