"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { leaveRoom, lsGet, resetGame } from "@/utils/functions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Modal from "./Modal";

export default function SideBar(props: any) {
  const user = lsGet("userName");
  const router = useRouter();
  const [remoteData, setRemoteData] = useState(props.remoteData);
  const [isOpen, setIsOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState({
    id: 0,
    name: "",
    score: 0,
  });
  const resetMutation = useMutation(resetGame);
  const exitMutation = useMutation(leaveRoom);

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
    if (user == remoteData.players[0]?.name) {
      setCurrentUser({
        id: remoteData.players[0].id,
        name: remoteData.players[0].name,
        score : remoteData.qazan0
      });
    } else {
      setCurrentUser({
        id: remoteData.players[1].id,
        name: remoteData.players[1].name,
        score: remoteData.qazan1,
      });
    }
  }, [props.remoteData]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} autoClose={false}>
        <div className="content">
          <h1>Are you sure to {pendingAction}? </h1>
          <div className="content__btns">
            <Button
              text={
                pendingAction?
                pendingAction?.charAt(0).toUpperCase() + pendingAction?.slice(1):""
              }
              size={"btn-medium"}
              onClick={pendingAction === "reset" ? handleReset : handleExit}
            />
            <Button
              text="Cancel"
              size={"btn-medium"}
              onClick={() => {
                setIsOpen(false)
                setPendingAction(null)
              }}
            />
          </div>
        </div>
      </Modal>
      <div className="sideBar">
        {remoteData.players.length <= 1 ? (
          <div className="player">
            <h2> Waiting ... </h2>
          </div>
        ) : (
          <div className={`player`}>
            <h2>
              {remoteData.players[0].name !== currentUser.name
                ? remoteData.players[0].name
                : remoteData.players[1].name}
            </h2>
            <h4>
              score:{" "}
              {remoteData.players[0].name !== currentUser.name
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
                setPendingAction('reset');
              }}
            />
          </span>
          <span>
            <Button
              text={"Exit"}
              size={"btn-large"}
              onClick={() => {
                setIsOpen(true);
                setPendingAction('exit');
              }}
            />
          </span>
        </div>
        <div className={`player`}>
          <h2>{currentUser.name}</h2>
          <h2>You</h2>
          <h4>score:{currentUser.score}</h4>
        </div>
      </div>
    </>
  );
}
