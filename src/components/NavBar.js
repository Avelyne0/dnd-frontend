import React from 'react'
import {
  Button,
  Menu,
  Segment,
  Header,
  Icon
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Navbar = ({ home, user, logOut }) => {
  return (

    <Segment
      inverted
      vertical
    >
      <Menu>

        <Menu.Item onClick={home}>
          <Header as='h1' textAlign='bottom'><Icon huge name="d and d icon" />Bardic Inspiration</Header>
        </Menu.Item>
        {
          user ? <>
            <Menu.Item
              as={Link}
              to='/characters/'
            >
              <Header as='h4' textAlign='bottom'>
                All Characters
                  </Header>
            </Menu.Item>
            <Menu.Item position='right'>
              <Button color='google plus' onClick={logOut}>Log out</Button>
            </Menu.Item>
          </> : null
        }

      </Menu>
    </Segment>

  )
}

export default Navbar

