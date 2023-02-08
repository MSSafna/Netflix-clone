import React, { useEffect, useState } from 'react'
import {API_Key,baseImage} from '../../Constants/Constants'
import './Banner.css'
import axios from  '../../axios'

function Banner() {

    const[movie,setMovie]=useState()

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then((response)=>{
        console.log(API_Key);
        const movielist=response.data.results
        const randomIndex = Math.floor(Math.random() * movielist.length);
        setMovie(response.data.results[randomIndex])
    }).catch(err=>{
        alert('error')
    })
 },[])
    
    return (
        

        <div className='banner' style={{backgroundImage:`url(${movie ?baseImage+movie.backdrop_path:" "})`}}>
          
            <div className='content'>
                <h1 className='title'>{movie? movie.title:""} </h1>
                <div className='banner_buttons'>
                    <button className='button'>play</button>
                    <button className='button'>My list</button>
                </div>
                <div>
                    <h1 className='discription'>{movie?movie.overview:""}</h1>
                </div>
                <div className="fade_bottom"></div>
                
               

            </div>

        </div>
    )
}

export default Banner
