import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import CharacterCard from "../components/CharacterCard";
import CharacterFilter from "../components/CharacterFilter";
import CharacterSort from "../components/CharacterSort";

export default class CharacterContainer extends Component {
  state = {
    selectedCharacter: null
  };

  // filterCharactersArray = (array, filterOption) => {
  //   if (filterOption === "all") return array;
  //   return array.filter(character =>
  //     character.race
  //       .toLocaleLowerCase()
  //       .includes(filterOption.toLocaleLowerCase())
  //   );
  // };

  // onFilterChange = value =>
  //   this.state.filterOption === value
  //     ? this.setState({ filterOption: "" })
  //     : this.setState({ filterOption: value });

  // onSortChange = event => {
  //   this.state.sortOption === event.target.value
  //     ? this.setState({ sortOption: "" })
  //     : this.setState({ sortOption: event.target.value });
  // };

  // sortCharactersArray = filteredCharacters => {
  //   return filteredCharacters.sort((charA, charB) => {
  //     if (this.state.sortOption === "") return filteredCharacters;
  //     if (this.state.sortOption === "alphabetically")
  //       return charA.name.localeCompare() - charB.name.localeCompare();
  //     if (this.state.sortOption === "age") return charA.age - charB.age;
  //   });
  // };

  render() {
    // const filteredCharacters = this.filterCharactersArray(
    //   this.props.characters,
    //   this.state.filterOption
    // );
    // console.log(filteredCharacters);
    // const sortedCharacters = this.sortCharactersArray(filteredCharacters);
    // console.log(sortedCharacters);
    const {characters} = this.props
    return (
      <>
        <CharacterFilter
          handleChange={this.props.onFilterChange}
          filterOption={this.props.filterOption}
          filterOptions={this.props.filterOptions}
        />
        <br />
        <CharacterSort
          sortOptions={this.props.sortOptions}
          sortOption={this.props.sortOption}
          handleChange={this.props.onSortChange}
        />
        <br />

        <Card.Group itemsPerRow={6}>
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Card.Group>
      </>
    );
  }
}
