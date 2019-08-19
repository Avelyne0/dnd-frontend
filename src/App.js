import React from 'react';
import './App.css';
import CharacterGenerator from './components/CharacterGenerator';
import Header from './components/Header';
import './App.css';
import Navbar from './components/NavBar.js';
import API from './adapters/API';


class App extends React.Component {

  state = {
    user: undefined
  }

  componentDidMount() {
    API.validateUser()
      .then(user => {
        this.setState({ user })
      })
  }

  signUp = user => {
    API.signUp(user)
      .then(user => this.setState({ user }))
  }

  logIn = user => {
    API.logIn(user)
      .then(user => this.setState({ user }))
  }

  logOut = () => {
    API.clearToken()
    this.setState({ user: undefined })
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

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} />
        {
          this.state.user &&
          <CharacterGenerator errors={this.state.errors} submit={this.submitCharacter} />
        }
        {
          this.state.user && this.state.user.characters.length > 0 && this.state.user.characters.map(p => <div>{p.title}</div>)
        }
        <Header />
        <CharacterGenerator />
      </div>
    );
  }
}


export default App;