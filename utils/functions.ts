import { db } from "@/firebase";
import {useRouter} from 'next/navigation'
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc, setDoc } from "firebase/firestore";
import { Player } from "./interfaces";

export function lsGet(str:string) {
    return JSON.parse(localStorage.getItem(str) || '{}')
}
export function lsSet(str:string, val: any) {
    localStorage.setItem(str, JSON.stringify(val))
}
export async function createRoom(obj:any) {
    const gameId =`${Math.random().toString(36).substr(2,9)}_${Date.now()}`
    console.log(obj);
    const game = {
        status: "waiting",
        gameId: gameId,
        obj: obj
    }
    await db.collection('room').doc(game.gameId).set({...game})
    lsSet("mode", "online")
    return gameId;
};
export async function joinRoom(room:string, name: string) 
{
    const game = doc(db, "room", room);
    const docSnap = (await getDoc(game)).data();
    if(!docSnap) {
        console.log("not found")
        return "Not found"
    }
    let gameObj = docSnap.obj 

    if(gameObj.PLAYER_ONE) gameObj.PLAYER_TWO=name;
    else gameObj.PLAYER_ONE = name;

    if(docSnap.status == 'waiting') {
        console.log("here")
        await updateDoc(game, {
            status: "ready",
            obj: gameObj
        });
    }
    lsSet("mode", "online")
}
export async function getData(gameId: string) {
    const docRef = doc(db, "room", gameId);
    const docSnap = await getDoc(docRef);
    return docSnap?.data()
}

export async function sendData(gameId:string, data:any, status: string) {
    const game = doc(db, "room", gameId);
    const send = {
        status: "ready",
        gameId: gameId,
        obj: data
    }
    await updateDoc(game, send);
}