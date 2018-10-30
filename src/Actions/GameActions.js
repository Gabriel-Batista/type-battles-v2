import GameConst from '../Constants/GameConst'

const GameActions = (dispatch) => {
    return {
        updateRight: (right) => {
            dispatch({
                type: GameConst.updateRight,
                right: right
            })
        },
        updateWrong: (wrong) => {
            dispatch({
                type: GameConst.updateWrong,
                wrong: wrong
            })
        },
        updateInput: (input) => {
            dispatch({
                type: GameConst.updateInput,
                input: input
            })
        }
    }
}

export default GameActions