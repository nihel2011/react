import React, {useState, useEffect} from 'react'

import axios from 'axios'

function OneContact() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    //La donnée :
    const [contact, setContact] = useState({});

    useEffect (() =>{
        axios.get('http://localhost:5000/contact/6571d18c0d62352a529cd35c')
        .then(response =>{
            setLoading(false)
            setContact(response.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false)
            setContact({})
            setError('Something went wrong')
        })
    }, [])

  return (
    <div>
        <h1>Nom : {loading ? 'loading...........' : contact.nom}</h1>
        <p>Prénom : {loading ? 'loading...........' : contact.prenom}</p>

        {error ? error : null}

    </div>
  )
}

export default OneContact