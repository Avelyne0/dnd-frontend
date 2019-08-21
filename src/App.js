import React from "react";
import CharacterGenerator from "./components/CharacterGenerator";
import "./App.css";
import Navbar from "./components/NavBar.js";
import API from "./adapters/API";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "semantic-ui-react";

import CharacterContainer from "./containers/CharacterContainer";
import CharacterShowContainer from "./containers/CharacterShowContainer";
import LandingPage from "./components/LandingPage";

class App extends React.Component {
  state = {
    user: null,
    characters: [],
    selectedCharacter: null,
    // characters: Array.apply(null, Array(30)).map(() => generateCharacter()),
    filterOption: "",
    filterOptions: [
      "all",
      "elf",
      "dwarf",
      "human",
      "gnome",
      "goliath",
      "genasi",
      "halfling",
      "orc"
    ],
    sortOption: "",
    sortOptions: ["alphabetically", "age"]
  };

  componentDidMount() {
    API.getCharacters().then(characters => this.setState({ characters }));
    API.validateUser().then(this.postAuth);
  }

  postAuth = user => {
    if (user.error) {
      alert(user.error);
    } else {
      this.setState({ user });
    }
  };

  signUp = user => {
    API.signUp(user).then(this.postAuth);
  };

  logIn = user => {
    API.logIn(user).then(this.postAuth);
  };

  logOut = () => {
    API.clearToken();
    this.setState({ user: undefined });
  };

  goHome = () => {
    this.props.history.push("/");
  };

  submitCharacter = character => {
    API.postCharacter(character, this.state.user)
      .then(({ character }) =>
        this.setState({ characters: [...this.state.characters, character] })
      )
      .catch(errorPromise => {
        errorPromise.then(data => {
          this.setState({ errors: data.errors });
        });
      });
  };

  // sortCharactersArray = (array) => array.sort((charA, charB) => charA.id - charB.id)

  filterCharactersArray = (array, filterOption) => {
    if (filterOption === "all") return array;
    return array.filter(character =>
      character.race
        .toLocaleLowerCase()
        .includes(filterOption.toLocaleLowerCase())
    );
  };

  onFilterChange = value =>
    this.state.filterOption === value
      ? this.setState({ filterOption: "" })
      : this.setState({ filterOption: value });

  onSortChange = event => {
    this.state.sortOption === event.target.value
      ? this.setState({ sortOption: "" })
      : this.setState({ sortOption: event.target.value });
  };

  sortCharactersArray = filteredCharacters => {
    return filteredCharacters.sort((charA, charB) => {
      if (this.state.sortOption === "") return charA.id - charB.id;
      if (this.state.sortOption === "alphabetically") {
        return charA.name.localeCompare() - charB.name.localeCompare();
      }
      if (this.state.sortOption === "age") return charA.age - charB.age;
    });
  };

  characterIndexPage = props => {
    const filteredCharacters = this.filterCharactersArray(
      this.state.characters,
      this.state.filterOption
    );
    const sortedCharacters = this.sortCharactersArray(filteredCharacters);
    console.log(sortedCharacters);
    return (
      <CharacterContainer
        {...props}
        characters={sortedCharacters}
        onFilterChange={this.onFilterChange}
        onSortChange={this.onSortChange}
        filterOption={this.state.filterOption}
        filterOptions={this.state.filterOptions}
        sortOption={this.state.sortOption}
        sortOptions={this.state.sortOptions}
      />
    );
  };

  characterShowPage = props => {
    const selectedCharacter = this.state.characters.find(
      character => character.id === parseInt(props.match.params.id)
    );
    if (!selectedCharacter) return <div>Loading Character</div>;
    if (!this.state.user) return <Redirect to="/login" />;

    return (
      <CharacterShowContainer
        {...props}
        deleteCharacter={() => this.deleteCharacter(selectedCharacter.id)}
        {...selectedCharacter}
      />
    );
  };

  deleteCharacter = id => {
    API.deleteCharacter(id)
      .then(
        this.setState({
          characters: this.state.characters.filter(
            character => character.id !== id
          )
        })
      )
      .then(this.props.history.push("/characters"));
  };

  render() {
    return (
      <div className="App">
        <Navbar
          user={this.state.user}
          home={this.goHome}
          signUp={this.signUp}
          logIn={this.logIn}
          logOut={this.logOut}
        />
        <br />
        <Container>
          <Switch>
            <Route
              path={["/"]}
              exact
              component={() => (
                <>
                  {this.state.user && (
                    <LandingPage
                      user={this.state.user}
                      signUp={this.signUp}
                      logIn={this.logIn}
                    />
                  )}
                </>
              )}
            />
            <Route
              path={["/random"]}
              exact
              component={() => (
                <>
                  {this.state.user && (
                    <CharacterGenerator submit={this.submitCharacter} />
                  )}
                </>
              )}
            />
            <Route
              path={["/characters/"]}
              exact
              component={this.characterIndexPage}
            />
            <Route
              path={["/characters/:id"]}
              exact
              component={this.characterShowPage}
            />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
