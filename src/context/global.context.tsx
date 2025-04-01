import { createContext, useContext } from "react";

interface GlobalContextType {
   value: null | number,
   setValue: React.Dispatch<React.SetStateAction<number>>
}

export const GlobalContext = createContext<GlobalContextType>({
    value: null,
    setValue: () => {}
})

export const useGlobalContext = () => {
    const context = useContext(GlobalContext)

    if (!context.value && context.value !== 0) {
        throw new Error('Global context must be used within a GlobalProvider')
    }

    return context
}