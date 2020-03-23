import React from 'react';
import { Menu, Container, Button, Image, Dropdown, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <Icon name='food' />CookBook
                </Menu.Item>
                <Menu.Item name='Recipes' as={Link} to='/recipes' />
                <Menu.Item>
                    <Button color='pink' content='Create Recipe'
                        as={Link} to='/createRecipe' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Image avatar spaced='right' src='/assets/user.png' />
                    <Dropdown pointing='top left'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='My Profile' icon='user' />
                            <Dropdown.Item text='Logout' icon='log out' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
