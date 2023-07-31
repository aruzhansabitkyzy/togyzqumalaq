'use client';
import {useEffect} from 'react';
import { SideBarProps } from '@/utils/interfaces';
import Button from './Button';

export default function SideBar(props:SideBarProps) {
    
    return(
        <div className='sideBar'>
           <div className={`player`}>
                    <h2>username</h2>
                    <h4>score:0</h4>
                    <p className='player__turn'>Player's turn</p>
            </div>
           <div className='buttons'>
              <span><Button text={'Reset'} size={'btn-large'} onClick={() => props.resetBoard()}/></span>
              <span><Button text={'Exit'} size={'btn-large'} onClick={() => props.exitGame()}/></span>
           </div>
            <div className={`player`}>
                    <h2>username</h2>
                    <h4>score:0</h4>
                    <p className='player__turn'>Your turn</p>
            </div>
        </div>
        
    )
}