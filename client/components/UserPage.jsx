import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getBirds, getUserObsBySub, addUserObs, delUserObs } from '../apis/birds'
import { setSeenBirds } from '../actions/seenBirds'
import { useAuth0 } from '@auth0/auth0-react'

const UserPage = (props) => {
  const { sub } = useAuth0().user
  const { seenBirds, dispatch } = props
  const [birds, setBirds] = useState([])
  const [userBirds, setUserBirds] = useState([])

  const update = () => {
    getUserObsBySub(sub)
      .then(res => {
        setUserBirds(res)
        dispatch(setSeenBirds(res))
        return null
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    return getBirds()
      .then(res => {
        setBirds(res)
        return update()
      })
      .catch(e => console.log(e))
  }, [])

  function handleClick(bird, e) {
    e.preventDefault()
    const seen = seenBirds.find((seenBird) => bird.id === seenBird.birds_id)
    if (seen) {
      alert('Bird has already been added to the list')
    } else if (!seen) {
      addUserObs(bird)
      update()
    }
  }

  function handleDelete(id, e) {
    e.preventDefault()
    delUserObs(id)
    update()
  }

<<<<<<< HEAD
=======
  // console.log(seenBirds)

>>>>>>> c17a8d105a1a30b23894bb0b5f57d4b4a9858dac
  return (
    <>
      <h1>User&apos;s Gallery</h1>
      <h2>Seen Birds</h2>
      <ul>
        {userBirds.map((bird, i) => (
          <li key={i}>{bird.commonName}  <button onClick={(e) => handleDelete(bird.id, e)}>Delete</button></li>
        ))}
      </ul>
      <h1>Birds Gallery</h1>
      <div className='row'>
        {birds.map(function (bird, i) {
          const seen = seenBirds.find((seenBird) => bird.id === seenBird.birds_id)
          const addBird = { userSub: sub, id: bird.id }
          if (seen) {
            return (
              <div className='column' key={i}>
                <div className='card' key={bird.latinName} onClick={(e) => handleClick(addBird, e)}>
                  <img src={bird.image}></img>
                  <h3>{bird.commonName}</h3>
                  <p>{bird.nzStatus}</p>
                </div>
              </div>
            )
          } else {
            return (
              <div className='column' key={i}>
                <div className='card' key={bird.latinName} onClick={(e) => handleClick(addBird, e)}>
                  <img src={bird.image} className='img-dim'></img>
                  <h3>{bird.commonName}</h3>
                  <p>{bird.nzStatus}</p>
                </div>
              </div>
            )
          }
        }
        )}
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    seenBirds: state.seenBirds
  }
}

export default connect(mapStateToProps)(UserPage)
