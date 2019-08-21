import React, { Component } from 'react'
import { Container, Button, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import API from '../adapters/API';
import CharacterShow from '../components/CharacterShow';

export default class CharacterShowContainer extends Component {

  state = {
    character: null
  }

  componentDidMount() {
    API.getCharacter(this.props.match.params.id)
      .then(character => this.setState({ character }))
  }

  render() {

    if (!this.state.character) {
      return <Container>
        <Dimmer active inverted>
          <Loader inverted content='Loading' />
        </Dimmer>
      </Container>
    }

    return (
      <>
        <CharacterShow {...this.state.character} />
        <Button as={Link} to="/characters" >Back to all</Button>
      </>
    )
  }
}
