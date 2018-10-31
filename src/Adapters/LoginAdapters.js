import { FetchConst } from '../Constants/FetchConst'

export const LoginAdapters = {
  login: (name, email, password) =>  {
    return fetch(FetchConst.API + '/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
    .then(res => res.json())
  }
}