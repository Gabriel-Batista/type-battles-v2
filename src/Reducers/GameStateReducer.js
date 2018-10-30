import GameConst from '../Constants/GameConst'

const defaultState = {
    input: "",
    paragraph: "The quick fox jumps over the lazy dog",
    right: "",
    wrong: ""
}

const GameStateReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GameConst.UPDATE_RIGHT:
            return { ...state, right: action.right}
        case GameConst.UPDATE_WRONG:
            return { ...state, wrong: action.wrong}
        case GameConst.UPDATE_INPUT:
            return { ...state, input: action.input}
        default:
            return state
    }
}

export default GameStateReducer