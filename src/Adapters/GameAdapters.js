import { FetchConst } from '../Constants/FetchConst'

export const GameAdapters = {
  join: () => {
    return fetch(FetchConst.API + '/matches/join', {
      method: "GET",
      headers: {...FetchConst.HEADERS,
        Authorization: `Token token=${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
  }
}