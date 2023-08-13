"use client";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "/public/css/home.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createRoom, joinRoom } from "@/utils/functions";
import { auth } from "../firebase";
import { lsSet, lsGet } from "@/utils/functions";
import Loading from "@/components/Loading";

export default function Home() {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const router = useRouter();
  const currentUser = auth.currentUser;


  const mutationCreate = useMutation(createRoom);
  const mutationJoin = useMutation(joinRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries(['room', room]);
    }
  })

  if (mutationCreate.isSuccess) router.push(`room/${lsGet("id")}`);
  if(mutationJoin.isSuccess) router.push(`room/${room}`)

  async function handleCreate() {
    lsSet("id", `${Math.random().toString(36).substr(2, 9)}_${Date.now()}`);

    mutationCreate.mutate({
      PLAYER_ONE: name,
      PLAYER_TWO: "Waiting...",
      gameId: lsGet("id"),
    });
  }

  async function handleJoin() {
    if (room.trim() === "" || name.trim() === "") return;
        mutationJoin.mutate({
          room: room,
          name: name
        })
  }
  return (
    <>
      {(mutationCreate.isLoading || mutationJoin.isLoading) && <Loading />}
      <div className="home bg-light3 dark:bg-dark3">
        <div className="container home__container">
          <div className="home__left">
            <div className="home__desc">
              <h1>Welcome to Togyzqumalaq Online!</h1>
              <h2>
                Discover and master the traditional Kazakh game of strategy and
                skill !
              </h2>
              <h4>
                Togyzqumalaq is a time-honored game played between two people on
                a unique board. Immerse yourself in the rich culture of
                Kazakhstan while challenging your strategic thinking and
                decision-making skills.
              </h4>
            </div>
            <div className="home__tutorial">
              <Link
                href="/rules"
                className="home__bottom_btns home__game_rules hover:bg-light2 dark:hover:bg-dark2"
              >
                <div>
                  <span>Rules</span>
                </div>
              </Link>
              <Link
                href="/tutorial"
                className="home__bottom_btns home__game_tutorial hover:bg-light2 dark:md:hover:bg-dark2"
              >
                <div>
                  <span>Live tutorial</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="home__right">
            <div className="home__play">
              <label className="label text-black dark:text-white">
                Player Name:{" "}
              </label>
              <br />
              <input
                className="home__input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <br />
              <label className="label text-black dark:text-white">
                Room ID :{" "}
              </label>
              <br />
              <input
                className="home__input"
                type="text"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              ></input>
              <br />
              <div className="home__buttons">
                <Button
                  text={"Create a room"}
                  size={"btn-medium"}
                  onClick={() => handleCreate()}
                />
                <Button
                  text={"Join a room"}
                  size={"btn-medium"}
                  onClick={() => handleJoin()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

