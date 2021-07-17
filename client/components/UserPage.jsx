import React from 'react'
import { connect } from 'react-redux'

export const UserPage = (props) => {
  return (
    <div>
      <h1>UserPage</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
