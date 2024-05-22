import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const Book = () => {
   const {id} = useParams()
   const obj = useOutletContext()
  return (
    <div>
      <h2>Just Book {id} {obj.hello}</h2>
    </div>
  ) 
}

export default Book
