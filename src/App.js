import React, { Component } from 'react';

import GameInput from './Components/GameInput'
import Paragraph from './Components/Paragraph'
import Nav from './Components/Nav'

class App extends Component {
    render() {
        return (
            <div>
                {/*<Track></Track>*/}
              <Nav></Nav>
              <Paragraph />
              <GameInput />
            </div>
        )
    }
}

export default App;
