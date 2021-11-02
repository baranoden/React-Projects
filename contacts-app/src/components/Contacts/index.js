import { useState, useEffect } from 'react'

import "./styles.css"

import Form from './Form'
import List from './List'



function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Mehmet",
            phone_number: "0539 348 34 34"
        },
        {
            fullname: "Ali",
            phone_number: "0538 347 33 33"
        },
        {
            fullname: "Veli",
            phone_number: "0537 346 32 32"
        },
    ])


    useEffect(() =>{
console.log(contacts);
    },[contacts])

    return(
        <div id="container">
            <h1>Contacts App</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
