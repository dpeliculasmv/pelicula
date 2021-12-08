import React from 'react'
import { useHistory } from 'react-router';
import "./video.scss";

const Video = (props) => {

  const enlace_video=props.enlace_video
  const img=props.img
  const titulo=props.titulo
  const parametrosurl=`?titulo=${titulo}&url=${enlace_video}`;
  const history=useHistory();
  const changeurl=()=>{
  history.push(`/reproductor${parametrosurl}`)
  }
    

  return (
   
    <div className="video" onClick={changeurl} >
             <div className='video__top'>
            <div><img
               src={img}
               alt=''
              
            /></div>
        </div>
     <div>
     <span>{titulo}</span>
     </div>
    </div>
  )
}

export default Video
