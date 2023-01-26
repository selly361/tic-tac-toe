import {
  IGame,
  IcomputerMove,
  Tagainst,
  Tdifficulty,
  Tplayer,
} from "types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { computerMove } from "utils/computerMove";

const initialState: IGame = {
  board: Array.from({ length: 9 }, (_, i) => i),
  winningCombo: [],
  currentPlayer: "X",
  settings: {
    difficulty: "Normal",
    against: "cpu",
    player: "X",
  },

  scores: {
    p1: 0,
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

    playerMove: (state, action: PayloadAction<number>) => {
      const { difficulty, player, against } = state.settings;


      if (against == "player" && !state.board[action.payload]) {

        state.board[action.payload] = state.currentPlayer;
        state.currentPlayer = state.currentPlayer == "X" ? "O" : "X";

        

      } else if (against == "cpu") {

        if (player == state.currentPlayer && !state.board[action.payload]) {
          state.board[action.payload] = state.currentPlayer;
          state.currentPlayer = state.currentPlayer == "O" ? "X" : "O";


          const move = computerMove(
            player,
            state.currentPlayer,
            state.board,
            difficulty
          );

          state.board[move] = state.currentPlayer;
          state.currentPlayer = state.currentPlayer == "O" ? "X" : "O";
        }

        else if (player !== state.currentPlayer) {
          const move = computerMove(
            player,
            state.currentPlayer,
            state.board,
            difficulty
          );

          state.board[move] = state.currentPlayer;
          state.currentPlayer = state.currentPlayer == "O" ? "X" : "O";
        }
      }
    },


    
  },
});
