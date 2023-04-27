import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Services() {
    return (
        <>
            <div className="counter_section">
                <Container>
                    <Row>
                        <Col sm={3}>
                            <div className="counter_content text-center">
                                <div className="counter_icon">
                                    {/* <i class="fa fa-home" aria-hidden="true"></i> */}
                                </div>
                                <div className="counter_info">
                                    <h3 className="counter">215</h3>
                                    <h5>Happy Students</h5>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="counter_content text-center">
                                <div className="counter_icon">
                                    {/* <i class="fa fa-line-chart" aria-hidden="true"></i> */}
                                </div>
                                <div className="counter_info">
                                    <h3 className="counter">2150</h3>
                                    <h5>Happy Students</h5>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="counter_content text-center">
                                <div className="counter_icon">
                                    {/* <i class="fa fa-truck" aria-hidden="true"></i> */}
                                </div>
                                <div className="counter_info">
                                    <h3 className="counter">21</h3>
                                    <h5>Class Room</h5>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="counter_content text-center">
                                <div className="counter_icon">
                                    {/* <i class="fa fa-desktop" aria-hidden="true"></i> */}
                                </div>
                                <div className="counter_info">
                                    <h3 className="counter">100</h3>
                                    <h5>Happy Students</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
