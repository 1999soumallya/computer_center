import React from 'react'

export default function ContactArea() {
    return (
        <>
            <div className="contact_area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 mb-30">
                            <div className="card">
                                <div className="contact_icon">
                                    <img src="assets/svg/map.svg" alt="" />
                                </div>
                                <div className="contact_info">
                                    <h3>Contact us</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                                        enim illum sint excepturi, optio ratione.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-30">
                            <div className="card">
                                <div className="contact_icon">
                                    <img src="assets/svg/phone.svg" alt="" />
                                </div>
                                <div className="contact_info">
                                    <h3>Call us</h3>
                                    <ul>
                                        <li>
                                            <a href="tel:">(000) 123 456 7890</a>
                                        </li>
                                        <li>
                                            <a href="tel:">(000) 123 456 7890</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-30">
                            <div className="card">
                                <div className="contact_icon">
                                    <img src="assets/svg/mail.svg" alt="" />
                                </div>
                                <div className="contact_info">
                                    <h3>Mail us</h3>
                                    <ul>
                                        <li>
                                            <a href="mailto:info@example.com">info@example.com</a>
                                        </li>
                                        <li>
                                            <a href="mailto:info@example.com">info@example.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
