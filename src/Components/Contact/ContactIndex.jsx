import React from 'react'
import BreadCumb from '../Courses/BreadCumb'
import ContactArea from './ContactArea'
import ContactForm from './ContactForm'
import ContactMapArea from './ContactMapArea'

export default function ContactIndex() {
    return (
        <>
            <BreadCumb />
            <ContactArea />
            <ContactForm />
            <ContactMapArea />
        </>
    )
}
