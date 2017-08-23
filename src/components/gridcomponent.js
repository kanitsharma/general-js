import React from 'react'
import PropTypes from 'prop-types'

const Gridcomponent = ({ children, templatecolumn, templaterow, gridGap }) => {
  const gridContainer = {
    display: 'grid',
    gridTemplateColumn: templatecolumn,
    gridTemplateRow: templaterow,
    gridGap: gridGap,
    margin: '2vh'
  }
  return (
    <div style={gridContainer}>
      {children}
    </div>
  )
}

Gridcomponent.propTypes = {
  children: PropTypes.node,
  templaterow: PropTypes.string,
  templatecolumn: PropTypes.string,
  gridGap: PropTypes.string
}

export default Gridcomponent
