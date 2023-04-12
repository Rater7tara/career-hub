import React from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar className='header' bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><h3>Dream Jobs</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="nav-bar m-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Details">Statistics</Nav.Link>
                        <Nav.Link href="/Applied">Applied Jobs</Nav.Link>
                        <Nav.Link href="/Blog">Blog</Nav.Link>

                    </Nav>

                    <Button variant="primary">Apply Now</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;