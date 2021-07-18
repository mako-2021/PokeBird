import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getBirds } from '../apis/birds'
import { setSeenBirds } from '../actions/seenBirds'

const UserPage = (props) => {
  const { seenBirds, dispatch } = props
  const [birds, setBirds] = useState([])

  useEffect(() => {
    return getBirds()
      .then(res => {
        setBirds(res)
        return null
      })
      .catch(e => console.log(e))
  }, [])

  function handleClick (bird, e) {
    e.preventDefault()
    const seen = seenBirds.find((seenBird) => bird === seenBird)
    if (seen) {
      alert('Bird has already been added to the list')
    } else { dispatch(setSeenBirds(bird)) }
  }

  return (
    <>
      <h1>User&apos;s Gallery</h1>
      <h2>Seen Birds</h2>
      <ul>
        {seenBirds.map((bird, i) => (
          <li key={i}>{bird.commonName}</li>
        ))}
      </ul>
      <h1>Birds Gallery</h1>
      <div className='row'>
        {birds.map(function (bird, i) {
          return (
            <div className='column' key={bird.i}>
              <div className='card' key={i} onClick={(e) => handleClick(bird, e)}>
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

function mapStateToProps (state) {
  console.log(state)
  return {
    seenBirds: state.seenBirds
  }
}

export default connect(mapStateToProps)(UserPage)
