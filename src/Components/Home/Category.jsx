import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Category() {
    return (
        <>
            <div className="our_category">
                <Container>
                    <Row>
                        <Col lg={3} md={6} sm={3}>
                            <Card>
                                <div className="category_icon">
                                    <img src="assets/svg/desktop.svg" alt="desktop" />
                                </div>
                                <div className="category_content">
                                    <h4>Computer &amp; Vocational Course</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatibus architecto laborum soluta
                                    </p>
                                    <Link to={"#"} className="apply_btn">
                                        Apply Now
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} sm={3}>
                            <Card>
                                <div className="category_icon">
                                    <img src="assets/svg/headphone.svg" alt="headphone" />
                                </div>
                                <div className="category_content">
                                    <h4>Computer &amp; Vocational Course</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatibus architecto laborum soluta
                                    </p>
                                    <Link to={"#"} className="apply_btn">
                                        Apply Now
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} sm={3}>
                            <Card>
                                <div className="category_icon">
                                    <img src="assets/svg/consultency.svg" alt="consultency" />
                                </div>
                                <div className="category_content">
                                    <h4>Counseling &amp; Consultency</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatibus architecto laborum soluta
                                    </p>
                                    <Link to={"#"} className="apply_btn">
                                        Apply Now
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} sm={3}>
                            <Card>
                                <div className="category_icon">
                                    <img src="assets/svg/mouse.svg" alt="desktop" />
                                </div>
                                <div className="category_content">
                                    <h4>Computer &amp; Vocational Course</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatibus architecto laborum soluta
                                    </p>
                                    <Link to={"#"} className="apply_btn">
                                        Apply Now
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
