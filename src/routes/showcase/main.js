import React, { Component } from 'react'
import PT from 'prop-types'
import Gridcomponent from '../../components/gridcomponent'
import Gridsection from '../../components/gridsection'
import PackCard from '../../components/packcard'
import Hheader from '../../components/hover-header'
import HeadingHero from '../../static/Orange Juice.jpeg'
import { LineChart, Line } from 'recharts'

const SampleGraph = ({ data, width, height }) =>
  <LineChart width={width} height={height} data={data}
    margin={{ top: 5 }}>
    <defs>
      <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='5%' stopColor='#43e97b' stopOpacity={1} />
        <stop offset='95%' stopColor='#38f9d7' stopOpacity={1} />
      </linearGradient>
    </defs>
    <Line type='monotone' dataKey='downloads' stroke='url(#colorUv)' />
  </LineChart>

SampleGraph.propTypes = {
  data: PT.array,
  width: PT.number,
  height: PT.number
}

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
      <Gridcomponent templatecolumn='1fr 1fr' templaterow='1fr'>
        <Gridsection column='1 / 2' row='1'>
          <Hheader
            htext='vue'
            vtext='vuejs/vue'
            btext='A progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
            width='300'
            height='300'
            hcolor='#fff'
            component={vueDownload
              ? <SampleGraph data={vueDownload} width={300} height={300} /> : null}
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='100'
            animation={false}
            />
        </Gridsection>
        <Gridsection column='2 / 3' row='1'>
          <Hheader
            htext='vue'
            vtext='vuejs/vue'
            btext='A progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
            width='300'
            height='300'
            hcolor='#fff'
            component={vueDownload
              ? <SampleGraph data={vueDownload} width={300} height={300} /> : null}
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='100'
            animation={false}
            />
        </Gridsection>
      </Gridcomponent>
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
