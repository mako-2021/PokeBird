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
      <div className='col'>
        <div className='row-padding'>
          {birds.map(function (bird, i) {
            return (
              <div className='column' key={bird.i}>
                <div className='flip-card' key={i}>
                  <img className='cardImg' src={bird.image}></img>
                  <h3>{bird.commonName}</h3>
                  <p>NZ status: {bird.nzStatus}</p>
                  <p>Conservation status: {bird.conservationStatus}</p>
                  <span className='material-icons'>straighten</span><p>{bird.length}</p>
                  <span className="material-icons-outlined">
monitor_weight
                  </span><p>Weight: {bird.weight}</p>
                  <p>Description: {bird.description}</p>
                  <p className='card-subtitle'>Click <a href={bird.url}>here</a> for more {bird.commonName} from NZ Birds Online.</p>
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>
    </>
  )
}

export default connect()(BirdsGallery)
