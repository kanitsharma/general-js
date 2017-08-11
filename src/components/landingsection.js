import React from 'react'
import PropTypes from 'prop-types'

const Landingsection = ({ children, hpos, vpos, background }) => {
  const basicstyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: hpos,
    justifyContent: vpos,
    background: background
  }
  return (
    <div className='panel' style={basicstyle}>
      {children}
    </div>
  )
}

Landingsection.propTypes = {
  children: PropTypes.element,
  hpos: PropTypes.string,
  vpos: PropTypes.string,
  background: PropTypes.string
}

export default Landingsection
