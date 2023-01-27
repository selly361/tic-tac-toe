import { IGame } from "types/types";

export function changePlayer(state: IGame){
    state.currentPlayer = state.currentPlayer == "X" ? "O" : "X";

    return state;
}