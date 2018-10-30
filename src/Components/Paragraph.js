import React from 'react'
import { connect } from 'react-redux'

import GameActions from '../Actions/GameActions'

const Paragraph = (props) =>    {

    return (
        <div>
            <p>{props.paragraph}</p>
            <span style={{ color: 'green' }}>{props.right}</span>
            <span style={{ color: 'red' }}>{props.wrong}</span>
        </div>
    )
}

const mapStateToProps = (state) =>  {
    return {
        paragraph: state.game.paragraph,
        right: state.game.right,
        wrong: state.game.wrong
    }
}

export default connect(mapStateToProps, GameActions)(Paragraph)