import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function PersonalInfo() {
  return (
    <div>
      
    <Link to="/scan">      <button >
        Continue <FaArrowRight  />
      </button></Link>  
    </div>
  )
}

export default PersonalInfo
