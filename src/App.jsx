import './App.css'
import HeroBanner from '../components/HeroBanner'
import { useState, useEffect } from 'react'
import axios from "axios"

function App() {
  const numberOfInstances = 10;

  const renderMyComponents = ()=>{
    const components=[];
    for(let i=0; i<numberOfInstances; i++)
    {
      components.push(<HeroBanner key={i}/>)
    }
    return components;
  }
  
  return (
    <>
    {
      renderMyComponents()
    }
    </>
  )
}

export default App
