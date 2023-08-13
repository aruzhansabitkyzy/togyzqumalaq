import Ornament from "./Ornament";

const OrnamentSquare = () => {
    return(
        <div className='ornament bg-light2 dark:bg-dark2'>
            <Ornament width={27} height={27} style={"rotate(-90deg)"}/>
        </div>
    )
}
export default OrnamentSquare;