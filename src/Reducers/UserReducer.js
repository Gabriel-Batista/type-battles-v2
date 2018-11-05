import UserConst from '../Constants/UserConst'

const defaultState = {
  userId: -1,
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
    case UserConst.UPDATE_USER_ID:
      return { ...state, userId: action.userId}
    case UserConst.TOGGLE_LOGGED_IN:
      return { ...state, loggedIn: !state.loggedIn }
    case UserConst.USER_CLEAR:
      return defaultState
    default:
      return state
  }
}

export default UserReducer