import { lsGet, lsSet } from "@/utils/functions";
import React from "react";
//components
import { Board } from "./Board";
import SideBar from "../ui/SideBar";
//constants and interfaces
import { initBoard } from "@/utils/constants";
import { BoardCell, GameType } from "@/utils/interfaces";

export default class Game extends React.Component<{}, GameType> {
    constructor(props:any) {
        super(props)

        this.state = {
            turn: Math.round(Math.random()),
            winner: -1,
            complete : false,
            mode: lsGet("mode") || '',
            board: initBoard
        }

        this.newGame = this.newGame.bind(this);
        this.completed = this.completed.bind(this);
        this.updateTurn = this.updateTurn.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
    }

    newGame() {
        localStorage.clear()
        window.location.reload()
    }

    completed(winner : number) {
        this.setState({
            complete: true,
            winner : winner
        })
    }

    updateTurn() {
        let newTurn = (this.state.turn == 1) ? 2 : 1
        this.setState({
            turn: newTurn
        })
    }

    resetBoard() {
        this.setState({
            board: initBoard,
            complete: false
        })
        this.updateTurn()
    }
    exitGame() {
        this.setState({
            complete: true
        })
    }
    updateBoard() {

    }
    render() {
        return(
            <div className='game bg-light3 dark:bg-dark3'>
                <Board 
                 {...this.state}
                 completed = {this.completed}
                 updateTurn = {this.updateTurn}
                 updateBoard = {this.updateBoard}
                />
                <SideBar 
                    {...this.state}
                    resetBoard = {this.resetBoard}
                    exitGame = {this.exitGame}
                />
            </div>
           
        ) 
    }
}