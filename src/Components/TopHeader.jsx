import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function TopHeader() {
    return (
        <div className="topbar">
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className="topbar_left">
                            <ul>
                                <li>
                                    <a href="tel:+91 123 456 789">
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        +91 123 456 789
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:example@gmail.com">
                                        <i className="fa fa-envelope-o" aria-hidden="true" />
                                        example@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="topbar_social">
                            <Link to={"#"}>
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </Link>
                            <Link to={"#"}>
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </Link>
                            <Link to={"#"}>
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </Link>
                            <Link to={"#"}>
                                <i className="fa fa-google-plus" aria-hidden="true" />
                            </Link>
                            <Link to={"#"}>
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
