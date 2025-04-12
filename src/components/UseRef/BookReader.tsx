//Objetivo: nos permite crear una referencia mutable que persiste durante todo el ciclo de vida de un componente sin causar un re-render
//Objetivo 2: hacer referencia a un elemento del DOM

import { useRef, useState } from "react"

//Ejemplo: 
//Un marcador de un libro que utilizamos para guardar la última posición de la lectura
//no modifica el contenido del libro

export const BookReader = () => {
    const currentPageRef = useRef<number>(1)
    const [currentPage, setCurrentPage] = useState(1)

    const nextPage = () => {
        currentPageRef.current += 1
        console.log(`Avanzaste a la página ${currentPageRef.current}`)
    }

    const previousPage = () => {
        if (currentPageRef.current === 1) {
            console.log(`No se puede retroceder a la página porque ya tene encuentras en ${currentPageRef.current}`)
            return;
        }
        currentPageRef.current -= 1
        console.log(`Retrocediste a la página ${currentPageRef.current}`)
    }

    const goToPage = (page: number) => {
        if (page < 1) {
            console.log('No puedes saltar a un número imposible')
            return
        }

        currentPageRef.current = page
        setCurrentPage(page)
        console.log(`Saltaste a la página ${currentPageRef.current}`)
    }

    return (
        <>
            <h2>Lectura de libro</h2>
            <p>Página actual: {currentPageRef.current}</p>
            <p>Página actual [STATE]: {currentPage}</p>

            <button onClick={previousPage}>Página Anterior</button>
            <button onClick={nextPage}>Siguiente Página</button>
            <button onClick={() => {goToPage(3)}}>Ir a Página</button>
        </>
    )
}