import React from 'react'

export default function ScrollTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', function () {
        let scroll = document.querySelector('.scrollTop');
        scroll.classList.toggle('active', window.scrollY > 500)
    });

    return (
        <>
            <div className="scrollTop" onClick={scrollToTop}>
                <i className="fa-solid fa-angles-up" />
            </div>
        </>
    )
}
