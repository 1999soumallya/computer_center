import React from 'react'
import { Link } from "react-router-dom"

export default function BreadCumb() {
    return (
        <>
            <div className="breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 txtc  text-center ccase">
                            <div className="title">
                                <h2>Team</h2>
                            </div>
                            <div className="breadcumb-inner">
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-angle-right" />
                                    </li>
                                    <li>
                                        <span className="current">Our Team</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
