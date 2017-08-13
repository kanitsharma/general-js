import React from 'react'
import PropTypes from 'prop-types'

const Gridcomponent = ({ children, templatecolumn, templaterow }) => {
  const gridContainer = {
    display: 'grid',
    gridTemplateColumn: templatecolumn,
    gridTemplateRow: templaterow,
    gridGap: '5vh 3vw',
    marginTop: '10vh'
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
  templatecolumn: PropTypes.string
}

export default Gridcomponent
