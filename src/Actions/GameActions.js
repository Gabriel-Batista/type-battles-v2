import GameConst from "../Constants/GameConst";

const GameActions = dispatch => {
    return {
        updateRight: right => {
            dispatch({
                type: GameConst.UPDATE_RIGHT,
                right: right
            });
        },
        updateWrong: wrong => {
            dispatch({
                type: GameConst.UPDATE_WRONG,
                wrong: wrong
            });
        },
        updateInput: input => {
            dispatch({
                type: GameConst.UPDATE_INPUT,
                input: input
            });
        },
        gameOver: () => {
            dispatch({
                type: GameConst.GAME_OVER
            });
        }
    };
};

export default GameActions;
