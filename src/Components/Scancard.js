import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Scancard() {
  return (
    <div>
      
    <Link to="/end">
    <button style={{marginTop:'1rem', borderRadius:"12px", fontSize:"22px", padding:"8px"}}>
      Continue <FaArrowRight/>
    </button>
  </Link>
    </div>
  )
}

export default Scancard
