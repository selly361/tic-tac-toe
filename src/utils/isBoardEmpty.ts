import { Tboard } from "types/types" 
export function isBoardEmpty(board){
  const isEmpty = board.some(square => typeof square == "number")

  return isEmpty;
}
