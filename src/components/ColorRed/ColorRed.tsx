import { ReactNode } from "react"
import './ColorRed.css'
import { useGlobalContext } from "../../context/global.context"

interface Props {
    children: ReactNode
}

export const ColorRed = ({children}: Props) => {

    const {value} = useGlobalContext()

    return (<div className="color-red">{value} : {children}</div>)
}