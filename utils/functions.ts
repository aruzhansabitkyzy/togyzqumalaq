import { db } from "@/firebase";
import {useRouter} from 'next/navigation'
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";
import { Player } from "./interfaces";

export function lsGet(str:string) {
    return JSON.parse(localStorage.getItem(str) || '{}')
}
export function lsSet(str:string, val: any) {
    localStorage.setItem(str, JSON.stringify(val))
}
export async function createRoom(player:Player) {
    const game = {
        status: "waiting",
        players: [player],
        gameId: `${Math.random().toString(36).substr(2,9)}_${Date.now()}`,
    }
    await db.collection('room').doc(JSON.stringify(game.gameId)).set({...game})
    lsSet("mode", "online")
};
export async function joinRoom(player:Player, room:string) 
{
    const game = doc(db, "room", JSON.stringify(room));
    const docSnap = (await getDoc(game)).data();
    if(!docSnap) {
        console.log("not found")
       return "Not Found"
    }
    
    const creator = docSnap.players.find((p: Player) => p.creator === true)
    console.log(creator)
    console.log(docSnap.status + " "  +creator.uid + " " + player.uid)

    if(docSnap.status == 'waiting' && creator.uid != player.uid) {
        console.log("here")
        await updateDoc(game, {
            players: arrayUnion(player),
            status: "ready"
        });
    }
    lsSet("mode", "online")
}