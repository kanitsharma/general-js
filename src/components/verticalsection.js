import React from 'react'
import PropTypes from 'prop-types'

const VerticalSection = ({ tags }) =>
  <div className='vertical'>
    {tags.map((tag, i) => <div className={`tag ${i === 3 ? 'active' : ''}`} key={i}>#{tag}</div>)}
  </div>

VerticalSection.propTypes = {
  tags: PropTypes.array
}

export default VerticalSection
