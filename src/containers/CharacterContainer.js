import React, { Component } from 'react'
import { Dropdown, Card } from 'semantic-ui-react'
import CharacterCard from '../components/CharacterCard'
import CharacterFilter from '../components/CharacterFilter';

export default class CharacterContainer extends Component {
  
  render() {
    const {characters, handleChange, filterOption, filterOptions} = this.props
    return (
      <>
      <CharacterFilter 
      handleChange={handleChange}
      filterOption={filterOption}
      filterOptions={filterOptions}
      />
        <Card.Group>
          {
            characters.map(character => <CharacterCard key={character.id} character={character} />)
          }
        </Card.Group>
      </>
    )
  }
}


{/* <Dropdown
          onChange={onFilterChange}
          placeholder='Select Race'
          fluid
          selection
          options={["elf", "human", "dwarf"].map(race => ({ key: race, text: race, value: race, }))}
        /> */}