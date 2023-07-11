'use client';
import Otau from "./Otau"
import React, {Component, useState, useEffect} from 'react'
import Qazandyq from "./Qazandyq";
import '/public/css/game.css';
import {PlayerContextProps} from "@/utils/PlayerInterface";
type InitType ={
    playerId: number 
    id: number 
    count: number 
    hover: boolean
}
const initBoard = [
    { playerId: 1, id: 1, count: 9, hover: false },
    { playerId: 1, id: 2, count: 9, hover: false },
    { playerId: 1, id: 3, count: 9, hover: false },
    { playerId: 1, id: 4, count: 9, hover: false },
    { playerId: 1, id: 5, count: 9, hover: false },
    { playerId: 1, id: 6, count: 9, hover: false },
    { playerId: 1, id: 7, count: 9, hover: false },
    { playerId: 1, id: 8, count: 9, hover: false },
    { playerId: 1, id: 9, count: 9, hover: false },
    { playerId: 0, id: 1, count: 9, hover: false },
    { playerId: 0, id: 2, count: 9, hover: false },
    { playerId: 0, id: 3, count: 9, hover: false },
    { playerId: 0, id: 4, count: 9, hover: false },
    { playerId: 0, id: 5, count: 9, hover: false },
    { playerId: 0, id: 6, count: 9, hover: false },
    { playerId: 0, id: 7, count: 9, hover: false },
    { playerId: 0, id: 8, count: 9, hover: false },
    { playerId: 0, id: 9, count: 9, hover: false },
]

const Board = (props: PlayerContextProps ) => {
    const [board, setBoard] = useState(initBoard);
    const [turn, setTurn] = useState(0);
    const {player1, player2} = props;

    useEffect(() => {
         
    })
     
    function switchTurn(playerId: number) {
        if (turn !== playerId) setTurn(playerId);
    }

    function getIndex(playerId: number, id: number) {
        const index= board.findIndex(object => {
            return object.id == id && object.playerId==playerId
        })
        return index;
    }
    function updateBoard(upd:number, el:InitType) {
        console.log(upd)
        console.log(el)
        console.log(board);
        setBoard(board.map(obj => {
            if(obj.id === el.id && obj.playerId === el.playerId) {
                  return {...obj, count : upd}
            }
            else {
                return obj
            }
        }))
    }

    function makeMove(el: InitType) {
        console.log("hi")
        console.log(turn)
        console.log(el.playerId)
        if (turn === el.playerId) {
            const curOtauInd = getIndex(el.playerId, el.id);
            let qumalaqs = el.count;
            if (qumalaqs <= 0) return;
      
            const tempBoard = [...board];
            tempBoard[curOtauInd].count = 1;
            qumalaqs--;
      
            let nextOtauInd = (curOtauInd + 1) % tempBoard.length;
      
            while (qumalaqs > 0) {
              tempBoard[nextOtauInd].count++;
              qumalaqs--;
              nextOtauInd = (nextOtauInd + 1) % tempBoard.length;
            }
      
            setBoard(tempBoard);
            switchTurn(el.playerId);
          }
        
    }
    return(
        <div className='board'>
            <div className='side1'>
                <div className='otaular'>
                    {board.filter(player => player.playerId == 0).reverse().map((el) => (
                        <div className='otau' onClick={() => makeMove(el)}>
                        <Otau quantity={el.count}/>
                        </div>
                    ))}
                </div>
                <div className='qazandyq'>
                    <Qazandyq />
                </div>
            </div>

            <div className='side2'>
                <div className='qazandyq'>
                    <Qazandyq />
                </div>
                <div className='otaular flex'>
                    {board.filter(player => player.playerId == 1).map((el) => (
                        <div className='otau'>
                        <Otau quantity={el.count}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Board;