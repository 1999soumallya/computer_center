import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"

export default function BreadCumb() {
    return (
        <>
            <div className="breadcumb-area">
                <Container>
                    <Row>
                        <Col md={12} className="txtc text-center ccase">
                            <div className="title">
                                <h2>About us</h2>
                            </div>
                            <div className="breadcumb-inner">
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-angle-right" />
                                    </li>
                                    <li>
                                        <span className="current">About us</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
