// import logo from '/public/images/ornament.png';
import Image from 'next/image';

const Ornament = (props: {width: number, height: number, style?: string}) => {
    return(
       <Image src={'/images/ornament.png'} alt="" width={props.width} height={props.height} style={{transform: props.style}}/>
    )
}

export default Ornament