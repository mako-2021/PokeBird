import React from 'react'
import { connect } from 'react-redux'
import { setActivePage } from '../actions/activePage'

export const PageMenu = (props) => {
  const { activePages, dispatch } = props
  function handleClick(e) {
    e.preventDefault()
    console.log('pre dispatch', activePages)
    dispatch(setActivePage(e.target.value))
    console.log('post dispatch', activePages)
  }

  return (
    <div>
      <button onClick={handleClick} value={'Homepage'}>Homepage</button>
      <button onClick={handleClick} value={'Gallery'}>Gallery</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  activePages: state.activePages
})

export default connect(mapStateToProps)(PageMenu)
