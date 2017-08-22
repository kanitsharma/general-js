import { call, put, takeLatest, all } from 'redux-saga/effects' //eslint-disable-line
import actionSpreader from '../../utils/actionspreader'
import request from '../../utils/request'

const packageInfoUrl = pack => `https://api.npmjs.org/downloads/range/last-month/${pack}`

export function * getFamousListener (action) {
  try {
    const [ downloadedData ] = yield all([
      call(request, packageInfoUrl(action.payload.tag))
    ])
    yield put(actionSpreader('FAMOUSDATA', {
      Downloads: downloadedData
    }))
  } catch (e) {
    yield put(actionSpreader('GETFAMOUSERROR'))
  }
}

export function * showcaseSaga () {
  yield takeLatest('GETFAMOUS', getFamousListener)
}

export default [showcaseSaga]
