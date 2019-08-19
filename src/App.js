import React from 'react';
import CharacterGenerator from './components/CharacterGenerator';
import Header from './components/Header';
import './App.css';
import Navbar from './components/NavBar.js';
import API from './adapters/API';
import { Route, Switch, Redirect } from 'react-router-dom'
import CharacterShow from './components/CharacterShow';
import { Container } from 'semantic-ui-react'



class App extends React.Component {

  state = {
    user: null
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

  characterShowPage = (props) => {
    const selectedCharacter = this.state.characters.find(character => character.id === parseInt(props.match.params.id))
    if (!selectedCharacter) return <div>Loading character</div>
    if (!this.state.user) return <Redirect to="/login" />

    return <CharacterShow {...props} back={() => this.setState({ selectedCharacter: null })} {...selectedCharacter} />
  }

  render() {
    return (
      <div className="App">


        <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} />
<Container>
        {
          this.state.user &&
          <CharacterGenerator submit={this.submitCharacter} />
        }
        <Switch>
          <Route path={["/characters/:id"]} exact component={this.characterShowPage} />
        </Switch>
        </Container>
      </div>
    );
  }
}


export default App;