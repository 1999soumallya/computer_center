import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <>
            <div className="banner">
                <OwlCarousel className='slider_area' loop items={1} margin={10} autoPlay={true} autoplaySpeed={1000} nav>
                    <div className="slider_items item">
                        <div className="slider_img">
                            <img src="assets/img/bg1.jpg" alt="bg1" className="img-fluid" />
                        </div>
                        <div className="slider_overley">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col md={12} sm={12} lg={8}>
                                        <div className="slider_content text-center">
                                            <h1>Best Learning our Center</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Consequatur praesentium minus magni vel dolore in voluptate
                                                eius, sit facere? Harum repudiandae nesciunt adipisci
                                                consequatur eligendi eum ipsa atque odit dignissimos.
                                            </p>
                                            <Link to={"#"} className="custom_btn">
                                                Learn More
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="slider_items item">
                        <div className="slider_img">
                            <img src="assets/img/bg1.jpg" alt="bg1" className="img-fluid" />
                        </div>
                        <div className="slider_overley">
                            <Container>
                                <Row className="row justify-content-center">
                                    <Col sm={12} md={12} lg={8}>
                                        <div className="slider_content text-center">
                                            <h1>Best Learning our Center</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Consequatur praesentium minus magni vel dolore in voluptate
                                                eius, sit facere? Harum repudiandae nesciunt adipisci
                                                consequatur eligendi eum ipsa atque odit dignissimos.
                                            </p>
                                            <Link to={"#"} className="custom_btn">
                                                Learn More
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="slider_items item">
                        <div className="slider_img">
                            <img src="assets/img/bg1.jpg" alt="bg1" className="img-fluid" />
                        </div>
                        <div className="slider_overley">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={8} md={12} sm={12}>
                                        <div className="slider_content text-center">
                                            <h1>Best Learning our Center</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Consequatur praesentium minus magni vel dolore in voluptate
                                                eius, sit facere? Harum repudiandae nesciunt adipisci
                                                consequatur eligendi eum ipsa atque odit dignissimos.
                                            </p>
                                            <Link to={"#"} className="custom_btn">
                                                Learn More
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </>
    )
}
