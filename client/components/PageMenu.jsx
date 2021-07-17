import React from 'react'
import { connect } from 'react-redux'
import { setActivePage } from '../actions/activePage'

export const PageMenu = (props) => {
  const { dispatch } = props

  function handleClick(e) {
    e.preventDefault()
    dispatch(setActivePage(e.target.value))

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
