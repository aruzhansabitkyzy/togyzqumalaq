'use client';
import Otau from "./Otau"
import React, {Component, useState, useEffect} from 'react'
import Qazandyq from "./Qazandyq";
import '/public/css/game.css';
import Popup from "./Popup";
import { usePlayerContext } from "@/context/PlayerContext";
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

const Board = () => {
    const [board, setBoard] = useState(initBoard);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [qazandyq1, setQazandyq1] = useState<number>(0);
    const [qazandyq2, setQazandyq2] = useState<number>(0);
    const [tuzdyq1, setTuzdyq1] = useState(-1);
    const [tuzdyq2, setTuzdyq2] = useState(-1);
    const [winner, setWinner] = useState(-1);
    const [popupOpen, setPopupOpen] = useState(false);
    const context = usePlayerContext();
    


    function switchTurn(playerId: number) {
        setCurrentPlayer(playerId ==0 ? 1 : 0)
    }
    useEffect(() => {
        isWinner()
    }, [qazandyq1])

    useEffect(() => {
        isWinner()
    },[qazandyq2])
    function isWinner() {
        if(qazandyq1 >= 81) {
            setWinner(0)
            context.setContextWinner(0)
            setPopupOpen(true)
        }
        else if(qazandyq2 >= 81){
            setWinner(1);
            context.setContextWinner(1)
            setPopupOpen(true)
        }
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
            setPopupOpen(true)
        }
        else if(currentPlayer == 1) {
            setTuzdyq2(id);
            setPopupOpen(true)
        }

        context.setContextTuzdyq(id, tempBoard[id].playerId)
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
        console.log("here " + el.playerId)
        console.log(el)
        //check if the click was from the current player
        if(currentPlayer === el.playerId) {
            console.log(currentPlayer +  ' ' + el.playerId)
            //get the index of an object in initBoard
            const curOtauInd = getIndex(el.playerId, el.id);
            // the num of qumalaq
            let qumalaqs = el.count;
            // if 0 or 1 then stop
            if (qumalaqs <=1) return;
            // save the board to temporary array and leave 1 to current otau
            const tempBoard = [...board];
            tempBoard[curOtauInd].count = 1;
            qumalaqs--;
           
            let nextOtauInd = (curOtauInd + 1) % tempBoard.length;
            var scoreFromTuzdyq1 = 0;
            var scoreFromTuzdyq2 = 0;
            while (qumalaqs > 0) {
                // increment the num of qumalaq for otau at index nextOtauInd
                if (tempBoard[nextOtauInd].tuzdyq && tempBoard[nextOtauInd].playerId === 0) {
                    scoreFromTuzdyq1++;
                  } else if (tempBoard[nextOtauInd].tuzdyq && tempBoard[nextOtauInd].playerId === 1) {
                    scoreFromTuzdyq2++;
                  } else {
                    tempBoard[nextOtauInd].count++;
                  }
                qumalaqs--;
                nextOtauInd = (nextOtauInd + 1) % tempBoard.length;
            }
            nextOtauInd--;

            setBoard(tempBoard);
            // the problem is the score from your own side is not counted
            
            const result = tempBoard[nextOtauInd].count;
            var currentPlayerScore = currentPlayer === 0 ? qazandyq1 : qazandyq2;
            var opponentPlayerScore = currentPlayer === 0 ? qazandyq2 : qazandyq1;

            currentPlayerScore += scoreFromTuzdyq1;
            opponentPlayerScore += scoreFromTuzdyq2;
            if (currentPlayer === 0) {
                setQazandyq1(currentPlayerScore);
                context.setContextScore(currentPlayerScore, 0)
                setQazandyq2(opponentPlayerScore);
                context.setContextScore(opponentPlayerScore, 1)
            } else {
                setQazandyq1(opponentPlayerScore);
                context.setContextScore(opponentPlayerScore, 0)
                setQazandyq2(currentPlayerScore);
                context.setContextScore(currentPlayerScore, 1)
            }


            if((result % 2 == 0 || result == 3) && tempBoard[nextOtauInd].playerId!= currentPlayer) {
                if (currentPlayer === 0) {
                  setQazandyq1(tempBoard[nextOtauInd].count + qazandyq1);
                  context.setContextScore(tempBoard[nextOtauInd].count, 0)
                } else {
                  setQazandyq2(tempBoard[nextOtauInd].count + qazandyq2);
                  context.setContextScore(tempBoard[nextOtauInd].count, 1)
                }
          
                if (result === 3 && !isTuzdyq()) {
                  setTuzdyq(tempBoard, nextOtauInd);
                }
                tempBoard[nextOtauInd].count = 0;
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
                    <Otau quantity={el.count} tuzdyq={el.tuzdyq}/>
                    </div>
                ))}
            </div>
            <div className='qazandyq'>
                <Qazandyq score = {qazandyq2}/>
            </div>
        </div>

        <div className='side2'>
            <div className='qazandyq'>
                <Qazandyq score = {qazandyq1}/>
            </div>
            <div className='otaular flex'>
                {board.filter(player => player.playerId == 1).map((el) => (
                    <div className='otau' onClick={() => makeMove(el)}>
                    <Otau quantity={el.count} tuzdyq={el.tuzdyq}/>
                    </div>
                ))}
            </div>
        </div>
        
        {popupOpen && (tuzdyq1!= -1 || tuzdyq2 != -1) && (<Popup action='tuzdyq' show={popupOpen} setShow={setPopupOpen}/>)}
        
        
        {popupOpen && winner!= -1 && (<Popup action='winner' show={popupOpen} setShow={setPopupOpen}/>)}
    </div>
    )
}
export default Board;