'use client';
import Otau from "./Otau"
import React, {Component, useState, useEffect} from 'react'
import Qazandyq from "./Qazandyq";
import '/public/css/game.css';
import {PlayerContextProps} from "@/utils/PlayerInterface";
type InitType = {
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
    const [qazandyq1, setQazandyq1] = useState<number>(0);
    const [qazandyq2, setQazandyq2] = useState<number>(0);
    const [tuzdyq1, setTuzdyq1] = useState(-1);
    const [tuzdyq2, setTuzdyq2] = useState(-1);
    
    useEffect(() => {
         
    })
     
    function switchTurn(playerId: number) {
        setTurn(playerId ==0 ? 1 : 0)
    }

    function getIndex(playerId: number, id: number) {
        const index= board.findIndex(object => {
            return object.id == id && object.playerId==playerId
        })
        return index;
    }
    function makeMove(el: InitType) {
        //check if the click was from the current player
        if (turn === el.playerId) {
            //get the index of an object in initBoard
            const curOtauInd = getIndex(el.playerId, el.id);
            // the num of qumalaq
            let qumalaqs = el.count;
            // of 0 then stop
            if (qumalaqs <= 0) return;
            // save the board to temporary array and leave 1 to current otau
            const tempBoard = [...board];
            tempBoard[curOtauInd].count = 1;
            qumalaqs--;
           
            let nextOtauInd = (curOtauInd + 1) % tempBoard.length;
      
            while (qumalaqs > 0) {
                // increment the num of qumalaq for otau at index nextOtauInd
              tempBoard[nextOtauInd].count++;
              qumalaqs--;
              nextOtauInd = (nextOtauInd + 1) % tempBoard.length;
            }
            setBoard(tempBoard);
            var result = tempBoard[nextOtauInd].count;
            if(result % 2 == 0 || result == 3) {
                el.playerId==0 ? setQazandyq1(qazandyq1+ tempBoard[nextOtauInd].count) : setQazandyq2(qazandyq2 + tempBoard[nextOtauInd].count);
                if(result == 3) {
                    el.playerId== 0 ? setTuzdyq1(nextOtauInd) : setTuzdyq2(nextOtauInd);
                }
            }
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
                    <Qazandyq score = {qazandyq1}/>
                </div>
            </div>

            <div className='side2'>
                <div className='qazandyq'>
                    <Qazandyq score = {qazandyq2}/>
                </div>
                <div className='otaular flex'>
                    {board.filter(player => player.playerId == 1).map((el) => (
                        <div className='otau' onClick={() => makeMove(el)}>
                        <Otau quantity={el.count}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Board;