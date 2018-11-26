import { FetchConst } from "../Constants/FetchConst";

export const GameAdapters = {
    join: () => {
        return fetch(FetchConst.API + "/matches/join", {
            method: "GET",
            headers: {
                ...FetchConst.HEADERS,
                Authorization: `Token token=${localStorage.getItem("token")}`
            }
        }).then(res => res.json());
    },
    practice: () => {
        return fetch(FetchConst.API + "/matches/join/practice", {
            method: "GET",
            headers: {
                ...FetchConst.HEADERS,
                Authorization: `Token token=${localStorage.getItem("token")}`
            }
        }).then(res => res.json());
    },
    gameOver: id => {
        return fetch(FetchConst.API + "/matches/" + id, {
            method: "PATCH",
            headers: {
                ...FetchConst.HEADERS,
                Authorization: `Token token=${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                complete: true
            })
        }).then(res => res.json());
    },
    getMatch: id => {
        return fetch(FetchConst.API + "/matches/" + id, {
            method: "GET",
            headers: {
                ...FetchConst.HEADERS,
                Authorization: `Token token=${localStorage.getItem("token")}`
            }
        }).then(res => res.json());
    }
};
