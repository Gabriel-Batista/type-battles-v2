import GameConst from '../Constants/GameConst'

const defaultState = {
    input: "",
    paragraph: "",
    right: "",
    wrong: ""
}

const GameStateReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GameConst.UPDATE_RIGHT:
            return { ...state, right: action.right}
        case GameConst.UPDATE_WRONG:
            return { ...state, wrong: action.wrong}
        default:
            return state
    }
}

export default GameStateReducer