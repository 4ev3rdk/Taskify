import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Main from './components/main'

function App() {

  return (
    <>
      <Header></Header>
      <div className="content flex">
        <Sidebar></Sidebar>
        <Main> </Main>
      </div>


    </>
  )
}

export default App
