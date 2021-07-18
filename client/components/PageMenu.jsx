import React from 'react'
import { connect } from 'react-redux'
import { setActivePage } from '../actions/activePage'
import { useAuth0 } from '@auth0/auth0-react'

export const PageMenu = (props) => {
  const { dispatch } = props
  const { isAuthenticated } = useAuth0()


  function handleClick(e) {
    e.preventDefault()
    dispatch(setActivePage(e.target.value))


  }

  return (
    <div>
      <button onClick={e => handleClick(e)} value={'Homepage'}>Homepage</button>
      <button onClick={e => handleClick(e)} value={'Gallery'}>Gallery</button>
      <button onClick={e => handleClick(e)} value={'Quiz'}>Quiz</button>
      {isAuthenticated &&
        <button onClick={e => handleClick(e)} value={'User'}>User</button>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  activePage: state.activePage
})

export default connect(mapStateToProps)(PageMenu)
