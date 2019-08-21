import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
          <span className='date'>{character.char_class}</span>
        </Card.Meta>
        <Card.Description>
        {character.race}
      </Card.Description>
      <Button as={Link}
                to={'/characters/' + character.id}>
Show More
                </Button>
      </Card.Content>
    </Card>


  )
}