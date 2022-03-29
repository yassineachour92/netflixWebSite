import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={show ? "nav" : "nav__black"}>
            <img className='nav__logo'
                src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png"
                alt="netflix_logo"
            />
        </div>
    )
}

export default Nav