"use client";
import "/public/css/game.css";
import Ball from "./Ball";
import { useEffect, useState } from "react";
import { QazanProp } from "@/utils/interfaces";

export default function Qazandyq(props: QazanProp) {
  const quantity = props.quantity;
  const [balls, setBalls] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let tempBalls = [];

    for (let i = 0; i < quantity; i++) {
      tempBalls.push(<Ball key={i} />);
    }
    setBalls([...tempBalls]);
  }, [props.quantity]);

  return (
    <div className="qazandyq">
      <div className="counter">{quantity}</div>
      <div className="qazandyq__balls">
        {balls && balls.filter((el, index) => index < 54).map((el) => el)}
        <div className="qazandyq__balls__r1">
          {balls &&
            balls
              .filter((el, index) => index >= 54 && index < 81)
              .map((el) => el)}
        </div>
        <div className="qazandyq__balls__r2">
          {balls && balls.filter((el, index) => index >= 81).map((el) => el)}
        </div>
      </div>
    </div>
  );
}
