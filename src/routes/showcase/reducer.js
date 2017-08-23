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
    active: a.payload.Downloads.package,
    loading: false
  }),
  LOADER: (s, a) => ({
    ...s,
    loading: a.payload.loading
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  Downloads: [],
  active: '',
  loading: false
}

export default reducer(initialState, ACTION_HANDLERS)
