import Selection from "./Selection"
import '/public/css/popup.css'
type Props  = {
    action: string,
    show: boolean, 
    setShow: Function
}

const PopupBody = (props: Props) => 
{
    const isTheme = props.action=='theme'
    const isLanguage = props.action=='lang'
    return(
        <>
            <h2 className='popup__title text-black dark:text-white'>{props.action}</h2>
            <div className='popup__body'>
               <Selection isTheme={isTheme} isLanguage={isLanguage} />
            </div>
            <div className='popup__close text-black dark:text-white' onClick={() => props.setShow(false)}>
                close
            </div>
        </>
    )
}
export default PopupBody;