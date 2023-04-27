import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
    return (
        <>
            <div className="about_section pt-120 pb-120">
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className="about_content">
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but
                                    the majority have suffered alteration in some form, by injected
                                    humour, or randomised words which don't look even slightly
                                    believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden in the
                                    middle of text. All the Lorem Ipsum generators on the Internet tend
                                    to repeat predefined chunks as necessary, making this the first true
                                    generator on the Internet.
                                </p>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The point
                                    of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed to using 'Content here, content
                                    here', making it look like readable English. Many desktop publishing
                                    packages and web page editors now use Lorem Ipsum as their defaul.
                                </p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="about_img">
                                <img src="assets/img/img-1.jpg" className="img-fluid" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
