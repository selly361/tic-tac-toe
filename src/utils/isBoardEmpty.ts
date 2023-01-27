import { Tboard } from "types/types"

export function isBoardEmpty(board: Tboard){
  const isEmpty = board.some(square => typeof square == "number")

  return isEmpty;
}
