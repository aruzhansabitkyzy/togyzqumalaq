import Ornament from "./ui/Ornament/Ornament"
import Image from "next/image";
import '/public/css/loading.css';
const Loading = () => {
    return(
        <div className='loading'>
           <Image 
            src='/public/images/ornament.svg'  
            alt="Loading"
            width={800}
            height={500}/>
        </div>
    )
}
export default Loading;