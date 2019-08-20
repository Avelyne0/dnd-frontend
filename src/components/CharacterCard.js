import React from 'react'
import { Card, Grid, Image, Segment, Button, Icon } from 'semantic-ui-react'


export default function CharacterCard({ character }) {
  return (
    <Card className="ui center aligned card">
      <Image
        src={character.img_url}
        wrapped ui={false}
      />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{character.charClass}</span>
        </Card.Meta>
        <Card.Description>
        {character.race}
      </Card.Description>
      </Card.Content>
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