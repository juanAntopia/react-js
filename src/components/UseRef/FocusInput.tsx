import { useRef } from "react"

export const FocusInput = () =>{
    const input = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if(!input.current) {
            console.log(`No existe la referencia al elemento`)
            return
        }

        input.current.focus()
    }

    return (
        <div>
            <input type="text" ref={input} placeholder="Escribe aquí ..."/>
            <button onClick={handleClick}>Enfocar en el input</button>
        </div>
    )
}