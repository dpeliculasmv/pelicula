import React, { useState } from 'react'
import "./categoriesbar.scss";

const keywords=[
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'redux',
  'Music',
  'Algoritme Art',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'RealMadrid',
  'Gatsby',
  'Poor Coder',
  'Shewtabn,'
  ]

const Categoriesbar = () => {

  const [activeElement,setactiveElement]=useState('All');
 
  const handleClick=(value)=>{
   setactiveElement(value)
 }

  return (
    <div className="Categoriesbar">
      
      {keywords.map((value, i) => (
            <span
               onClick={() => handleClick(value)}
               key={i}
               className={activeElement === value ? 'active' : ''}>
               {value}
            </span>
         ))}
    </div>
  )
}

export default Categoriesbar
