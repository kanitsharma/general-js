import { call, put, takeLatest, all } from 'redux-saga/effects' //eslint-disable-line
import actionSpreader from '../../utils/actionspreader'
import request from '../../utils/request'

const packageInfoUrl = pack => `https://api.npmjs.org/downloads/range/last-month/${pack}`

export function * getFamousListener () {
  try {
    const [ jqueryData, reactData, angularData, vueData ] = yield all([
      call(request, packageInfoUrl('jquery')),
      call(request, packageInfoUrl('react')),
      call(request, packageInfoUrl('angular')),
      call(request, packageInfoUrl('vue'))
    ])
    yield put(actionSpreader('FAMOUSDATA', {
      jquery: jqueryData.downloads, react:reactData.downloads, angular:angularData.downloads, vue: vueData.downloads
    }))
  } catch (e) {
    yield put(actionSpreader('GETFAMOUSERROR'))
  }
}

export function * showcaseSaga () {
  yield takeLatest('GETFAMOUS', getFamousListener)
}

export default [showcaseSaga]
