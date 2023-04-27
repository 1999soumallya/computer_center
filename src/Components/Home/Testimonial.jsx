import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'

export default function Testimonial() {
    return (
        <>
            <div className="testimonial pt-120 pb-120">
                <div className="container">
                    <div className="heading text-center mb-50">
                        <h2>
                            Our <span>Student Say</span>
                        </h2>
                    </div>
                    <ReactOwlCarousel className='testimonial_slider' loop items={1} margin={10} autoPlay={true} autoplaySpeed={1000}>
                        <div className="testimonial_items text-center item">
                            <div className="testimonila_img">
                                <img src="assets/img/team-1.jpg" alt="" />
                            </div>
                            <div className="testimonila_info">
                                <h4>Sibnath Das</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                                    praesentium officia voluptatibus distinctio consectetur. Dolorem,
                                    iste sed. Modi ipsam perspiciatis corrupti fugiat! Necessitatibus
                                    tempora molestiae, sint ab expedita libero illo?
                                </p>
                            </div>
                        </div>
                        <div className="testimonial_items text-center item">
                            <div className="testimonila_img">
                                <img src="assets/img/team-1.jpg" alt="" />
                            </div>
                            <div className="testimonila_info">
                                <h4>Sibnath Das</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                                    praesentium officia voluptatibus distinctio consectetur. Dolorem,
                                    iste sed. Modi ipsam perspiciatis corrupti fugiat! Necessitatibus
                                    tempora molestiae, sint ab expedita libero illo?
                                </p>
                            </div>
                        </div>
                        <div className="testimonial_items text-center item">
                            <div className="testimonila_img">
                                <img src="assets/img/team-1.jpg" alt="" />
                            </div>
                            <div className="testimonila_info">
                                <h4>Sibnath Das</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                                    praesentium officia voluptatibus distinctio consectetur. Dolorem,
                                    iste sed. Modi ipsam perspiciatis corrupti fugiat! Necessitatibus
                                    tempora molestiae, sint ab expedita libero illo?
                                </p>
                            </div>
                        </div>
                        <div className="testimonial_items text-center item">
                            <div className="testimonila_img">
                                <img src="assets/img/team-1.jpg" alt="" />
                            </div>
                            <div className="testimonila_info">
                                <h4>Sibnath Das</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                                    praesentium officia voluptatibus distinctio consectetur. Dolorem,
                                    iste sed. Modi ipsam perspiciatis corrupti fugiat! Necessitatibus
                                    tempora molestiae, sint ab expedita libero illo?
                                </p>
                            </div>
                        </div>
                    </ReactOwlCarousel>
                </div>
            </div>
        </>
    )
}
