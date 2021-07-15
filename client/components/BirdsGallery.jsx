import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getBirds } from '../apis/birds'
import { activePage as setActivePage } from '../actions/activePage'

function BirdsGallery (props) {
<<<<<<< HEAD
  return (
    <h1>Birbs</h1>
=======
  const { dispatch } = props
  const [birds, setBirds] = useState([])

  useEffect(() => {
    return getBirds()
      .then(res => {
        console.log('component res', res)
        setBirds(res)
        return null
      })
      .catch(e => console.log(e))
  }, [])

  function handleClick () {
    dispatch(setActivePage('Homepage'))
  }

  return (
    <>
      <h1>Birds Gallery</h1>
      <ul>
        {birds.map((bird, i) => <li key={i}>{bird.commonName}</li>)}
      </ul>
      <button onClick={handleClick}>Back to Recently Observed</button>
    </>
>>>>>>> main
  )
}

export default connect()(BirdsGallery)
