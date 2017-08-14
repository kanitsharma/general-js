import React from 'react'
import PropTypes from 'prop-types'

const Landingsection = ({ children, hpos, vpos, background, size }) => {
  const basicstyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: hpos,
    justifyContent: vpos,
    background: background,
  }
  return (
    <div className='panel' style={basicstyle}>
      {children}
    </div>
  )
}

Landingsection.propTypes = {
  children: PropTypes.node,
  hpos: PropTypes.string,
  vpos: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.string
}

export default Landingsection
