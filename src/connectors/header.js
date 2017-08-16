import React from 'react'
import Navmenu from '../components/navmenu'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { pick } from 'ramda'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Header = ({ togglenav, shownav }) => {
  return (
    <div>
      <div className='header'>
        <div className={`nav-icon ${shownav ? 'open' : ''}`} onClick={() => togglenav()}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <ReactCSSTransitionGroup transitionName='nav' transitionEnterTimeout={800} transitionLeaveTimeout={400}>
        {shownav && <Navmenu />}
      </ReactCSSTransitionGroup>
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
