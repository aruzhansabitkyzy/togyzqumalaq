'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { db } from '@/firebase';
import GameApp from '@/components/model/Game';
import { getData, lsGet } from '@/utils/functions';
import { onSnapshot, doc, collection , getDoc, query, where} from 'firebase/firestore';
import { Board } from '@/components/model/Board';
import SideBar from '@/components/ui/SideBar';
import { RemoteData } from '@/utils/interfaces';
import Loading from '@/components/Loading';
import Test from '@/components/Test';
export default function GamePage() {
   const { gameId } = useParams() 
   const [remoteData, setRemoteData] = useState({})
  
   useEffect(() => {
      const unsubscribe = onSnapshot(doc(db, "room", gameId), (doc) => {
         if (doc.exists()) {
           setRemoteData(doc.data());
         } else {
           console.log("No such document!");
         }
       }, (error) => {
         console.log("Error fetching document:", error);
       });

       return () => unsubscribe();
    }, [gameId]);

    return( 
      <div className='game bg-light3 dark:bg-dark3'>
         {remoteData && <Test remoteData={remoteData} /> }
         
         {/* <Board 
              remoteData={remoteData}
         />
         <SideBar 
              remoteData={remoteData}
         /> */}
  </div>
   )
}