import React from 'react';
import CharacterGenerator from './components/CharacterGenerator';
import './App.css';
import Navbar from './components/NavBar.js';
import API from './adapters/API';
import { Route, Switch, Redirect } from 'react-router-dom'
import CharacterShow from './components/CharacterShow';
import { Container, Card, Dropdown } from 'semantic-ui-react'
import { generateCharacter } from './components/utils/characterGenerator'

import CharacterContainer from './containers/CharacterContainer';


class App extends React.Component {

  state = {
    user: null,
    characters: Array.apply(null, Array(30)).map(() => generateCharacter()),
    filterOption: ''
  }

  componentDidMount() {
    API.validateUser()
      .then(this.postAuth)
  }

  postAuth = user => {
    if (user.error) {
      alert(user.error)
    } else {
      this.setState({ user })
    }
  }

  signUp = user => {
    API.signUp(user)
      .then(this.postAuth)
  }

  logIn = user => {
    API.logIn(user)
      .then(this.postAuth)
  }

  logOut = () => {
    API.clearToken()
    this.setState({ user: undefined })
  }

  goHome = () => {
    this.props.history.push('/')
  }

  submitCharacter = (character) => {
    API.postCharacter(character)
      .then(data => this.setState({ user: { ...this.state.user, characters: [...this.state.user.characters, data.characters] } }))
      .catch(errorPromise => {
        errorPromise
          .then(data => {
            this.setState({ errors: data.errors })
          })
      })
  }

  characterIndexPage = (props) => {
    const filteredCharacters = this.filterCharactersArray(this.state.characters, this.state.filterOption)
    const characters = this.sortCharactersArray(filteredCharacters)
    return <CharacterContainer {...props} filterChange={this.filterChange} characters={characters}/>
  }

  characterShowPage = (props) => {
    const selectedCharacter = this.state.characters.find(character => character.id === parseInt(props.match.params.id))
    if (!selectedCharacter) return <div>Loading character</div>
    if (!this.state.user) return <Redirect to="/login" />

    return <CharacterShow {...props} back={() => this.setState({ selectedCharacter: null })} {...selectedCharacter} />
  }

  sortCharactersArray = (array) => array.sort((charA, charB) => charA.age - charB.age)

  filterCharactersArray = (array, filterOption) => {
    return array.filter(character => (character.race.toLocaleLowerCase().includes(filterOption.toLocaleLowerCase())))
  }



  onFilterChange = (event, { value }) => {
    console.log(value)
    this.setState({filterOption: value})
  }

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} home={this.goHome} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} />
        <Container>
          <Switch>
            <Route path={["/"]} exact component={() => <>
              {
                this.state.user &&
                <CharacterGenerator submit={this.submitCharacter} />
              }
            </>} />
            <Route path={["/characters/"]} exact component={this.characterIndexPage} />
            <Route path={["/characters/:id"]} exact component={this.characterShowPage} />
          </Switch>
        </Container>
      </div>
    );
  }
}


export default App;