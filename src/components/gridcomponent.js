import React from 'react'
import PropTypes from 'prop-types'

const Gridcomponent = ({ children }) => {
  const gridContainer = {
    display: 'grid',
    gridTemplateColumn: '1fr 1fr 1fr',
    gridTemplateRow: '1fr 1fr',
    gridGap: '5vh 3vw'
  }
  return (
    <div style={gridContainer}>
      {children}
    </div>
  )
}

Gridcomponent.propTypes = {
  children: PropTypes.element
}

export default Gridcomponent
