import React, { Component } from 'react';

import GameInput from './Components/GameInput'
import Paragraph from './Components/Paragraph'
import Nav from './Components/Nav'

import { ActionCable } from 'react-actioncable-provider'

import { Button } from 'semantic-ui-react'

class App extends Component {
    handleReceived = res =>  {
      console.log(res)
    }



    render() {
        return (
            <div>
                {/*<Track></Track>*/}
              <ActionCable
                channel={{ channel: 'MatchesChannel', match_id: 1 }}
                onReceived={this.handleReceived}
              />
              <Nav></Nav>
              <Paragraph />
              <GameInput />
              <Button onClick={this.test}>test</Button>
            </div>
        )
    }
}

export default App;
