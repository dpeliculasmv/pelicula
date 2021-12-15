import React, {  useEffect, useState } from 'react'
import "./header.scss";
import {FaBars} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import {MdNotifications,MdApps} from "react-icons/md";
import { useHistory } from 'react-router';
import axios from 'axios'


const Header = ({handleToggleSidebar}) => {
  const history=useHistory();
  const [peliculas,setPeliculas]=useState([]);
  const [text,setText]=useState('');
  const [sugerencia,setSugerencia]=useState([]);
 
  
 

  const changeurl=(e,titulo,enlace_video)=>{
    const parametrosurl=`?titulo=${titulo}&url=${enlace_video}`;
    history.push(`/reproductor${parametrosurl}`);
    window.location.reload();
    }

    

    const urlsearchresult=()=>{
      history.push(`/searchresult?titulos=${text}`);
      }
    

    const urlhome=()=>{
      history.push('/');
      }

   const cleartext=(e)=>{
    e.preventDefault();
    setText('')
   }
  

  useEffect(()=>{
    const loadData=async()=>{
      try{
      let result=await axios.get('https://dpeliculabackend.herokuapp.com/pelicula')
      setPeliculas(result.data)
      }catch(err){
        console.log(err)
      }
      }
    loadData()
  },[])

const onChangeHandler= (text) =>{
let matches=[];
if (text.length > 0 ) {
  matches=peliculas.filter(pelicula=>{
  const regex=new RegExp(`^${text}.*$`,"i");
  return pelicula.titulo.match(regex);
  })
  
}
setSugerencia(matches)
setText(text);
}

const urlFacebook=()=> {
  // do something meaningful, Promises, if/else, whatever, and then
  window.location.assign('https://www.facebook.com/profile.php?id=100075303095579');
}

/*const onChangeHandler= async (text) =>{
  if (text.length > 0 ) {
    try{
      let result=await axios.get(`https://dpeliculabackend.herokuapp.com/pelicula/searchsugerencia/${text}`)
      setSugerencia(result.data)
      }catch(err){
        console.log(err)
      }
    }
    setText(text);
  }*/
     
return (
    <div className="border border-dark header" onClick={cleartext}>
      
     <FaBars className="header__menu" size={24}
     onClick={()=>handleToggleSidebar()}
     />
    <div className="container_logo_titulo"onClick={urlhome} >
    <span className="logo_titulo" >D</span>
    <span className="logo_titulo_japones">PELICULA</span>
    </div>
     <form>
        <input type="text" placeholder="Search" onChange={e =>onChangeHandler(e.target.value)}
        value={text}/>
        <button type="submit" >
          <AiOutlineSearch size={22} onClick={urlsearchresult}/>
        </button>
        <div className={text.length > 0?"autobusqueda open":"autobusqueda"}>
      {sugerencia && sugerencia.map((sugerencia,i)=>
      <div key={i} className="sugerencia" onClick={(e)=>changeurl(e,sugerencia.titulo,sugerencia.enlace_video)}>
        <img  
        src={sugerencia.imagenpelicula}
        alt='' />
        <span>{sugerencia.titulo}</span>
        </div>
        )}
        <div className="more_result" onClick={urlsearchresult}>
        <h5>Mas Resultados</h5>
         </div>
      </div>
     </form>
     
      <div className="header__icons">
      <MdNotifications size={28}/>
      <MdApps size={28}/>
      <span className="facebook" onClick={urlFacebook}>Siganos En Facebook</span>
      </div>
      
    </div>
  )
}

export default Header
