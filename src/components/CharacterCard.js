import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function CharacterCard({ character }) {
  return (
    <Card>
      <Image
        src={character.img_url}
        wrapped ui={false}
      />
      <Card.Content >
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{character.alignment}</span>
        </Card.Meta>
        <Card.Description>
          <span className='date'>{character.gender} {character.race} {character.char_class}</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as={Link}
          to={'/characters/' + character.id}>
          Show More
                </Button>
      </Card.Content>
    </Card>


  )
}