
// // import { usePlayerContext } from "@/context/PlayerContext";
// import Button from "./ui/Button/Button";
// import '/public/css/popup.css';
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// type PropsType = {
//     type: string,
//     show: boolean,
//     setShow : Function,
//     action2?: boolean | undefined,
//     setAction2?: Function | undefined,
//     action3?: boolean | undefined,
//     setAction3?: Function | undefined
// }
// const GamePopup = (props: PropsType) => {
//      const router= useRouter();
//     //  const context = usePlayerContext()    

//      const winner = () => {
//         if(context.player1?.isWinner) {
//             return context.player1.username
//         }
//         else if(context.player2?.isWinner) {
//             return context.player2.username
//         }
//      }

//      function handleExit() {
//         if(props.setAction2) {
//           props.setAction2(true);
//           if(props.setAction3) {
//             props.setAction3(true);
//           }
          
//           router.push("/")
//         }

//      }
//      return(
//         <>
//            {props.type == 'tuzdyq' && (
//                <div className="content">
//                     <h1>{context.player1?.isGoing ? context.player2?.username : context.player1?.username} got Tuzdyq</h1>
//                </div>
//            )}
//            {props.type == 'winner' && (
//              <div className='content'>
//                   <h1>{winner()} is a winner</h1>
//                   <div className='content__btns'>
//                   <Button text='Play again' size={'btn-medium'} onClick={() => {}}/>
//                   <Button text='Go to Home' size={'btn-medium'} onClick={() => {}}/>
//                   </div>
                  
//              </div>
//            )}
//            {props.type == 'reset' && (
//                 <div className="content">
//                     <h1>Are you sure to reset? </h1>
//                     <div className='content__btns'>
//                         <Button text="Reset" size={'btn-medium'} onClick={() => {if(props.setAction2) props.setAction2(true)}} />
//                         <Button text="Cancel" size={'btn-medium'} onClick={() => {props.setShow(false)}}/>
//                     </div>
//                 </div>
//             )}
//             {props.type== 'exit' && (
//                 <div className='content'>
//                     <h1>Are you sure to exit? </h1>
//                     <div className='content__btns'>
//                       <Button text="Exit" size={'btn-medium'} onClick={() => handleExit()} />
//                       <Button text="Cancel" size={'btn-medium'} onClick={() => {{props.setShow(false)}}} />
//                     </div>
//                 </div>
//             )}
//         </>
//      )
// }

// export default GamePopup;