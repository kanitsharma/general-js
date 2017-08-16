import React, { Component } from 'react'
import PT from 'prop-types'
import Gridcomponent from '../../components/gridcomponent'
import Gridsection from '../../components/gridsection'
import PackCard from '../../components/packcard'

class Showcase extends Component {
  componentDidMount () {
    this.props.getfamous()
  }
  render () {
    const bgcolor = {
      height: '100%',
      width: '100%',
      background: 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '-1'
    }
    const { vueDownload } = this.props
    return <div className='container'>
      <div style={bgcolor} />
      <Gridcomponent templatecolumn='1fr 1fr 1fr' templaterow='1fr 1fr'>
        {[1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3].map((x, i) =>
          <Gridsection column='auto / auto' row={'' + parseInt(i / 3)} key={i}>
            <PackCard name='vue' data={vueDownload} />
          </Gridsection>)}
      </Gridcomponent>
    </div>
  }
}

Showcase.propTypes = {
  getfamous: PT.func,
  // jqueryDownload: PT.array,
  // reactDownload: PT.array,
  // angularDownload: PT.array,
  vueDownload: PT.array
}
export default Showcase
