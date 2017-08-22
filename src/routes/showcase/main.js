import React, { Component } from 'react'
import PT from 'prop-types'
import Gridcomponent from '../../components/gridcomponent'
import Gridsection from '../../components/gridsection'
import PackCard, { SampleGraph } from '../../components/packcard'
import Hheader from '../../components/hover-header'
import HeadingHero from '../../static/Orange Juice.jpeg'
import VerticalSection from '../../components/verticalsection'

class Showcase extends Component {
  componentDidMount () {
    this.props.getfamous('react')
  }
  render () {
    const tags = [
      'webpack',
      'react',
      'angular',
      'vue',
      'jquery'
    ]
    const { Downloads, active } = this.props
    return <div className='container'>
      <div className='background' />
      <VerticalSection active={active} tags={tags} click={(tag) => this.props.getfamous(tag)} />
      <div className='topbar'>
        <input type='text' name='search' placeholder='Search..' className='searchbar' />
      </div>
      <Gridcomponent templatecolumn='1fr 1fr' templaterow='1fr' gridGap='5vh 2vw'>
        <Gridsection column='1 / 2' row='1'>
          <Hheader
            htext='vue'
            vtext='vuejs/vue'
            btext='A progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
            width='300'
            height='300'
            hcolor='#fff'
            component={Downloads
              ? <SampleGraph data={Downloads} width={300} height={300} /> : null}
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
            component={Downloads
              ? <SampleGraph data={Downloads} width={300} height={300} /> : null}
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='100'
            animation={false}
            />
        </Gridsection>
      </Gridcomponent>
      <Gridcomponent templatecolumn='1fr 1fr 1fr' templaterow='1fr 1fr' gridGap='5vh 5vw'>
        {[1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3].map((x, i) =>
          <Gridsection column='auto / auto' row={'' + parseInt(i / 3)} key={i}>
            <PackCard name='vue' data={Downloads} />
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
  Downloads: PT.array,
  active: PT.string
}
export default Showcase
