import React from 'react'
import { connect } from 'react-redux'
import { setActivePage } from '../actions/activePage'

export const PageMenu = (props) => {
  const { activePage, dispatch } = props
  function handleClick(e) {
    e.preventDefault()
    console.log('pre dispatch', activePage)
    dispatch(setActivePage(e.target.value))
    console.log('post dispatch', activePage)
  }

  return (
    <div>
      <button onClick={e => handleClick(e)} value={'Homepage'}>Homepage</button>
      <button onClick={e => handleClick(e)} value={'Gallery'}>Gallery</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  activePage: state.activePage
})

export default connect(mapStateToProps)(PageMenu)
