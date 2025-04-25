import { useEffect, useState } from "react"

export const PromiseError = () => {
    const [data, setData] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                throw new Error("Tronó")
            }catch(err) {
                if(err instanceof Error) {
                    setError(err.message)
                    throw err
                }
            }
        }

        // fetchData().catch(err => {
        //     setData(err.message)
        //     throw new Error("Tronó peor")
        // })

        fetchData()
    }, [])

    if(error) {
        return <div>Algo salió mal, intenta más tarde! codeError: {error}</div>
    }

    return <div>{data}</div>
}