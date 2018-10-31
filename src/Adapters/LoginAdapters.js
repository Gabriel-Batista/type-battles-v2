import { FetchConst } from '../Constants/FetchConst'

export const LoginAdapters = {
  login: (email, password) =>  {
    return fetch(FetchConst.API + '/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(res => res.json())
  }
}