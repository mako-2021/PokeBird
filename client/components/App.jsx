import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import BirdsGallery from './BirdsGallery'

import { fetchFruits } from '../actions'

function App(props) {
  useEffect(() => {
    props.dispatch(fetchFruits())
  }, [])

  return (
    <>
      <div className='app'>
        <BirdsGallery />
        <ul>
          {props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
