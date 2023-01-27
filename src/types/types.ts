type TSquare = "X" | "O" | number;

type Tboard = TSquare[];

type TWinningCombo = number[];

type Tplayer = "X" | "O";

type Tdifficulty = "Easy" | "Normal" | "Hard";


type Tagainst = "cpu" | "player";




interface IGameSettings {
  against: Tagainst;
  player: Tplayer;
  difficulty: Tdifficulty;
}

interface Iscores {
  p1: number;
  p2: number;
  cpu: number;
  ties: number;
}

interface IGame {
  board: Tboard;
  winningCombo: TWinningCombo;
  settings: IGameSettings;
  scores: Iscores;
  currentPlayer: "X" | "O";
}


interface IcomputerMove {
    huPlayer: Tplayer;
    aiPlayer: Tplayer;
    difficulty: Tdifficulty;
    board: Tboard;
}


interface IResults {
  draw: boolean;
  win: boolean;
  loss: boolean;
}

export type {
  IGame,
  IGameSettings,
  Iscores,
  TSquare,
  TWinningCombo,
  Tboard,
  Tdifficulty,
  Tplayer,
  IcomputerMove,
  Tagainst,
  IResults
};
