import React from 'react'
import UserForm from './UserForm'
import {
  Button,
  Container,
  Header,
  Icon,
  Grid
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default function LandingPage({ user, signUp, logIn }) {
  return (<>
        
        <Container text style={{ padding: '4em 0em' }}>
    <Header as='h2'>Welcome</Header>
    <p>
      Thinking of a new character in D&D is pretty hard right?
    </p>
    <p>
      This is where Bardic Inspiration comes in!
    </p>
    <p>
      {user ? 'Hit the begin button below' : 'Log in or sign up'}  and start randomizing a selection of characters for you to save for you to draw your Inspiration from.
    </p>

    {
      user ? <>
    <Button
         className='huge'
          as={Link}
          to='/random/'
        >
          <Icon name='d and d' />Be Inspired!
        </Button>
      </> : <>
          <Grid columns={2}>
            <Grid.Column>
                <UserForm submit={signUp} header={'Sign up'} />
            </Grid.Column>
            <Grid.Column>
                <UserForm submit={logIn} header={'Log in'} />
            </Grid.Column>
          </Grid>
        </>
    }
  </Container>
  </>
  )
}
