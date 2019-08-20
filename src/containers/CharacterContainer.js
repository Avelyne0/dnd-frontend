import React, { Component } from 'react'
import { Dropdown, Card } from 'semantic-ui-react'
import CharacterCard from '../components/CharacterCard'

export default class CharacterContainer extends Component {
  render() {
    return (
      <>
        <Dropdown
          onChange={this.onFilterChange}
          placeholder='Select Race'
          fluid
          selection
          options={["elf", "human", "dwarf"].map(race => ({ key: race, text: race, value: race, }))}
        />
        <Card.Group>
          {
            this.props.characters.map(character => <CharacterCard character={character} />)
          }
        </Card.Group>
      </>
    )
  }
}
