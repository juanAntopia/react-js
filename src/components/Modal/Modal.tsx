import React, { ReactNode, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useModalContext } from "./Context/ModalContext"
import './Modal.css'

interface Props {
    children: ReactNode
}
const eventListener = "keydown"

export const Modal = ({children}: Props) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const {state, setState} = useModalContext()

    const closeModal = () => { setState(false) }

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if(e.key === "Escape") {
                setState(false)
            }
        }

        if (state) {
            document.addEventListener(eventListener, handleEsc)
        }

        return () => {
            document.removeEventListener(eventListener, handleEsc)
        }
    }, [setState, state])

    const modalRoot = document.getElementById("modal")

    if(!state || !modalRoot) {
        return null
    }

    return createPortal(
        <div className="overlay" onClick={closeModal}>
            <div className="modal" onClick={handleContentClick} ref={modalRef}>
                {children}
                <button onClick={closeModal}>Cerrar modal</button>
            </div>
        </div>, modalRoot
    )
}