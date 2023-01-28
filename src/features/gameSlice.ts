import {
  IGame,
  IcomputerMove,
  Tagainst,
  Tdifficulty,
  Tplayer,
} from "types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  changePlayer,
  checkValidMove,
  computerMove,
  isBoardEmpty,
  isTerminal,
  updateScores,
} from "utils";

const initialState: IGame = {
  board: Array.from({ length: 9 }, (_, i) => i),
  winningCombo: [],
  currentPlayer: "X",
  settings: {
    difficulty: "Hard",
    against: "cpu",
    player: "X",
  },

  scores: {
    p1: 0,
    p2: 0,
    cpu: 0,
    ties: 0,
  },
};

const gameSlice = createSlice({
  name: "game",

  initialState,

  reducers: {
    setAgainstWho: (state, action: PayloadAction<Tagainst>) => {
      state.settings.against = action.payload;
    },

    setDifficulty: (state, action: PayloadAction<Tdifficulty>) => {
      state.settings.difficulty = action.payload;
    },

    playerVPlayer: (state, action: PayloadAction<number>) => {

      if (isBoardEmpty(state.board) && checkValidMove(action.payload, state.board)) {
        
        state.board[action.payload] = state.currentPlayer;

        const results = isTerminal(state.board, state.currentPlayer);

        state = updateScores(state, results);

        state = changePlayer(state);
      }
    },
    

    playerVCpu: (state, action: PayloadAction<number>) => {
      const { player } = state.settings;

      if (
        player == state.currentPlayer &&
        isBoardEmpty(state.board) &&
        checkValidMove(action.payload, state.board)
      ) {
        state.board[action.payload] = state.currentPlayer;
        state = changePlayer(state);

        if (isBoardEmpty(state.board)) {
          const move = computerMove(state);
          state.board[move] = state.currentPlayer;
        }

        const results = isTerminal(state.board, state.currentPlayer);
        state = updateScores(state, results);

        state = changePlayer(state);
      } else if (player !== state.currentPlayer) {
        const move = computerMove(state);

        state.board[move] = state.currentPlayer;
        state = changePlayer(state);
      }
    },


    
  },
});

export default gameSlice.reducer;
export const { playerVPlayer, setAgainstWho, setDifficulty, playerVCpu } =
  gameSlice.actions;
