import React from 'react'
import { useLocation } from 'react-router-dom';
import "../styles/works-header.css"

const Worksheader = () => {
  const location = useLocation();

  return (
    <div className="works-header">
      <h1>{(location.state.name)}</h1>
    </div>
  )
}

export default Worksheader
