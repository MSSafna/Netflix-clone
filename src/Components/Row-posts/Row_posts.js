import React, { useEffect, useState } from 'react'
import './Row_post.css'
import axios from '../../axios'
import { baseImage } from '../../Constants/Constants'
import Youtube from 'react-youtube'
import { API_Key } from '../../Constants/Constants'

function Row_posts(props) {
  const [movie, setMovie] = useState([])
  const [urlId, setUrlId] = useState("")
  useEffect(() => {
    axios.get(props.url).then((response) => {
      // console.log(response);
     let testing= response.data.results
     console.log(testing);
      setMovie(testing)
      console.log(movie);
    })
  }, [])
  

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_Key}&language=en-US`).then(response => {
      console.log(response.data);
      if (response.data.results.length != 0) {

        console.log(response.data.results.length)
        console.log(response.data.results[0].key);
        setUrlId(response.data.results[0].key)
      } else {
        alert('empty')
      }

    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movie.map((obj) =>
            <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? "smallPoster" : 'poster'} src={`${baseImage + obj.backdrop_path}`} alt="" />
          )
        }
      </div>
      <div className='video'>
        {urlId && <section>
          <i onClick={() => { setUrlId('') }} style={{ fontSize: '60px', cursor: 'pointer' }}>&times;</i>
          <Youtube videoId={urlId} opts={opts} />
        </section>}
      </div>

    </div>
  )
}

export default Row_posts
