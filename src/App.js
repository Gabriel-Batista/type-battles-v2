import React, { Component } from 'react';

import GameInput from './Components/GameInput'
import Paragraph from './Components/Paragraph'

class App extends Component {
    render() {
        return (
            <div>
                {/* <Nav></Nav>
                    <Track></Track>*/}
                <Paragraph />
                <GameInput />
            </div>
        )
    }
}

export default App;
