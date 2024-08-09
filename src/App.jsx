import React from "react"
import './App.css'
import Header from "./Component/Header"
import HeroImg from "./Component/HeroImg"
import Main from "./Component/Main"



function App() {
 

  return (
    <>

    <div className="hero">

    <Header/>
    <HeroImg/>
    </div>

    <Main/>
 
    </>
  )
}

export default App
