import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Video from "../../components/video/Video"
import Categoriesbar from "../../components/categoriesbar/Categoriesbar"
import axios from 'axios'

const HomeScreen = () => {
   const [peliculas,setPeliculas]=useState([])

   useEffect(()=>{
    const loadData=async()=>{
      try{
      let result=await axios.get('http://localhost:8080/pelicula/fecha')
      setPeliculas(result.data)
      }catch(err){
        console.log(err)
      }
      }
    loadData()
  },[])

  return (
    <Container>
    <Categoriesbar />
    <Row>
      {peliculas.map((pelicula,index)=>(
      <Col sm={6} lg={3} md={4} key={index}>
      <Video enlace_video={pelicula.enlace_video} titulo={pelicula.titulo} img={pelicula.imagenpelicula}  key={pelicula.id} />
      </Col>
      ))}
      </Row>
 </Container>
  )
}

export default HomeScreen;
