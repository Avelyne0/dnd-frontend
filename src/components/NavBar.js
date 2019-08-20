import React from 'react'
import UserForm from './UserForm'
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'


const Navbar = ({ home, user, signUp, logIn, logOut }) => {
  return (
    <Visibility
      once={false}
    >
      <Segment
        inverted
        textAlign='center'
        vertical
      >
        <Menu>
          <Container>
            <Menu.Item onClick={home}>
              <i className="d and d icon huge" /><h1>Bardic Inspiration</h1>
            </Menu.Item>
            <Menu.Item position='right'>
              {
                user ? <Button color='google plus' onClick={logOut}>Log out</Button> : <>
                  <Menu.Item>
                    <UserForm submit={signUp} header={'Sign up'} />
                  </Menu.Item>
                  <Menu.Item>
                    <UserForm submit={logIn} header={'Log in'} />
                  </Menu.Item>
                </>
              }
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    </Visibility>
  )
}

export default Navbar

