//objetivo: se utiliza para memorizar la instancia de una función
//hace que un hijo no renderice

import { memo, useCallback, useState } from "react"

//Ejemplo
// supongamos que tenemos un número de teléfono al que llamas con frecuencia
// En vez de marcarlo continuamente, lo almacenamos en los contactos del teléfono
// A menos que el número cambie, siempre utilizo el mismo contacto
interface Contact {
    id: number,
    name: string,
    phone: string
}

interface ContactProps {
    contact: Contact,
    onCall: (phone: string) => void
}

const ContactCard = memo(({contact, onCall} : ContactProps) => {
    console.log(`Renderizando contacto ${contact.name}`)

    return (
        <div>
            <h3>Nombre de contacto: {contact.name}</h3>
            <p>Número de télefono: {contact.phone}</p>
            <button onClick={() => onCall(contact.phone)}>Llamar</button>
        </div>
    )
})

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([
        {
            id: 1,
            name: 'Juan',
            phone: '8125369851'
        },
        {
            id: 2,
            name: 'Jerry',
            phone: '8123698720'
        },
        {
            id: 3,
            name: 'Junior',
            phone: '8305530101'
        }
    ])

    const [log, setLog] = useState<string>('')

    const makeCall = useCallback((phone: string) => setLog(`Llamando al teléfono ${phone}`), [])

    const addContact = () => {
        const newContact = {
            id: contacts.length + 1,
            name: `Contacto - ${contacts.length+1}`,
            phone: `${Math.floor(1000000 + Math.random() * 90000000)}`
        }

        setContacts([...contacts, newContact])
    }

    return (
        <div>
            <h2>Agenda de Contacto</h2>

            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
            ))}

            <button onClick={addContact}>Agregar contacto</button>

            <p>{log}</p>
        </div>
    )
}