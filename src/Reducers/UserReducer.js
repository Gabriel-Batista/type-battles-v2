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
    case GameConst.TOGGLE_LOGGED_IN:
      return { ...state, loggedIn: !state.loggedIn }
    default:
      return state
  }
}

export default UserReducer