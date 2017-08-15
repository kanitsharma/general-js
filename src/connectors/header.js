import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { pick } from 'ramda'

const Header = ({ togglenav, shownav }) => {
  return (
    <div className='header'>
      <div className={`nav-icon ${shownav ? 'open' : ''}`} onClick={() => togglenav()}>
        <span />
        <span />
        <span />
      </div>
      <h1>{shownav}</h1>
    </div>
  )
}

Header.propTypes = {
  togglenav: PropTypes.func,
  shownav: PropTypes.bool
}

const mapStateToProps = state => ({
  ...pick(['shownav'], state.togglenav)
})

const mapDispatchToProps = dispatch => ({
  togglenav: () => dispatch({ type: 'TOGGLE_NAV' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
