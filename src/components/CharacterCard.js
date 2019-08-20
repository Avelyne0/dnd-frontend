import React from 'react'
import img_source from '../img_source.json';
import CharacterMain from "./CharacterMain";
import CharacterDetails from "./CharacterDetails";
import { Card, Grid, Image, Segment, Button, Icon } from 'semantic-ui-react'


export default function CharacterCard({character}) {
  return (
    <Card className="ui center aligned card">
    <div>{character.name}</div>
    <div>{character.age}</div>
    <div>{character.race}</div>
        </Card> 
  )
}




{/* <div className="image">
            <img
              src={this.setCharacterImage()}
              alt="temp"
            />
          </div>
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
          <div className="extra content" onClick={this.toggleShowDetails}>
            <i className="d and d icon">
              {this.state.showDetails ? "Back" : "Show Details"}
            </i>
          </div> */}