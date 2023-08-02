import Ornament from "./ui/Ornament"
import Image from "next/image";
import '/public/css/loading.css';
import { RemoteData } from "@/utils/interfaces";
const Loading = (props:any) => {
    console.log(props)
    return(
        <div className=''>
           {/* <Image 
            src='/public/images/ornament.svg'  
            alt="Loading"
            width={800}
            height={500}/> */}
            <p>{JSON.stringify(props)}</p>
        </div>
    )
}
export default Loading;