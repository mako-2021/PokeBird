import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getBirds } from '../apis/birds'
import { activePage as setActivePage } from '../actions/activePage'

function BirdsGallery (props) {
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
      <div className='row'>
        {birds.map(function (bird, i) {
          return (
            <div className='column' key={bird.i}>
              <div className='card' key={i}>
                <img src='#'></img>
                <h3>{bird.commonName}</h3>
                <p>{bird.nzStatus}</p>
              </div>
            </div>
          )
        }
        )}
      </div>
      <button onClick={handleClick}>Back to Recently Observed</button>
    </>
  )
}

export default connect()(BirdsGallery)
