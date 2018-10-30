import React from 'react'
import { connect } from 'react-redux'

import GameActions from '../Actions/GameActions'

const GameInput = (props) =>    {
    const handleInput = (value) =>  {
        let right = ""
        let wrong = ""
        console.log(value)

        for (var i = 0; i < value.length; i++) {
            value.charAt(i) === props.paragraph.charAt(i) && wrong.length === 0 ? right += value.charAt(i) : wrong += value.charAt(i)
        }
        
        props.updateRight(right)
        props.updateWrong(wrong)
        props.updateInput(value)
    }

    return  (
        <input
            value={props.input}
            onChange={(e) => handleInput(e.target.value)}
        >
        </input>
    )
}

const mapStateToProps = (state) =>  {
    return {
        input: state.game.input,
        paragraph: state.game.paragraph
    }
}

export default connect(mapStateToProps, GameActions)(GameInput)

