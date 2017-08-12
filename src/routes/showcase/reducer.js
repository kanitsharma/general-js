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
    jqueryDownload: a.payload.jquery,
    reactDownload: a.payload.react,
    angularDownload: a.payload.angular,
    vueDownload: a.payload.vue
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  jqueryDownload: [],
  reactDownload: [],
  angularDownload: [],
  vueDownload: []
}

export default reducer(initialState, ACTION_HANDLERS)
