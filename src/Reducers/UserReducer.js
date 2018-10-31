import UserConst from '../Constants/UserConst'

const defaultState = {
  name: "",
  email: "",
  loggedIn: false
}

const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UserConst.UPDATE_NAME:
      return { ...state, name: action.name }
    case UserConst.UPDATE_EMAIL:
      return { ...state, email: action.email }
    case UserConst.TOGGLE_LOGGED_IN:
      return { ...state, loggedIn: !state.loggedIn }
    case UserConst.CLEAR:
      return defaultState
    default:
      return state
  }
}

export default UserReducer