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
    updateUserId: (id) => {
      dispatch({
        type: UserConst.UPDATE_USER_ID,
        userId: id
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