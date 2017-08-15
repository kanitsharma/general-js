import reducer from '../../futils/reducer'

const Actionhandlers = {
  TOGGLE_NAV: (state, action) => ({ ...state, shownav: action.payload.shownav })
}

const Init = { shownav: false }

export default reducer(Init, Actionhandlers)
