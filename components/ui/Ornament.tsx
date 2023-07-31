// import logo from '/public/images/ornament.png';
import Image from 'next/image';

const Ornament = () => {
    return(
       <Image src={'/images/ornament.png'} alt="" width={27} height={27} style={{transform: "rotate(-90deg)"}}/>
    )
}

export default Ornament