import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Navmenu = ({ togglenav }) => <div className='menu-overlay'>
  <div className='menu'>
    <Link to='/home' onClick={() => togglenav()} className='menu-item'>Home</Link>
    <Link to='/showcase' onClick={() => togglenav()} className='menu-item'>Projects</Link>
    <Link to='/about' onClick={() => togglenav()} className='menu-item'>About</Link>
  </div>
</div>

Navmenu.propTypes = {
  togglenav: PropTypes.func
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  togglenav: () => dispatch({ type: 'TOGGLE_NAV' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Navmenu)
