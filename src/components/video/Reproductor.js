import ReactPlayer from "react-player"
import { useLocation } from "react-router"
import "./reproductor.scss"
import { DiscussionEmbed } from 'disqus-react';
import {  useState } from "react";




const Reproductor = () => {

  let{search}=useLocation();
  let query=new URLSearchParams(search)
  let titulo=query.get("titulo");
  let url=query.get("url");
  
  let urls=url.split(',');
  console.log(urls)


  const [opcionvide,setOpcionvid]=useState("");

  //let location=useLocation();
  //console.log(location);
 
const elegirvid=(enlace)=>{
  setOpcionvid(enlace);
}


  return (
    <>
        <div className="reproductores">
          <div className="menu-opciones">
          {urls.map((enlace,i)=>(
        <span className="opciones" onClick={()=>elegirvid(enlace)} key={i}>OPCION{i}</span>       
      ))}
         </div>
     </div>
    <div className="reproductor">
 
     <div className="reproductor__container">
      <ReactPlayer controls url={opcionvide?opcionvide:urls[0]} 
       width='85%' height="90%"/>
       <span>{titulo}</span>
       </div>
      </div>
      <section>
      <DiscussionEmbed 
       shortname='compentario-dpelicula'
       config={
        {
            url: `http://localhost:3000/${titulo}` ,
            identifier:`http://localhost:3000/${titulo}`,
            title: "comentarios de pelicula",
            language: 'es_ES' //e.g. for Traditional Chinese (Taiwan)	
        }
    }
      />
      </section>
      </>
  )
}

export default Reproductor