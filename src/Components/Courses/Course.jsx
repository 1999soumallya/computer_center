import React from 'react'
import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function Course() {
    return (
        <>
            <div className="our_course pt-120 pb-120">
                <Container>
                    <Row>
                        <Col sm={4} className="mb-20">
                            <Card>
                                <Card.Img src="assets/img/img-1.jpg" alt="" />
                                <div className="card_overley">
                                    <div className="course_info">
                                        <h4>Basic Computer Training</h4>
                                        <span> Duration: 6 month</span>
                                        <p>Computer Fundamental, MS Offic</p>
                                        <Link to={"#"} className="apply_btn">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={4} className="mb-20">
                            <Card>
                                <Card.Img src="assets/img/img-2.jpg" alt="" />
                                <div className="card_overley">
                                    <div className="course_info">
                                        <h4>Basic Computer Training</h4>
                                        <span> Duration: 6 month</span>
                                        <p>Computer Fundamental, MS Offic</p>
                                        <Link to={"#"} className="apply_btn">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={4} className="mb-20">
                            <Card>
                                <Card.Img src="assets/img/img-3.jpg" alt="" />
                                <div className="card_overley">
                                    <div className="course_info">
                                        <h4>Basic Computer Training</h4>
                                        <span> Duration: 6 month</span>
                                        <p>Computer Fundamental, MS Offic</p>
                                        <Link to={"#"} className="apply_btn">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={4} className="mb-20">
                            <Card>
                                <Card.Img src="assets/img/img-4.jpg" alt="" />
                                <div className="card_overley">
                                    <div className="course_info">
                                        <h4>Basic Computer Training</h4>
                                        <span> Duration: 6 month</span>
                                        <p>Computer Fundamental, MS Offic</p>
                                        <Link to={"#"} className="apply_btn">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={4} className="mb-20">
                            <Card>
                                <Card.Img src="assets/img/img-5.jpg" alt="" />
                                <div className="card_overley">
                                    <div className="course_info">
                                        <h4>Basic Computer Training</h4>
                                        <span> Duration: 6 month</span>
                                        <p>Computer Fundamental, MS Offic</p>
                                        <Link to={"#"} className="apply_btn">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={4} className="mb-20">
                            <Card>
                                <Card.Img src="assets/img/img-6.jpg" alt="" />
                                <div className="card_overley">
                                    <div className="course_info">
                                        <h4>Basic Computer Training</h4>
                                        <span> Duration: 6 month</span>
                                        <p>Computer Fundamental, MS Offic</p>
                                        <Link to={"#"} className="apply_btn">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
