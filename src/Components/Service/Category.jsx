import React from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
    return (
        <>
            <div className="our_category our_service pt-120 pb-120 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-3">
                            <div className="card">
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
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-3">
                            <div className="card">
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
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-3">
                            <div className="card">
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
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-3">
                            <div className="card">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
