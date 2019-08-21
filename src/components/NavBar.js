import React from 'react'
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Navbar = ({ home, user, logOut }) => {
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
            <Menu.Item onClick={home  }>
              <i className="d and d icon huge" /><h1>Bardic Inspiration</h1>
            </Menu.Item>
            {
              user ? <>
                <Menu.Item 
                as={Link}
                to='/characters/'
                >
                  All Characters
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button color='google plus' onClick={logOut}>Log out</Button>
                </Menu.Item>
              </> : null
            }
          </Container>
        </Menu>
      </Segment>
    </Visibility>
  )
}

export default Navbar

