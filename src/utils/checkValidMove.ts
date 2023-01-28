import { Tboard } from "types/types";

export function checkValidMove(move: number, board: Tboard){
    const square = board[move];

    if(typeof square === "number") return true

    else return false
}