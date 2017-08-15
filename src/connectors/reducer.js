import reducer from '../futils/reducer'

const Actionhandlers = {
  TOGGLE_NAV: (state, action) => ({ ...state, shownav: !state.shownav })
}

const Init = { shownav: false }

export default reducer(Init, Actionhandlers)
