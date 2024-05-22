import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const BookLayoutComp = () => {
  return (
   <>
      <Link to="/book/1">Book 1</Link>
        <br/>
        <Link to="/">House</Link>
        <br/>
        <Link to="/book/2">Book 2</Link>
        <br/>
        <Link to="/book/new">New Book</Link> 
        <Outlet context={{hello: "WORLD"}}/>
   </>
  )
}

export default BookLayoutComp
