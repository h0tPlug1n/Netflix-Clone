import React, { useState, useEffect } from 'react'
import "./nav.css"
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png" alt="netflix-logo" />

            <img className="nav-avatar" src="https://static.s123-cdn-static.com/uploads/5145686/400_607d7d5af1ab8.jpg" alt="my-profile" />
        </div>
    )
}

export default Nav
