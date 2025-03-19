import { ReactNode } from "react"
import './ColorRed.css'

interface Props {
    children: ReactNode
}

export const ColorRed = ({children}: Props) => {
    return (<div className="color-red">{children}</div>)
}