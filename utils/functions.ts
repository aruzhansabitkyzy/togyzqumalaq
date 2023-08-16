import { db } from "@/firebase";
import {
  doc,
  updateDoc,
  getDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  FieldValue,
} from "firebase/firestore";
import { initBoard } from "@/utils/constants";
import { Player } from "./interfaces";

export function lsGet(str: string) {
  return JSON.parse(localStorage.getItem(str) || "{}");
}
export function lsSet(str: string, val: any) {
  localStorage.setItem(str, JSON.stringify(val));
}
export async function createRoom({
  PLAYER_ONE,
  PLAYER_TWO,
  gameId,
}: {
  PLAYER_ONE: string;
  PLAYER_TWO: string;
  gameId: string;
}) {
  console.log("hey");
  const player = {
    id: 0,
    name: PLAYER_ONE
  };
  const game = {
    gameId: gameId,
    status: "waiting",
    players: [player],
    board: initBoard,
    currentTurn: 0,
    winner: null,
    qazan0: 0,
    tuzdyq0: -1
  };
  lsSet("userName", PLAYER_ONE);
  await db
    .collection("room")
    .doc(gameId.toString())
    .set({ ...game });
}
export async function joinRoom({ room, name }: { room: string; name: string }) {
  lsSet("userName", name);
  const game = doc(db, "room", room);
  const docSnap = (await getDoc(game)).data();
  if (!docSnap) {
    console.log("not found");
    return "Not found";
  }

  const player = {
    id: 1,
    name: name,
  };

  if (docSnap.status == "waiting") {
    console.log("here");
    await updateDoc(game, {
      status: "ready",
      players: arrayUnion(player),
      qazan1: 0,
      tuzdyq1: -1
    });
  }
}

export async function leaveRoom({ room }: { room: string }) {
  const user = lsGet("userName");
  const game = doc(db, "room", room);
  const docSnap = (await getDoc(game)).data();
  if (!docSnap) {
    console.log("not found");
    return "Not found";
  }

  const player = docSnap.players.find((player: Player) => {
    if (player.name === user) {
      return player;
    }
  });
  if (docSnap.status == "ready") {
    console.log("Leaving");
    if (docSnap.players.length == 2) {
      await updateDoc(game, {
        status: "waiting",
        players: arrayRemove(player),
      });
    } else {
      await deleteDoc(game);
    }
  }
}

export async function resetGame({ room }: { room: string }) {
  const game = doc(db, "room", room);
  const docSnap = (await getDoc(game)).data();

  if (!docSnap) {
    console.log("not found");
    return "Not found";
  }

  if (docSnap.status == "ready") {
    console.log("Resetting...");
    await updateDoc(game, {
      board: initBoard,
      winner: null,
      qazan0: 0,
      qazan1: 0,
      tuzdyq1: 0,
      tuzdyq2 : 0,
      currentTurn: 0
    });
  }
}
export async function getData(gameId: string) {
  const docRef = doc(db, "room", gameId);
  const docSnap = await getDoc(docRef);
  return docSnap?.data();
}
export async function updateData({gameId, data}  : {gameId: string, data: any}) {
  const game = doc(db, "room", gameId);
  await updateDoc(game, data);
}
