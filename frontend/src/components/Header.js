import React, { useState } from 'react'
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

function Header() {

    const [q, setQ] = useState('')
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>HassanBlog</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/posts">
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex text-center ms-auto me-auto">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2 form-control-sm"
                        aria-label="Search"
                        id='search-input'
                        onChange={event => setQ(event.target.value)}
                    />
                    <Link to={`/search/${q}`}>
                        <Button variant="outline-success" className='btn-sm'>Search</Button>
                    </Link>
                </Form>
            </Container>
        </Navbar >
    )
}

export default Header
