import GameConst from '../Constants/GameConst'

const defaultState = {
    matchId: null,
    input: "",
    paragraph: "The quick fox jumps over the lazy dog",
    right: "",
    wrong: "",
    gameOver: false
}

const GameReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GameConst.UPDATE_RIGHT:
            return { ...state, right: action.right}
        case GameConst.UPDATE_WRONG:
            return { ...state, wrong: action.wrong}
        case GameConst.UPDATE_INPUT:
            return { ...state, input: action.input}
        case GameConst.UPDATE_MATCH_ID:
            return { ...state, matchId: action.matchId}
        case GameConst.GAME_OVER:
            return{ ...state, gameOver: true}
        default:
            return state
    }
}

export default GameReducer