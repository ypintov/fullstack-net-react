import React from 'react'
import { Segment, Container, Header, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return <Segment inverted textAlign='center' vertical className='masthead'>
        <Container text>
            <Header as='h1' inverted>
                <Icon name='food' />CookBook
            </Header>
            <Header as='h2' inverted content='Welcome back' />
            {/* TODO: Add routing */}
            <Button as={Link} to='/recipes'
                size='huge' inverted content='Go To Recipes' />
        </Container>
    </Segment>
}

export default HomePage
