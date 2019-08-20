import React, { Component } from 'react'
import { rollAttribute, random, randomRange } from './utils/utils'
import CharacterShow from './CharacterShow.js';
import { generateCharacter } from './utils/characterGenerator'

export default class CharacterGenerator extends Component {
  state = {
    selectedCharacter: ''
  }
  componentDidMount() {
   this.setCharacter()
  }

  setCharacter = () => {
    this.setState({selectedCharacter: generateCharacter()})
  }

  render() {
    const character = this.state.selectedCharacter
    return (
      <div>
        <CharacterShow resetCharacter={this.setCharacter} character={character} />
      </div>
    )
  }
}









