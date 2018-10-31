import UserConst from '../Constants/UserConst'

const UserActions = (dispatch) => {
  return {
    updateName: (name) => {
      dispatch({
        type: UserConst.UPDATE_NAME,
        name: name
      })
    },
    updateEmail: (email) => {
      dispatch({
        type: UserConst.UPDATE_EMAIL,
        email: email
      })
    },
    toggleLoggedIn: () => {
      dispatch({
        type: UserConst.TOGGLE_LOGGED_IN
      })
    },
    clear: () =>  {
      dispatch({
        type: UserConst.CLEAR
      })
    }
  }
}

export default UserActions