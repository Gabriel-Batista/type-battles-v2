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
        updateParagraph: paragraph => {
            dispatch({
              type: GameConst.UPDATE_PARAGRAPH,
              paragraph: paragraph
            })
        },
        updateAuthor: author => {
          dispatch({
            type: GameConst.UPDATE_AUTHOR,
            author: author
          })
        },
        updateWpm: wpm => {
          dispatch({
            type: GameConst.UPDATE_WPM,
            wpm: wpm
          })
        },
        setGameOver: () => {
            dispatch({
                type: GameConst.GAME_OVER
            });
        },
        setComplete: () => {
          dispatch({
            type: GameConst.COMPLETE
          })
        },
        gameClear: () =>  {
          dispatch({
            type: GameConst.GAME_CLEAR
          })
        }
    };
};

export default GameActions;
