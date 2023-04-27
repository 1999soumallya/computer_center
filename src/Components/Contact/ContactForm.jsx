import React from 'react'

export default function ContactForm() {
    return (
        <>
            <div className="form_area pb-120">
                <div className="container">
                    <div className="heading text-center pb-50">
                        <h2>
                            Send Your <span> Feedback To Us</span>
                        </h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-8">
                            <form action="">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="input-group mb-30">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Full Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input-group mb-30">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Full Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input-group mb-30">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Full Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Full Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="input-group">
                                            <textarea
                                                name=""
                                                id=""
                                                rows={5}
                                                className="form-control"
                                                placeholder="Your Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <button type="button" className="send_btn btn-danger text-white">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
