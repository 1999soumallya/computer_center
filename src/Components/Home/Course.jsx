import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Course() {
    return (
        <>
            <div class="our_course pt-120 pb-120">
                <Container>
                    <div class="heading text-center mb-50">
                        <h2>Our <span>courses</span></h2>
                    </div>
                    <Row>
                        <Col sm={4} class="mb-20">
                            <Card>
                                <Card.Img src='assets/img/img-1.jpg' alt='' />
                                <div class="card_overley">
                                    <div class="course_info">
                                        <h4>Basic Computer Training</h4>
                                        <span> Duration: 6 month</span>
                                        <p>Computer Fundamental, MS Offic</p>
                                        <Link to={"#"} class="apply_btn">Apply Now</Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={4} class="mb-20">
                            <Card>
                                <Card.Img src="assets/img/img-2.jpg" alt="" />
                                <div class="card_overley">
                                    <div class="course_info">
                                        <h4>Basic Computer Training</h4>
                                        <span> Duration: 6 month</span>
                                        <p>Computer Fundamental, MS Offic</p>
                                        <Link to={"#"} class="apply_btn">Apply Now</Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={4} class="mb-20">
                            <Card>
                                <Card.Img src="assets/img/img-3.jpg" alt="">
                                </Card.Img>
                                <div class="card_overley">
                                    <div class="course_info">
                                        <h4>Basic Computer Training</h4>
                                        <span> Duration: 6 month</span>
                                        <p>Computer Fundamental, MS Offic</p>
                                        <Link to={"#"} class="apply_btn">Apply Now</Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={4} class="mb-20">
                            <Card>
                                <Card.Img src="assets/img/img-4.jpg" alt="" />
                                <div class="card_overley">
                                    <div class="course_info">
                                        <h4>Basic Computer Training</h4>
                                        <span> Duration: 6 month</span>
                                        <p>Computer Fundamental, MS Offic</p>
                                        <Link to={"#"} class="apply_btn">Apply Now</Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={4} class="mb-20">
                            <Card>
                                <Card.Img src="assets/img/img-5.jpg" alt="" />
                                <div class="card_overley">
                                    <div class="course_info">
                                        <h4>Basic Computer Training</h4>
                                        <span> Duration: 6 month</span>
                                        <p>Computer Fundamental, MS Offic</p>
                                        <Link to={"#"} class="apply_btn">Apply Now</Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={4} class="mb-20">
                            <Card>
                                <Card.Img src="assets/img/img-6.jpg" alt="" />
                                <div class="card_overley">
                                    <div class="course_info">
                                        <h4>Basic Computer Training</h4>
                                        <span> Duration: 6 month</span>
                                        <p>Computer Fundamental, MS Offic</p>
                                        <Link to={"#"} class="apply_btn">Apply Now</Link>
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
