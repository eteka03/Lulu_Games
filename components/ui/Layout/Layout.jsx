import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className="h-full grid auto-cols-fr grid-rows-layout">
      <Navbar/>
      <div>{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout