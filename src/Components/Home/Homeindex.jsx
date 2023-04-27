import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Query from './Query'
import Course from './Course'
import Services from './Services'
import Team from './Team'
import Testimonial from './Testimonial'

export default function Homeindex() {
    return (
        <>
            <Banner />
            <Category />
            <Query />
            <Course />
            <Services />
            <Team />
            <Testimonial />
        </>
    )
}