import React from 'react'
import PropTypes from 'prop-types'

const VerticalSection = ({ tags, click }) =>
  <div className='vertical'>
    {tags.map((tag, i) =>
      <div className={`tag ${i === 3 ? 'active' : ''}`} onClick={() => click(tag)} key={i}>#{tag}</div>)
    }
  </div>

VerticalSection.propTypes = {
  tags: PropTypes.array,
  click: PropTypes.func
}

export default VerticalSection
