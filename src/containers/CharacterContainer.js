import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import CharacterCard from '../components/CharacterCard'
import CharacterFilter from '../components/CharacterFilter';
import CharacterSort from '../components/CharacterSort';

export default class CharacterContainer extends Component {
  state = {
    selectedCharacter: null,
    filterOption: '',
    filterOptions: [
      'elf',
      'dwarf',
      'human',
      'gnome',
      'goliath',
      'genasi',
      'halfling',
      'orc'
    ],
    sortOption: '',
    sortOptions: ['none', 'alphabetically', 'age']
  }

  filterCharactersArray = (array, filterOption) => {
    return array.filter(character => (character.race.toLocaleLowerCase().includes(filterOption.toLocaleLowerCase())))
  }

  onFilterChange = value => (value === this.state.filterOption ? this.setState({ filterOption: '' }) : this.setState({ filterOption: value }))


  render() {
    const filteredCharacters = this.filterCharactersArray(this.props.characters, this.state.filterOption)
    return (
      <>
        <CharacterFilter
          handleChange={this.onFilterChange}
          filterOption={this.state.filterOption}
          filterOptions={this.state.filterOptions}
        />
        <CharacterSort />
        
        <Card.Group itemsPerRow={6}>
          {
            filteredCharacters.map(character => <CharacterCard key={character.id} character={character} />)
          }
        </Card.Group>
      </>
    )
  }
}