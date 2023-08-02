'use client';
import {useState, useEffect, useContext} from 'react';
import Button from '@/components/ui/Button'
import '/public/css/home.css'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createRoom, joinRoom } from '@/utils/functions';
import {auth } from '../firebase';
import GameOn from '@/components/model/GameOn';
import { lsSet } from '@/utils/functions';
import {onAuthStateChanged } from "firebase/auth";

export default function Home() {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const currentUser = auth.currentUser
    
    useEffect(() =>{
        // make sure the user is authenticated anonymously
        onAuthStateChanged(auth, (user) => {
            console.log("Authenticated")
        });
    }, [])

    async function handleCreate() {
        // creator info
        let gameObj = JSON.parse(JSON.stringify(new GameOn(name, "null")));
        gameObj.setTurn = name;
        setLoading(true);
        try {
            let roomID = await createRoom({
              ...gameObj,
              PLAYER_ONE: name,
            });
            lsSet("user", currentUser?.uid);
            router.push(`/room/${roomID}`);
          } catch (error) {
            console.log(error);
          }
        setLoading(false);
    }
    async function handleJoin() {
        if (room.trim() === '' || name.trim() === '') return;
        setLoading(true)
        try {
            await joinRoom(room, name);
            lsSet("user", currentUser?.uid)
            router.push(`/room/${room}`);
          } catch (error) {
            console.log(error);
            alert('No such room! Please enter a valid Room ID');
          }
          setLoading(false);
        // joiner info
    }
  return (
     <div className="home bg-light3 dark:bg-dark3">
         <div className='container home__container'>
             <div className='home__left'>
                 <div className='home__desc'>
                     <h1>Welcome to Togyzqumalaq Online!</h1>
                     <h2>Discover and master the traditional Kazakh game of strategy and skill !</h2> 
                     <h4>Togyzqumalaq is a time-honored game played between two people on a unique board. Immerse yourself in the rich culture of Kazakhstan while challenging your strategic thinking and decision-making skills.</h4>
                 </div>
                 <div className='home__tutorial'>
                    <Link href='/rules' className='home__bottom_btns home__game_rules hover:bg-light2 dark:hover:bg-dark2'>
                    <div>
                         <span>Rules</span>
                    </div>
                    </Link>
                    <Link href='/tutorial' className='home__bottom_btns home__game_tutorial hover:bg-light2 dark:md:hover:bg-dark2'>
                    <div>
                         <span>Live tutorial</span>
                    </div>
                    </Link>
                    
                 </div>
             </div>
             <div className='home__right'>
                 <div className='home__play'>
                       <label className='label text-black dark:text-white'>Player Name: </label>
                       <br />
                       <input className='home__input' type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                       <br />
                       <label className='label text-black dark:text-white'>Room ID : </label>
                       <br/>
                       <input className='home__input' type='text' value={room} onChange={(e) => setRoom(e.target.value) }></input> 
                       <br />
                       <div className='home__buttons'>
                        <Button text={'Create a room'} size={'btn-medium'} onClick={() => handleCreate()} />
                        <Button text={'Join a room'} size={'btn-medium'}  onClick={() => handleJoin()} /> 
                       </div>
                 </div>
             </div>
         </div>
     </div>
  )
}
