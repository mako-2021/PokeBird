import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getBirds } from '../apis/birds'

function BirdsGallery (props) {
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
      <div className='row'>
        {birds.map(function (bird, i) {
          return (
            <div className='column' key={bird.i}>
              <div className='card' key={i}>
                <img src={bird.image}></img>
                <h3>{bird.commonName}</h3>
                <p>{bird.nzStatus}</p>
              </div>
            </div>
          )
        }
        )}
      </div>
    </>
  )
}

export default connect()(BirdsGallery)
