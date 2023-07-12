'use client';
import Otau from "./Otau"
import React, {Component, useState, useEffect} from 'react'
import Qazandyq from "./Qazandyq";
import '/public/css/game.css';
import {PlayerContextProps} from "@/utils/PlayerInterface";
import { current } from "@reduxjs/toolkit";
type BoardCell = {
    playerId: number 
    id: number 
    count: number 
    hover: boolean,
    tuzdyq: boolean
}
const initBoard: BoardCell[] = [
    { playerId: 1, id: 1, count: 9, hover: false, tuzdyq: false },
    { playerId: 1, id: 2, count: 9, hover: false, tuzdyq: false },
    { playerId: 1, id: 3, count: 9, hover: false, tuzdyq: false },
    { playerId: 1, id: 4, count: 9, hover: false, tuzdyq: false },
    { playerId: 1, id: 5, count: 9, hover: false, tuzdyq: false },
    { playerId: 1, id: 6, count: 9, hover: false, tuzdyq: false },
    { playerId: 1, id: 7, count: 9, hover: false, tuzdyq: false },
    { playerId: 1, id: 8, count: 9, hover: false, tuzdyq: false },
    { playerId: 1, id: 9, count: 9, hover: false, tuzdyq: false },
    { playerId: 0, id: 1, count: 9, hover: false, tuzdyq: false },
    { playerId: 0, id: 2, count: 9, hover: false, tuzdyq: false },
    { playerId: 0, id: 3, count: 9, hover: false, tuzdyq: false },
    { playerId: 0, id: 4, count: 9, hover: false, tuzdyq: false },
    { playerId: 0, id: 5, count: 9, hover: false, tuzdyq: false },
    { playerId: 0, id: 6, count: 9, hover: false, tuzdyq: false },
    { playerId: 0, id: 7, count: 9, hover: false, tuzdyq: false },
    { playerId: 0, id: 8, count: 9, hover: false, tuzdyq: false },
    { playerId: 0, id: 9, count: 9, hover: false, tuzdyq: false },
]

const Board = (props: PlayerContextProps ) => {
    const [board, setBoard] = useState(initBoard);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [qazandyq1, setQazandyq1] = useState<number>(0);
    const [qazandyq2, setQazandyq2] = useState<number>(0);
    const [tuzdyq1, setTuzdyq1] = useState(-1);
    const [tuzdyq2, setTuzdyq2] = useState(-1);
    const {player1, player2} = props;
    
    useEffect(() => {
         
    }, [tuzdyq1])

    useEffect(() => {

    }, [tuzdyq2])
     
    useEffect(() => {
         props.player1?.setScore(qazandyq1);
    }, [qazandyq1])

    useEffect(() => {
        props.player2?.setScore(qazandyq2)
    }, [qazandyq2])

    function switchTurn(playerId: number) {
        setCurrentPlayer(playerId ==0 ? 1 : 0)
    }
    function setTuzdyq(tempBoard:{
        playerId: number;
        id: number;
        count: number;
        hover: boolean;
        tuzdyq: boolean;
    }[], id: number) {
        
        if(tempBoard[id].playerId != currentPlayer) {
            tempBoard[id].tuzdyq = true;
        }

        if(currentPlayer ==0) {
            setTuzdyq1(id);
        }
        else if(currentPlayer == 1) {
            setTuzdyq2(id);
        }
    }

    function getIndex(playerId: number, id: number) {
        const index= board.findIndex(object => {
            return object.id == id && object.playerId==playerId
        })
        return index;
    }

    function isTuzdyq() {
        if(currentPlayer==0) return tuzdyq1!= -1
        else return tuzdyq2 != -1
    }
    
    function makeMove(el: BoardCell) {
        //check if the click was from the current player
        if (currentPlayer === el.playerId) {
            //get the index of an object in initBoard
            const curOtauInd = getIndex(el.playerId, el.id);
            // the num of qumalaq
            let qumalaqs = el.count;
            // of 0 then stop
            if (qumalaqs <= 0) return;
            if(qumalaqs == 1) return;
            // save the board to temporary array and leave 1 to current otau
            const tempBoard = [...board];
            tempBoard[curOtauInd].count = 1;
            qumalaqs--;
           
            let nextOtauInd = (curOtauInd + 1) % tempBoard.length;
            var scoreFromTuzdyq1 = 0;
            var scoreFromTuzdyq2 = 0;
            while (qumalaqs > 0) {
                // increment the num of qumalaq for otau at index nextOtauInd
                // tempBoard[nextOtauInd].tuzdyq && tempBoard[nextOtauInd].playerId == 0 ? scoreFromTuzdyq1++ : ''
                // tempBoard[nextOtauInd].tuzdyq && tempBoard[nextOtauInd].playerId == 1 ? scoreFromTuzdyq2++ : ''
                // !tempBoard[nextOtauInd].tuzdyq ? tempBoard[nextOtauInd].count++ : '';
                tempBoard[nextOtauInd].count++ 
                console.log(qumalaqs + " at " + nextOtauInd )
                qumalaqs--;
                nextOtauInd = (nextOtauInd + 1) % tempBoard.length;
            }
            nextOtauInd--;
            setBoard(tempBoard);
            var result = tempBoard[nextOtauInd].count;
            if((result % 2 == 0 || result == 3) && tempBoard[nextOtauInd].playerId!= currentPlayer) {
                var qazan1= qazandyq1 + scoreFromTuzdyq1 + tempBoard[nextOtauInd].count
                var qazan2 =qazandyq2 + scoreFromTuzdyq2 + tempBoard[nextOtauInd].count
                currentPlayer==0 ? setQazandyq2(qazan2) : setQazandyq1(qazan1);
                if(result == 3 && !isTuzdyq()) {
                    setTuzdyq(tempBoard, nextOtauInd)
                }
                tempBoard[nextOtauInd].count = 0;
            }
            
            switchTurn(el.playerId);
          }
        
    }

    const renderBoardSide = (playerId: number) => {
        return (
          <div className="otaular">
            {board
              .filter((player) => player.playerId === playerId)
              .reverse()
              .map((el) => (
                <div className="otau" onClick={() => makeMove(el)}>
                  <Otau quantity={el.count} tuzdyq={el.tuzdyq} />
                </div>
              ))}
          </div>
        );
      };
    return(
        <div className='board'>
        <div className='side1'>
            <div className='otaular'>
                {board.filter(player => player.playerId == 0).reverse().map((el) => (
                    <div className='otau' onClick={() => makeMove(el)}>
                    <Otau quantity={el.count} tuzdyq={el.tuzdyq}/>
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
                    <Otau quantity={el.count} tuzdyq={el.tuzdyq}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}
export default Board;