import React from 'react'
import PropTypes from 'prop-types'

const Gridcomponent = ({ children }) => {
  const gridContainer = {
    display: 'grid',
    gridTemplateColumn: '1fr 1fr',
    gridTemplateRow: '1fr 1fr',
    gridGap: '5vh 10vw',
  }
  return (
    <div style={gridContainer}>
      {children}
    </div>
  )
}

Gridcomponent.propTypes = {
  children: PropTypes.node
}

export default Gridcomponent
