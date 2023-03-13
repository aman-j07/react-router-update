import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'

function Home() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default Home