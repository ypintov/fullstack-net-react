import React from 'react';
import {Menu, Container, Button, Image, Dropdown} from 'semantic-ui-react';

const NavBar = () => {
    return (
        <Menu>
            <Container>
                <Menu.Item header>
                    <img src='' alt='' /> CookBook
                </Menu.Item>
                <Menu.Item name='Recipes'/>
                <Menu.Item>
                    <Button color='pink' content='Create Recipe'/>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Image avatar spaced='right'/>
                    <Dropdown pointing='top left'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='My Profile' icon='user'/>
                            <Dropdown.Item text='Logout' icon='log out'/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
