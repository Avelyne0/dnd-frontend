import React, { Component } from "react";
import { Dimmer, Container, Loader, Grid, Image, Segment, Button, Icon } from 'semantic-ui-react'
import CharacterDetails from './CharacterDetails'
import CharacterMain from './CharacterMain'


export default class CharacterShow extends Component {
  state = {
    showDetails: false
  };

  toggleShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {

    if (this.props.loading) {
      return <Container>
        <Dimmer active inverted>
          <Loader inverted content='Loading' />
        </Dimmer>
      </Container>
    }

    let { character } = this.props;
    return (
      <div>
        <Segment style={{ padding: '4em 0em' }} vertical>
          <Button onClick={this.props.resetCharacter}>
            <Icon name='d and d' />
            Reset
                </Button>
          <Grid container stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <div className="content">
                  <h4 className="header">{character.name}</h4>
                  <div className="description">
                    {this.state.showDetails ? 
                    <CharacterDetails character={character}/>
                       : <CharacterMain character={character}/>
                    }
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src={character.img_url} />
                <Segment style={{ padding: '1em 0em' }} vertical>
                  <Button.Group size='huge' >
                    <Button color='google plus' onClick={this.toggleShowDetails}>
                      <Icon name='d and d' />
                      {this.state.showDetails ? "Back" : "Show Details"}
                    </Button>
                    <Button onClick={this.props.save}>
                      <Icon name='d and d' />
                      Save
                </Button>
                  </Button.Group>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

