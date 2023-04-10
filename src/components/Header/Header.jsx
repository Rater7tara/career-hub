import React from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar className='container' bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><h3>Dream Jobs</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Statistics</Nav.Link>
                        <Nav.Link href="#action3">Blog</Nav.Link>

                    </Nav>

                    <Button variant="primary">Apply Now</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;