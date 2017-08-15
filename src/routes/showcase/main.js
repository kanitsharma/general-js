import React, { Component } from 'react'
import PT from 'prop-types'
import Landingsection from '../../components/landingsection'
import Gridcomponent from '../../components/gridcomponent'
import Gridsection from '../../components/gridsection'
import PackCard from '../../components/packcard'

class Showcase extends Component {
  componentDidMount () {
    this.props.getfamous()
  }
  render () {
    const bgcolor = {
      background: '#44107A no-repeat fixed center'
    }
    const { jqueryDownload, vueDownload, reactDownload, angularDownload } = this.props
    return <div style={bgcolor}>
      <Landingsection hpos='center' vpos='center' size='100vh'>
        <Gridcomponent templatecolumn='1fr 1fr 1fr' templaterow='1fr 1fr'>
          {[1, 1, 2, 2, 2, 2].map((x, i) => <Gridsection column='auto / auto' row={'' + parseInt(i / 3)} key={i}>
            <PackCard name='vue' data={jqueryDownload} />
          </Gridsection>)}
        </Gridcomponent>
      </Landingsection>
    </div>
  }
}

Showcase.propTypes = {
  getfamous: PT.func,
  jqueryDownload: PT.array,
  reactDownload: PT.array,
  angularDownload: PT.array,
  vueDownload: PT.array
}
export default Showcase
