import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getBirds } from '../apis/birds'

function BirdsGallery(props) {
  const { dispatch } = props
  const [birds, setBirds] = useState([])

  useEffect(() => {
    return getBirds()
      .then(res => {
        setBirds(res)
        return null
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <>
      <h1>Birds Gallery</h1>
      <ul>
        {birds.map((bird, i) => <li key={i}>{bird.commonName}</li>)}
      </ul>
    </>
  )
}

export default connect()(BirdsGallery)
