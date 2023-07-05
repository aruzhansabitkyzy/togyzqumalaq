'use client';
import Head from 'next/head';
import {useState, useEffect} from 'react';
import Button from '@/components/ui/Button/Button'
import '/public/css/home.css'
import Link from 'next/link';

export default function Home() {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    useEffect(() => {
       console.log(name)
    }, [name])
    function createRoom() {
       
    }
    function joinRoom() {

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
                       <label className='label text-black dark:text-white'>Name : </label>
                       <br />
                       <input className='home__input' type='text' onChange={(e) => setName(e.target.value)}></input>
                       <br />
                       <label className='label text-black dark:text-white'>Room number : </label>
                       <br/>
                       <input className='home__input' type='text' onChange={(e) => setRoom(e.target.value) }></input>
                       <br />
                       <div className='home__buttons'>
                        <Button children={'Create a room'} size={'btn-medium'} onClick={() => createRoom()} />
                        <Button children={'Join a room'} size={'btn-medium'}  onClick={() => joinRoom()} />
                       </div>
                 </div>
             </div>
         </div>
     </div>
  )
}