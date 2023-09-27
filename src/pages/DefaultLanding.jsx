import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const DefaultLanding = () => {
  const navigate = useNavigate()

  function toBar() {
    navigate(`/bar`)
  }

  return (
    <div>
      <h1>landing</h1>
      <button onClick={toBar}>to bar</button>
    </div>
  )
}

export default DefaultLanding
