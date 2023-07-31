'use client';
import {useState, useEffect, useContext} from 'react';
import Button from '@/components/ui/Button'
import '/public/css/home.css'

import Link from 'next/link';
import { createRoom, joinRoom } from '@/utils/functions';
import {auth , db} from '../firebase';
import {onAuthStateChanged } from "firebase/auth";

export default function Home() {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [room, setRoom] = useState("");
    
    const currentUser = auth.currentUser
    
    useEffect(() =>{
        const sub = onAuthStateChanged(auth, (user) => {
            console.log("Authenticated")
        });
        return sub;
    }, [])

    function handleCreate() {
        const player = {
            uid : currentUser?.uid,
            turnId: 0,
            name: name1,
            creator: true
        }
        createRoom(player)
    }
    function handleJoin() {
        const player = {
            uid : currentUser?.uid,
            turnId: 1,
            name: name1,
            creator: false
        }
        joinRoom(player , room)
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
                       <label className='label text-black dark:text-white'>Player 1: </label>
                       <br />
                       <input className='home__input' type='text' value={name1} onChange={(e) => setName1(e.target.value)}></input>
                       <br />
                       <label className='label text-black dark:text-white'>Player 2 : </label>
                       <br />
                       <input className='home__input' type='text' value={name2} onChange={(e) => setName2(e.target.value)}></input>
                        <br />
                       <label className='label text-black dark:text-white'>Room number : </label>
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
