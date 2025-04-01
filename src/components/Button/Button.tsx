import { ReactNode } from 'react'
import './Button.css'
import { useGlobalContext } from '../../context/global.context'
interface Props {
    children: ReactNode
    parentMethod: () => void
}

export const Button = ({children, parentMethod}: Props) => {
    const { setValue } = useGlobalContext()

    const handleClick = () => {
        setValue(110)
        parentMethod()
    }

    return (
        <button className='custom-button' onClick={handleClick}>
            {children}
        </button>
    )
}