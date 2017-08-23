import React, { Component } from 'react'
import PT from 'prop-types'
import Gridcomponent from '../../components/gridcomponent'
import Gridsection from '../../components/gridsection'
import PackCard, { SampleGraph } from '../../components/packcard'
import Hheader from '../../components/hover-header'
import HeadingHero from '../../static/Orange Juice.jpeg'
import VerticalSection from '../../components/verticalsection'
import Loader from '../../components/loader'
import Searchbox from '../../components/searchbox'

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
    const { Downloads, active, loading } = this.props
    return <div className='container'>
      <div className='background' />
      <VerticalSection active={active} tags={tags} click={(tag) => this.props.getfamous(tag)} />
      <Loader loading={loading} />
      <Searchbox />
      <Gridcomponent templatecolumn='1fr 1fr' templaterow='1fr' gridGap='5vh 2vw'>
        <Gridsection column='1 / 2' row='1'>
          <Hheader
            htext={active}
            vtext='vuejs/vue'
            btext='A progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
            width='300'
            height='300'
            hcolor='#fff'
            component={Downloads
              ? <SampleGraph data={Downloads} width={300} height={300} /> : null}
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='90'
            animation={false}
            />
        </Gridsection>
        <Gridsection column='2 / 3' row='1'>
          <Hheader
            htext={active}
            vtext='vuejs/vue'
            btext='A progressive, incrementally-adoptable JavaScript framework for building UI on the web.'
            width='300'
            height='300'
            hcolor='#fff'
            component={Downloads
              ? <SampleGraph data={Downloads} width={300} height={300} /> : null}
            source={HeadingHero}
            boxpos='start' hpos='center' hsize='90'
            animation={false}
            />
        </Gridsection>
      </Gridcomponent>
      <Gridcomponent templatecolumn='1fr 1fr 1fr' templaterow='1fr 1fr' gridGap='5vh 5vw'>
        {[1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3].map((x, i) =>
          <Gridsection column='auto / auto' row={'' + parseInt(i / 3)} key={i}>
            <PackCard name={active} data={Downloads} />
          </Gridsection>)}
      </Gridcomponent>
    </div>
  }
}

Showcase.propTypes = {
  getfamous: PT.func,
  Downloads: PT.array,
  active: PT.string,
  loading: PT.bool
}
export default Showcase
