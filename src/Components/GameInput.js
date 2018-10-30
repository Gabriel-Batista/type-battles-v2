import React from 'react'
import { connect } from 'react-redux'

const GameInput = (props) =>    {
    const handleInput = (value) =>  {

    }

    return  (
        <Input
            value={props.inputValue}
            onChange={(e) => handleInput(e.target.value)}
        >
        </Input>
    )
}

const mapStateToProps = (state) =>  {
    return {
        paragraph: state.game.paragraph
    }
}

