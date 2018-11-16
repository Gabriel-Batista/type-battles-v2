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
  },
  signup: (email, password, name) =>  {
    return fetch(FetchConst.API + '/users', {
      method: "POST",
      headers: {
        ...FetchConst.HEADERS,
        Authorization: `Token token=${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      })
    })
      .then(res => res.json())
  }
}