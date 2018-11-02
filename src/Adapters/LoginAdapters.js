import { FetchConst } from '../Constants/FetchConst'

export const LoginAdapters = {
  login: (email, password) =>  {
    return fetch(FetchConst.API + '/login', {
      method: "POST",
      headers: {
        ...FetchConst.HEADERS,
        Authorization: `Token token=${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(res => res.json())
  }
}