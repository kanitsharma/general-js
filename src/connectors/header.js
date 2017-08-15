import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { pick } from 'ramda'

const Header = ({ togglenav, shownav }) => {
  return (
    <div className='header'>
      <div className={`nav-icon ${shownav ? 'open' : ''}`} onClick={() => togglenav(!shownav)}>
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

Header.propTypes = {
  togglenav: PropTypes.func,
  shownav: PropTypes.bool
}

const mapStateToProps = state => ({
  ...pick(['shownav'])
})

const mapDispatchToProps = dispatch => ({
  togglenav: shownav => dispatch({ type: 'TOGGLE_NAV', payload: shownav })
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
