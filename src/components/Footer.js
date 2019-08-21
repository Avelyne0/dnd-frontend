import React from 'react'
import { Link, Switch, Redirect } from 'react-router-dom'
import { Segment, Container, Grid, List, Header, Icon } from 'semantic-ui-react'
import {generateWhisper} from './utils/whisperGenerator'

export default function Footer() {
  return (
    <>
    <Segment inverted vertical style={{ padding: '3em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Sam' />
              <List link inverted>
              <List.Item as='a' href="https://github.com/Avelyne0"><Icon name="github"/>Github</List.Item>
                <List.Item as='a' href="https://www.linkedin.com/in/sam-barrie-98873b15a/"><Icon name="linkedin"/>Linkedin</List.Item>
                <List.Item as='a'></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Fede' />
              <List link inverted>
                <List.Item as='a' href="https://github.com/fedemcmac"><Icon name="github" />Github</List.Item>
                <List.Item as='a' href="https://www.linkedin.com/"><Icon name="linkedin"/>Linkedin</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted content='Pssst!'/>
               <p>"{generateWhisper().toLocaleUpperCase()}"</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    </>
  )
}
