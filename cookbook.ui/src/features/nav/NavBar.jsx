import React from 'react'
import { Menu, Container, Button, Image, Dropdown, Icon } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../app/store/actions/authActions'

const mapState = (state) => ({
    currentUser: state.auth.currentUser
})

const actions = {
    logout
}

const NavBar = ({ currentUser, logout }) => {
    return (
        <Menu fixed="top" inverted>
            <Container>
                <Menu.Item header as={Link} to="/">
                    <Icon name="food" /> CookBook
        </Menu.Item>
                <Menu.Item name="Recipes" as={Link} to="/recipes" />
                <Menu.Item>
                    <Button as={NavLink} to="/createRecipe" color="pink" content="Create Recipe" />
                </Menu.Item>
                <Menu.Item position="right">
                    <Image avatar spaced="right" src={currentUser.image || '/assets/user.png'} />
                    <Dropdown pointing="top left" text={currentUser.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item text="My Profile" icon="user" as={Link} to={`/profile/${currentUser.userName}`} />
                            <Dropdown.Item text="Logout" icon="log out" onClick={logout} />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

NavBar.propTypes = {
    currentUser: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

export default connect(mapState, actions)(NavBar)
