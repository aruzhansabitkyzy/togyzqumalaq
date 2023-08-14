import React, { useState, useEffect } from "react";
import { BoardCell, Player } from "@/utils/interfaces";
import Otau from "../ui/Otau";
import Qazandyq from "../ui/Qazandyq";
import { lsGet } from "@/utils/functions";
import { useMutation } from "@tanstack/react-query";
import { updateData } from "@/utils/functions";

export default function Board(props: any) {
  const user = lsGet("userName");
  const [remoteData, setRemoteData] = useState(props.remoteData);
  const updateMutation = useMutation(updateData);

  // my side
  const [side, setSide] = useState({
    id: -1,
    name: "",
  });
  // score for both players
  const [score, setScore] = useState({ me: 0, other: 0 });

  //the player should click on his own otau to make a move
  function checkClick(playerId: number) {
    if (remoteData.currentTurn === playerId) return true;
    return false;
  }

  function checkTurn() {
    if (side.id === remoteData.currentTurn) {
      return true;
    }
    return false;
  }

  function switchTurn() {
    const turn = remoteData.currentTurn == 0 ? 1 : 0;
    console.log("Switchig turn ... " + " new switch " + turn);
    const data = {
      currentTurn: turn,
    };
    updateRemote(data);
  }

  //gets the index of an object in board array based on playerId and otauId
  //   { playerId: 1, otauId: 1, count: 9, hover: false, tuzdyq: false }
  function getIndex(playerId: number, otauId: number) {
    const index = remoteData.board.findIndex((object: BoardCell) => {
      return object.id == otauId && object.playerId == playerId;
    });
    return index;
  }

  //checks if otau has sufficient amount of qumalaq to make a move
  function validOtau(playerId: number, otauId: number) {
    const index = getIndex(playerId, otauId);
    if (remoteData.board[index].count > 1) {
      return true;
    }
    return false;
  }

  function checkResultingOtau(tempBoard: BoardCell[], nextOtauInd: number) {
    if (tempBoard[nextOtauInd].playerId != remoteData.currentTurn.id)
      return true;
    return false;
  }

  function setMyScore(result: number) {
    if (remoteData.currentTurn.id == side.id) {
      setScore({ ...score, me: score.me + result });
    } else setScore({ ...score, other: score.other + result });
  }

  function moveToQazan(tempBoard: BoardCell[], nextOtauInd: number) {
    let result = tempBoard[nextOtauInd].count;
    let isOtherSide = checkResultingOtau(tempBoard, nextOtauInd);
    console.log(isOtherSide + " " + result);
    if (isOtherSide && result % 2 == 0) {
      setMyScore(result);
      tempBoard[nextOtauInd].count = 0;
    } else if (
      isOtherSide &&
      result == 3 &&
      !isTuzdyq(tempBoard, nextOtauInd, remoteData.currentTurn.id)
    ) {
      setMyScore(result);
      createTuzdyq(tempBoard, nextOtauInd);
      tempBoard[nextOtauInd].count = 0;
    }
    console.log(
      "qazan0:  " + remoteData.qazan0 + "  qazan1: " + remoteData.qazan1
    );
    if (side.id == 0) {
      updateRemote({
        board: tempBoard,
        qazan0: remoteData.qazan0 + score.me + result,
      });
    } else {
      updateRemote({
        board: tempBoard,
        qazan1: remoteData.qazan1 + score.me + result,
      });
    }

    switchTurn();
    setScore({ me: 0, other: 0 });
  }

  function updateRemote(data: any) {
    console.log("remote");
    updateMutation.mutate({ gameId: remoteData.gameId, data: data });
  }

  // check if the cell is tuzdyq set to true
  function isTuzdyq(
    tempBoard: BoardCell[],
    nextOtauInd: number,
    playerId: number
  ) {
    if (
      tempBoard[nextOtauInd].playerId !== playerId &&
      tempBoard[nextOtauInd].tuzdyq
    ) {
      return true;
    }
    return false;
  }

  // set a tuzdyq
  function createTuzdyq(tempBoard: BoardCell[], nextOtauInd: number) {
    tempBoard[nextOtauInd].tuzdyq = true;
    if (tempBoard[nextOtauInd].playerId == side.id) {
      updateRemote({
        tuzdyq0: side.id == 0 ? nextOtauInd : -1,
        tuzdyq1: side.id == 1 ? nextOtauInd : -1,
      });
    } else {
      updateRemote({
        tuzdyq0: side.id == 0 ? nextOtauInd : -1,
        tuzdyq1: side.id == 1 ? nextOtauInd : -1,
      });
    }
  }

  function makeMove(el: BoardCell) {
    if (
      checkClick(el.playerId) &&
      validOtau(el.playerId, el.id) &&
      checkTurn()
    ) {
      let qumalaqs = el.count;
      const curOtauInd = getIndex(el.playerId, el.id);
      // save the board to temporary array and leave 1 to current otau
      const tempBoard = [...remoteData.board];
      tempBoard[curOtauInd].count = 1;
      qumalaqs--;

      let nextOtauInd = (curOtauInd + 1) % tempBoard.length;
      while (qumalaqs > 0) {
        // increment the num of qumalaq for otau at index nextOtauInd
        if (
          tempBoard[nextOtauInd].tuzdyq &&
          tempBoard[nextOtauInd].playerId === 0
        ) {
          side.id == 0
            ? setScore({ ...score, me: score.me + 1 })
            : setScore({ ...score, other: score.other + 1 });
        } else if (
          tempBoard[nextOtauInd].tuzdyq &&
          tempBoard[nextOtauInd].playerId === 1
        ) {
          side.id == 1
            ? setScore({ ...score, me: score.me + 1 })
            : setScore({ ...score, other: score.other + 1 });
        } else {
          tempBoard[nextOtauInd].count++;
        }
        qumalaqs--;
        nextOtauInd = (nextOtauInd + 1) % tempBoard.length;
      }

      nextOtauInd--;
      moveToQazan(tempBoard, nextOtauInd);
    }
  }
  // fetch data in real time
  useEffect(() => {
    setRemoteData(props.remoteData);
    // set my side searching by my username
    let cur = props.remoteData.players.find((player: Player) => {
      if (player.name === user) {
        return player;
      }
    });
    setSide(cur);
  }, [props.remoteData]);
  return (
    <div className="board">
      <div className="board__side opponentSide">
        <div className="otaus">
          {remoteData?.board
            ?.filter(
              (player: BoardCell) => player.playerId == (side.id == 0 ? 1 : 0)
            )
            .reverse()
            .map((el: BoardCell) => (
              <div
                className="otau"
                key={el.playerId + el.id}
                onClick={() => makeMove(el)}
              >
                <Otau quantity={el.count} tuzdyq={el.tuzdyq} hover={el.hover} />
              </div>
            ))}
        </div>
      </div>
      <Qazandyq
        quantity={
          remoteData.players.find((player: Player) => player.name === user)
            .id === 0
            ? remoteData.qazan0
            : remoteData.qazan1
        }
      />
      <Qazandyq
        quantity={
          remoteData.players.find((player: Player) => player.name === user)
            .id === 0
            ? remoteData.qazan1
            : remoteData.qazan0
        }
      />
      <div className="board__side mySide">
        <div className="otaus">
          {remoteData?.board
            ?.filter((player: BoardCell) => player.playerId == side.id)
            .map((el: BoardCell) => (
              <div
                className="otau"
                key={el.playerId + el.id}
                onClick={() => makeMove(el)}
              >
                <Otau quantity={el.count} tuzdyq={el.tuzdyq} hover={el.hover} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
