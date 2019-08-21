import React from 'react';
import CharacterGenerator from './components/CharacterGenerator';
import './App.css';
import Navbar from './components/NavBar.js';
import API from './adapters/API';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import CharacterContainer from './containers/CharacterContainer';
import CharacterShowContainer from './containers/CharacterShowContainer';
import LandingPage from './components/LandingPage';


class App extends React.Component {

  state = {
    user: null,
    characters: [],
    selectedCharacter: null
    // characters: Array.apply(null, Array(30)).map(() => generateCharacter()),
  }

  componentDidMount() {
    API.getCharacters()
      .then(characters => this.setState({ characters }))
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
    API.postCharacter(character, this.state.user)
      .then(({ character }) => this.setState({ characters: [...this.state.characters, character] }))
      .catch(errorPromise => {
        errorPromise
          .then(data => {
            this.setState({ errors: data.errors })
          })
      })
  }

  sortCharactersArray = (array) => array.sort((charA, charB) => charA.age - charB.age)


  characterIndexPage = (props) => {
    const characters = this.sortCharactersArray(this.state.characters)
    return <CharacterContainer
      {...props}
      characters={characters}
    />
  }

  characterShowPage = (props) => {
    const selectedCharacter = this.state.characters.find(character => character.id === parseInt(props.match.params.id))
    if (!selectedCharacter) return <div>Loading Character</div>
    if (!this.state.user) return <Redirect to="/login" />

    return <CharacterShowContainer {...props} deleteCharacter={() => this.deleteCharacter(selectedCharacter.id)} {...selectedCharacter} />
  }


  deleteCharacter = (id) => {
    API.deleteCharacter(id)
    .then(this.setState({characters: this.state.characters.filter(character => character.id !== id)}))
    .then(this.props.history.push('/characters'))
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
                <LandingPage user={this.state.user} signUp={this.signUp} logIn={this.logIn}/>
              }
            </>} />
            <Route path={["/random"]} exact component={() => <>
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