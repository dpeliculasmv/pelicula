import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Video from "../../components/video/Video"
import axios from 'axios'
import _ from "lodash";

const pageSize=24;
const SearchScreen = () => {
   const [peliculas,setPeliculas]=useState([])
   const [paginacionpeliculas,setPaginacioneliculas]=useState([])
   const [currentpage,setcurrentPage]=useState()

   useEffect(()=>{
    const loadData=async()=>{
      try{
      let result=await axios.get('https://dpeliculabackend.herokuapp.com/pelicula')
      setPeliculas(result.data)
      setPaginacioneliculas(_(result.data).slice(0).take(pageSize).value())
      }catch(err){
        console.log(err)
      }
      }
    loadData()
  },[])

 

  const pageCount = peliculas ? Math.ceil(peliculas.length/pageSize) :0;
  const pages=_.range(1,pageCount+1);

  const pagination=(pageNo)=>{
    setcurrentPage(pageNo);
    const startIndex=(pageNo-1)*pageSize;
    const paginatedPelicula=_(peliculas).slice(startIndex).take(pageSize).value();
    setPaginacioneliculas(paginatedPelicula);
    } 
    
 
        
  return (
    <>
    <Container>
    <Row>
      {paginacionpeliculas.map((pelicula,index)=>(
      <Col sm={12} lg={3} md={4} key={index}>
      <Video enlace_video={pelicula.enlace_video} titulo={pelicula.titulo} img={pelicula.imagenpelicula} key={pelicula.id}/>
      </Col>
      ))}
      </Row>
      <nav className="d-flex justify-content-center">
      <ul className="pagination">
      {pages.map((page,i)=>(
        <li className={page===currentpage?"page-item active":"page-item"} key={i}>
          <p className="page-link" onClick={()=>pagination(page)}>{page}</p>
          </li>
        ))}
      </ul>
      </nav>
 </Container>
 </>
  )
}

export default SearchScreen;
