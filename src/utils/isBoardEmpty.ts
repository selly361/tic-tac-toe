import { Tboard } from "types/types" 
export function isBoardEmpty(board){
  const isEmpty = board.filter(square => typeof square == "string")

  return isEmpty;
}
