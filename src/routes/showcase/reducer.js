import reducer from '../../futils/reducer'

// ------------------------------------
// Constants
// ------------------------------------
// Constants Here
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  FAMOUSDATA: (s, a) => ({ ...s,
    Downloads: a.payload.Downloads.downloads,
    active: a.payload.Downloads.package
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  Downloads: [],
  active: ''
}

export default reducer(initialState, ACTION_HANDLERS)
