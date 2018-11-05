import { FetchConst } from "../Constants/FetchConst";

export const UserAdapters = {
  leaveMatch: (id) => {
    return fetch(FetchConst.API + "/users" + id, {
      method: "PATCH",
      headers: {
        ...FetchConst.HEADERS,
        Authorization: `Token token=${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        in_match: false
      })
    }).then(res => res.json());
  }
};
