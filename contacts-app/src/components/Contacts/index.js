import { useState, useEffect } from 'react'

import Form from './Form'
import List from './List'



function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "mehmet",
            phone_number: "123123"
        },
        {
            fullname: "Ali",
            phone_number: "123123"
        },
        {
            fullname: "Veli",
            phone_number: "123123"
        },
    ])


    useEffect(() =>{
console.log(contacts);
    },[contacts])

    return(
        <div>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
