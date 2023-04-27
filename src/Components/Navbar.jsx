import React from 'react'
import TopHeader from './TopHeader'
import { Container, Nav, NavbarBrand } from 'react-bootstrap'

export default function Navbar() {
    return (
        <div>
            <TopHeader />
            <header className="header">
                <Container>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <NavbarBrand href="#">
                            <img src="assets/img/logo-1.jpg" alt="" />
                        </NavbarBrand>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <Nav className="ms-auto">
                                <Nav.Item>
                                    <Nav.Link className="active" aria-current="page" href="/" id='index'>
                                        Home
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/about" id='about'>
                                        About us
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/courses" id='courses'>
                                        Courses
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/service" id='service'>
                                        Services
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/facility">
                                        Facility
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/team">
                                        Team
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/gallery">
                                        Gallery
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/contact">
                                        Contact
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </nav>
                </Container>
            </header>
        </div>
    )
}