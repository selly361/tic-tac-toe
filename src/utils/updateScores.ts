import { IGame, IResults } from "types/types"

import { isBoardEmpty } from "./isBoardEmpty"

export function updateScores(state: IGame, results: IResults) {

    if (state.settings.player == state.currentPlayer) {

        if (results.win) state.scores.p1++

        else if (results.loss) state.scores.p2++

        else if(!isBoardEmpty(state.board)) state.scores.ties++

    }

    else {
        if (state.settings.against == "player") {

            if (results.win) state.scores.p2++

            else if (results.loss) state.scores.p1++

            else if(!isBoardEmpty(state.board)) state.scores.ties++

        } else {
            if (results.win) state.scores.cpu++

            else if (results.loss) state.scores.cpu++

            else if(!isBoardEmpty(state.board)) state.scores.ties++
        }
    }

    return state;
}