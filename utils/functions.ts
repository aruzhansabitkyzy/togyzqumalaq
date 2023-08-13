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
import { initBoard } from "@/lib/constants";
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
    name: PLAYER_ONE,
    tuzdyq: -1,
    score: 0
  };
  const game = {
    gameId: gameId,
    status: "waiting",
    players: [player],
    board: initBoard,
    currentTurn: player,
    winner: null,
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
    tuzdyq: -1,
    score: 0,
  };

  if (docSnap.status == "waiting") {
    console.log("here");
    await updateDoc(game, {
      status: "ready",
      players: arrayUnion(player),
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
    alert(JSON.stringify(player));
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

  const player = docSnap.players.map((player: Player) => {
    player.score = 0;
    player.tuzdyq = -1;
  });

  if (docSnap.status == "ready") {
    console.log("Resetting...");
    console.log(player)
    await updateDoc(game, {
      board: initBoard,
      winner: null,
      
    });
  }
}
export async function getData(gameId: string) {
  const docRef = doc(db, "room", gameId);
  const docSnap = await getDoc(docRef);
  return docSnap?.data();
}
export async function updateData(gameId: string, data: any, status: string) {
  const game = doc(db, "room", gameId);
  await updateDoc(game, data);
}
