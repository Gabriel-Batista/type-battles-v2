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
        updateMatchId: matchId => {
            dispatch({
                type: GameConst.UPDATE_MATCH_ID,
                matchId: matchId
            });
        },
        gameOver: () => {
            dispatch({
                type: GameConst.GAME_OVER
            });
        },
        complete: () => {
          dispatch({
            type: GameConst.COMPLETE
          })
        },
        clear: () =>  {
          dispatch({
            type: GameConst.GAME_CLEAR
          })
        }
    };
};

export default GameActions;
