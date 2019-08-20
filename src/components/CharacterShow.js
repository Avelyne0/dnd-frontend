import React, { Component } from "react";
import img_source from '../img_source.json';
import CharacterMain from "./CharacterMain";
import CharacterDetails from "./CharacterDetails";
import { Grid, Image, Segment, Button, Icon } from 'semantic-ui-react'

export default class CharacterShow extends Component {
  state = {
    showDetails: false
  };

  toggleShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  setCharacterImage = () => {
    const { race, charClass, gender } = this.props.character
    if (race && charClass && gender) {
      if (race.toLowerCase().includes("genasi")) {
        return img_source["Genasi"][race.toLowerCase().split(' ').join('-') + "-" + gender.toLowerCase()]
      } else {
        const superRace = Object.keys(img_source).find(r => race.toLowerCase().includes(r.toLowerCase()))
        return img_source[superRace][charClass.toLowerCase() + "-" + gender.toLowerCase()]
      }
    } else {
      return
    }
  }

  render() {
    let { character } = this.props;
    return (
      <div>
        <Segment style={{ padding: '8em 0em' }} vertical>
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
                    {this.state.showDetails ? (
                      <CharacterDetails character={character} />
                    ) : (
                        <CharacterMain character={character} />
                      )}
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src={this.setCharacterImage()} />
                <Segment style={{ padding: '1em 0em' }} vertical>
                <Button.Group size='huge' >
                <Button color='google plus' onClick={this.toggleShowDetails}>
                  <Icon name='d and d' />
                  {this.state.showDetails ? "Back" : "Show Details"}
                </Button>
                <Button>
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

