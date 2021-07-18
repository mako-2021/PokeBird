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
    console.log(bird)
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
      <h2>All Birds</h2>
      <ul>
        {birds.map((bird, i) => (
          <>
            <li key={i} value={bird.commonName}>{bird.commonName}  <button onClick={(e) => handleClick(bird, e)}>Add</button></li>
          </>
        ))}
      </ul>
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
