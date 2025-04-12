//objetivo: memorizar memoria (cache) el resultado de ejecutar una función costosa, para evitar que se vuelva a llamar
//controlar si el beneficio de memorizarlo es superior al de recalcularlo

import { useMemo, useState } from "react"

//Ejemplo: 
//Tenemos una lista de compras y ya se calculó todo el costo total de la compra
//Si no agregamos nada ni tampoco cambió nada, cuál es el costo total?

interface Item {
    id: number,
    name: string,
    price: number
}

export const ShoppingCart = () => {
    const [items, setItems] = useState<Item[]>([
        {
            id: 1,
            name: 'Manzana',
            price: 25
        },
        {
            id: 2,
            name: 'Pera',
            price: 30
        },
        {
            id: 3,
            name: 'Plátano',
            price: 15
        }
    ])

    const [discount, setDiscount] = useState<number>(0)

    const totalCost = useMemo(()=> items.reduce((total, item) => total + item.price, 0), [items])

    const finalCost = useMemo(() => totalCost - discount, [totalCost, discount])

    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: `Producto ${items.length + 1}`,
            price: Math.random() * 5
        }

        setItems([...items, newItem])
    }

    return (
        <div>
            <h2>Lista de productos</h2>

            <ul>
                {
                    items.map(item => 
                        <li key={item.id}>{item.name} : ${item.price.toFixed(2)}</li>
                    )
                }
            </ul>

            <p>Costo total: ${totalCost.toFixed(2)}</p>

            <p>Descuento:</p>
            <input type="number" onChange={e => setDiscount(parseFloat(e.target.value) || 0)} />

            <p>Costo final: ${finalCost.toFixed(2)}</p>

            <button onClick={addItem}>Agregar producto</button>
        </div>
    )
}