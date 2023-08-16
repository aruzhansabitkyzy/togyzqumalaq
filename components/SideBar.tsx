"use client";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import { Player } from "@/utils/interfaces";
import { leaveRoom, lsGet, resetGame } from "@/utils/functions";
import { useMutation } from "@tanstack/react-query";
import Modal from "./ui/Modal";
import "/public/css/game.css";

export default function SideBar(props: any) {
  const user = lsGet("userName");
  const router = useRouter();
  const [remoteData, setRemoteData] = useState(props.remoteData);
  const [isOpen, setIsOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<string | null>(null);
  const resetMutation = useMutation(resetGame);
  const exitMutation = useMutation(leaveRoom);

  const isUserTurn = () => {
    return (
      remoteData.currentTurn ===
      remoteData.players.findIndex((player: Player) => player.name === user)
    );
  };

  function handleReset() {
    resetMutation.mutate({ room: remoteData.gameId });
    setIsOpen(false);
    setPendingAction(null);
  }
  function handleExit() {
    exitMutation.mutate({ room: remoteData.gameId });
    router.push("/");
    setPendingAction(null);
  }
  useEffect(() => {
    setRemoteData(props.remoteData);
    console.log(props.remoteData);
  }, [props.remoteData]);
  return (
    <>
      <div className="sideBar">
        {remoteData.players.length <= 1 ? (
          <div className="player">
            <h2> Waiting ... </h2>
          </div>
        ) : (
          <div className={`player ${!isUserTurn() ? "turn" : ""}`}>
            <h1>
              {remoteData.players[0].name !== user
                ? remoteData.players[0].name
                : remoteData.players[1].name}
            </h1>
            <h4>
              score:
              {remoteData.players[0].name !== user
                ? remoteData.qazan0
                : remoteData.qazan1}
            </h4>
          </div>
        )}
        <div className="buttons">
          <span>
            <Button
              text={"Reset"}
              size={"btn-large"}
              onClick={() => {
                setIsOpen(true);
                setPendingAction("reset");
              }}
            />
          </span>
          <span>
            <Button
              text={"Exit"}
              size={"btn-large"}
              onClick={() => {
                setIsOpen(true);
                setPendingAction("exit");
              }}
            />
          </span>
        </div>
        <div className={`player ${isUserTurn() ? "turn" : ""}`}>
          <h1>
            {remoteData.players[0].name === user
              ? remoteData.players[0].name
              : remoteData.players[1].name}
          </h1>
          <h2>You</h2>
          <h4>
            score:{" "}
            {remoteData.players[0].name === user
              ? remoteData.qazan0
              : remoteData.qazan1}
          </h4>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} autoClose={false}>
        <div className="content">
          <h1>Are you sure to {pendingAction}? </h1>
          <div className="content__btns">
            <Button
              text={
                pendingAction
                  ? pendingAction?.charAt(0).toUpperCase() +
                    pendingAction?.slice(1)
                  : ""
              }
              size={"btn-medium"}
              onClick={pendingAction === "reset" ? handleReset : handleExit}
            />
            <Button
              text="Cancel"
              size={"btn-medium"}
              onClick={() => {
                setIsOpen(false);
                setPendingAction(null);
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
