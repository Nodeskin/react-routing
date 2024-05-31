import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Font = ({to}) => {

  const fontStyle = {
    color: "#124b07", height: "30px", width:"30px"
  }
  const linkin = {
        textDecoration: 'none',
        display: 'flex',
        alignItem: 'center'
  }

  return (
    <div className='divItem'>
      <Link to={to} style={linkin}> <FontAwesomeIcon icon={faCircleLeft} style={fontStyle} /> Back to Portal</Link>  
      
      </div>
  )
}

export default Font
