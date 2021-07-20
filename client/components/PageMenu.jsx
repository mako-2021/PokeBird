import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setActivePage } from '../actions/activePage'
import { useAuth0 } from '@auth0/auth0-react'

export const PageMenu = (props) => {
  const { dispatch } = props
  const { isAuthenticated } = useAuth0()

  function handleClick (e) {
    e.preventDefault()
    dispatch(setActivePage(e.target.value))
  }

  return (
    <>
      <li className="hide-medium hide-large opennav right">
        <Link className="padding-large hover-white large theme-d2" to="/"><i className="fa fa-bars"></i></Link>
      </li>
      <li><Link to="/" className="padding-large theme-d4"><i className="fa fa-home margin-right"></i>Home</Link></li>
      <li className="hide-small"><Link to="/BirdsGallery" title='Birds Gallery'><i className="fas fa-binoculars"></i></Link></li>
      <li className="hide-small"><Link to="/Quiz" title="Quiz"><i className="fas fa-book"></i></Link></li>
      {isAuthenticated && <li className="hide-small"><Link to="/User" title="User Gallery"><i className="fas fa-user-circle"></i></Link></li>}
    </>
  )
}

const mapStateToProps = (state) => ({
  activePage: state.activePage
})

export default connect(mapStateToProps)(PageMenu)
