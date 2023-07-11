'use client';
import Game from '@/gameManager/Game';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type GameState = {
    game: Game | null
}


const initialState:GameState = {
    game: null
}



const settingsSlice= createSlice({
    name:"game",
    initialState:initialState,
    reducers:{
        createGame: (state, action:PayloadAction<{player1: Player, player2: Player}>) => {
            const { player1, player2 } = action.payload;
            state.game = new Game(player1, player2);
          },
          makeMove: (state, action:PayloadAction<{startingIndex: number}>) => {
            const { startingIndex } = action.payload;
            state.game?.makeMove(startingIndex);
          },
          setBoard: (state, action:PayloadAction<{board: number[][]}>) => {
            const { board } = action.payload;
            state.game?.setBoard(board);
          },
     }
})

export const {createGame, makeMove, setBoard} = settingsSlice.actions;
export default settingsSlice.reducer;
