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
    Downloads: a.payload.Downloads.downloads
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  Downloads: []
}

export default reducer(initialState, ACTION_HANDLERS)
