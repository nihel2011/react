import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

import axios from 'axios'

function OneBlog() {
    const params = useParams()

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    //La donnée :
    const [blog, setBlog] = useState({});

    useEffect (() =>{
        axios.get(`http://localhost:5000/blog/${params.id}`)
        .then(response =>{
            setLoading(false)
            setBlog(response.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false)
            setBlog({})
            setError('Something went wrong')
        })
    }, [])

  return (
    <div>
        <h1>Titre : {loading ? 'loading...........' : blog.titre}</h1>
        <p>Auteur : {loading ? 'loading...........' : blog.auteur}</p>
        <Link to={`/blogs/editblog/${blog._id}`}>
                       Edit 
                    </Link>


        {error ? error : null}

    </div>
  )
}

export default OneBlog