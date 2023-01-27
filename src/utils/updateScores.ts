import { IGame, IResults } from "types/types"


export function updateScores(state: IGame, results: IResults) {

    if (state.settings.player == state.currentPlayer) {

        if (results.win) state.scores.p1++

        else if (results.loss) state.scores.p2++

        else if (results.draw) state.scores.ties++

    }

    else {
        if (state.settings.against == "player") {

            if (results.win) state.scores.p2++

            else if (results.loss) state.scores.p1++

            else if (results.draw) state.scores.ties++

        } else {
            if (results.win) state.scores.cpu++

            else if (results.loss) state.scores.cpu++

            else if (results.draw) state.scores.ties++
        }
    }

    return state;
}