import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import "./AllBlogs.css"
import { Link } from 'react-router-dom'
import OneBlog from '../OneBlog/OneBlog'

function AllBlogs() {

    const initialState = {
        loading : true,
        error : '',

        blogs: {}
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS':
                return {
                    loading : false,
                    blogs : action.payload,
                    error : ''
                }
            case 'FETCH_ERROR':
                return {
                    loading : false,
                    blogs: {},
                    error: "Something went wrong"
                }
            default :
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get("http://localhost:5000/allblogs")
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data});
        })
        .catch( error =>{
            dispatch({type: 'FETCH_ERROR'});
        })
    },[])



  return (
    <div className='grid'>{
        state.loading ? 'loading ....................' :state.blogs.map((blog, index)=> {
        return (
        <div className='blog'>
            <h1 key={index}>
                    {blog.titre}
                </h1>
                <p>{blog.description}</p>
                <p>{blog.sousTitre}</p>
               {/* <Link to={'/oneblog/${blog.id}'}></Link> */}
                <button type="submit" >    
                    <Link to={`/blogs/allblogs/${blog._id}`}>
                       En savoir plus 
                    </Link>
                    
                    </button>
                </div>
                )

            })
        }
    </div>
  )
}

export default AllBlogs