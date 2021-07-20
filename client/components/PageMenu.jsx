import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { Menu } from 'semantic-ui-react'

const PageMenu = (props) => {
  const { isAuthenticated } = useAuth0()

  const state = { activeItem: 'home' }

  const handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  const { activeItem } = state

  return (
    <>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}>
        <Link to="/"><i className="fa fa-home" aria-hidden="true"></i>
        </Link>
      </Menu.Item>
      <Menu.Item
        name='gallery'
        active={activeItem === 'gallery'}
        onClick={handleItemClick}>
        <Link to="/BirdsGallery"><i className="fas fa-binoculars"></i></Link>
      </Menu.Item>
      <Menu.Item
        name='quiz'
        active={activeItem === 'quiz'}
        onClick={handleItemClick}>
        <Link to="/Quiz"><i className="fas fa-book"></i></Link>
      </Menu.Item>
      {isAuthenticated &&
      <Menu.Item
        name='user'
        active={activeItem === 'user'}
        onClick={handleItemClick}>
        <Link to="/User"><i className="fas fa-user-circle"></i></Link>
      </Menu.Item>}
    </>
  )
}

const mapStateToProps = (state) => ({
  activePage: state.activePage
})

export default connect(mapStateToProps)(PageMenu)
