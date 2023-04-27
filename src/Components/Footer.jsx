import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <div className="copyright">
                                <p>Copyright © 2023 All Rights Reserved.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className="footer_link">
                                <Link to="/">Home</Link>
                                <Link to="/about">About us</Link>
                                <Link to="/courses">Courses</Link>
                                <Link to="/service">Services</Link>
                                <Link to="/facility">Facility</Link>
                                <Link to="/team">Team</Link>
                                <Link to="/gallery">Gallery</Link>
                                <Link to="/contact">Contact</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </>
    )
}
