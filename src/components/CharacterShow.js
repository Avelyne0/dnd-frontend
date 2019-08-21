import React, { Component } from "react";
import { Dimmer, Container, Loader, Grid, Image, Segment, Button, Icon, Header } from 'semantic-ui-react'


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
          {
            character.id ? null :
              <Button onClick={this.props.resetCharacter}>
                <Icon name='d and d' />
                Reset
          </Button>
          }
          <Grid container stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <div className="content">
                  <Container text>
                    <Header as='h2'>{character.name}</Header>
                    {this.state.showDetails ? <div>
                      <Header as='h3'>Stats:</Header>
                      <table id="table" className="ui very basic collapsing celled table">
                        <tbody>
                          <tr>
                            <td><h4 className="ui image header">STR</h4></td>
                            <td>{character.STR}</td>

                            <td><h4 className="ui image header">DEX</h4></td>
                            <td>{character.DEX}</td>
                          </tr>

                          <tr>
                            <td><h4 className="ui image header">CON</h4></td>
                            <td>{character.CON}</td>

                            <td><h4 className="ui image header">INT</h4></td>
                            <td>{character.INT}</td>
                          </tr>

                          <tr>
                            <td><h4 className="ui image header">WIS</h4></td>
                            <td>{character.WIS}</td>

                            <td><h4 className="ui image header">CHA</h4></td>
                            <td>{character.CHA}</td>
                          </tr>
                        </tbody>
                      </table>
                      {
                        Object.values(character.additionalNotes)[0].map(note => <div key={note}><div> {note}<br /></div></div>)
                      }
                      <p>{character.backgroundFeature}</p>
                    </div>
                      :
                      <div>
                        <p>Gender: {character.gender}</p>
                        <p>Class: {character.charClass}</p>
                        <p>Race: {character.race}</p>
                        <p>Age: {character.age}</p>
                        <p>Height: {character.height}</p>
                        <p>Weight: {character.weight}</p>
                        <p>Eyes: {character.eyes}</p>
                        <p>Skin: {character.skin}</p>
                        <p>Alignment: {character.alignment}</p>
                        <p>Background: {character.backgroundName}</p>
                        <p>Flaws: {character.flaws}</p>
                        <p>Bonds: {character.bonds}</p>
                        <p>Ideals: {character.ideals}</p>
                        <p>Personality traits: {character.personalityTraits}</p>
                      </div>
                    }
                  </Container>
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
                    <Button onClick={this.props.onClickHandler}>
                      <Icon name='d and d' />
                      {character.id ? 'Delete' : 'Save'}
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

