import React from 'react'
import PropTypes from 'prop-types'

const VerticalSection = ({ tags, click, active }) =>
  <div className='vertical'>
    {tags.map((tag, i) =>
      <div className={`tag`} onClick={() => click(tag)} key={i}>#{tag}
        <span className={tag === active ? 'active' : ''} />
      </div>)
    }
  </div>

VerticalSection.propTypes = {
  tags: PropTypes.array,
  click: PropTypes.func,
  active: PropTypes.string
}

export default VerticalSection
