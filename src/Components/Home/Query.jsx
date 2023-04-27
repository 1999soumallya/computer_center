import React from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Query() {
    return (
        <>
            <div className="query_section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} md={12} sm={12}>
                            <div className="news-section">
                                <img src="http://www.aiintte.in/wp-content/uploads/2021/11/thumbtack-6.png" alt='' />
                                <h3>NOTICE BOARD</h3>'
                                <marquee scrolldelay="0.3" direction="up" style={{ height: "auto" }}>
                                    <p>
                                        <i className="fa fa-star fa-spin" style={{ color: "#fffb00" }} />
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Temporibus suscipit repudiandae praesentium, rem, quisquam neque
                                        vitae error eveniet exercitationem maiores nihil ex a ab doloribus
                                        fuga enim unde voluptas sit!
                                    </p>
                                    <p>
                                        <Link href="" className="btn btn-danger">
                                            <i className="fa fa-star fa-spin" style={{ color: "#fffb00" }} />
                                            Click here for 1st Semester Exam Schedule (2021-23)
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="" className="btn btn-danger">
                                            CLICK HERE FOR *IMPORTANT EXAMINATION NOTICES
                                        </Link>
                                    </p>
                                    <p>
                                        <i className="fa fa-check" />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                        repellendus dolor magnam, sint dolores itaque dolore? Nulla
                                        necessitatibus impedit consequatur aspernatur sapiente. Magni
                                        architecto, quidem praesentium adipisci commodi ab accusantium!
                                    </p>
                                    <p>
                                        <i className="fa fa-check" /> ADMISSIONS OPEN FOR NURSERY TEACHER
                                        TRAINING
                                    </p>
                                    <p>
                                        <i className="fa fa-check" /> HURRY!!! LAST DATE OF FOR SUBMISSION
                                        10 MAY 2022
                                    </p>
                                    <p>
                                        <i className="fa fa-check" /> Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Qui repellat laborum, magni minima
                                        deserunt temporibus odio placeat explicabo dolor alias optio
                                        labore reprehenderit hic, non corrupti molestias? Explicabo magni
                                        rerum, cum doloremque libero doloribus consequatur cumque ad amet
                                        ea facere vel eveniet illo inventore itaque veniam illum
                                        cupiditate deleniti ipsa.
                                    </p>
                                    <ol>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Voluptate, iste.
                                        </li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                                    </ol>
                                </marquee>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className="enquiry_content">
                                <div className="heading text-left mb-50">
                                    <h2>
                                        Quick <span>Enquiry</span>
                                    </h2>
                                </div>
                                <Form action="">
                                    <Form.Select aria-label="Default select example">
                                        <option selected="">Franchise</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </Form.Select>
                                    <InputGroup>
                                        <Form.Control type="text" name="" id="" placeholder="Your Name" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Form.Control type="email" name="" id="" placeholder="Your Email-Id" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Form.Control type="number" name="" id="" className="form-control" placeholder="Your Mobile Number" />
                                    </InputGroup>
                                    <Form.Select aria-label="Default select example">
                                        <option selected="">--State Name--</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </Form.Select>
                                    <Form.Control as={"textarea"} name="" id="" rows={5} className="form-control" placeholder="Your Address" defaultValue={""} />
                                    <Form.Control as={"textarea"} name="" id="" rows={5} className="form-control" placeholder="Your Message" defaultValue={""} />
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
