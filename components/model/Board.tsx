import React, { useState, useEffect } from "react";
import { BoardCell } from "@/utils/interfaces";
import Otau from "../ui/Otau";
import Qazandyq from "../ui/Qazandyq";

export default function Board(props: any) {
  const [remoteData, setRemoteData] = useState(props.remoteData);

  useEffect(() => {
    setRemoteData(props.remoteData);
  }, [props.remoteData]);
  return (
    <div className="board">
      <div className="board__side opponentSide">
        <div className="otaus">
          {remoteData?.board
            ?.filter((player: BoardCell) => player.playerId == 1)
            .reverse()
            .map((el: BoardCell) => (
              <div className="otau" key={el.playerId + el.id}>
                <Otau quantity={el.count} tuzdyq={el.tuzdyq} hover={el.hover} />
              </div>
            ))}
        </div>
      </div>
      <Qazandyq quantity={0} />
      <Qazandyq quantity={0} />
      <div className=" board__side mySide">
        <div className="otaus">
          {remoteData?.board
            ?.filter((player: BoardCell) => player.playerId == 2)
            .reverse()
            .map((el: BoardCell) => (
              <div className="otau" key={el.playerId + el.id}>
                <Otau quantity={el.count} tuzdyq={el.tuzdyq} hover={el.hover} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
