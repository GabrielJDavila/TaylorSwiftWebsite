
import { useState } from "react";

export default function Header() {
    const [openNav, setOpenNav] = useState(false)

    const menuStateStyles = {
        width: openNav ? "100%" : "0",
        height: openNav ? "100vh" : "0"
    }

    function flipMenuState() {
        setOpenNav(prev => !prev)
    }

    return (
        <header className="site-header">
            <div className="header-and-ham-container">
                <span onClick={flipMenuState} class="material-symbols-outlined nav-open">
                    menu
                </span>
                <h1 className="header-title">TAYLOR SWIFT</h1>
            </div>
            
            <div className="mobile-nav-container" style={menuStateStyles}>

                <div className="initials-container">
                    <h1 className="initials">TS</h1>
                </div>
                <div className="mobile-nav-links-container">
                    <span onClick={flipMenuState} class="material-symbols-outlined nav-close">
                        close
                    </span>
                    <nav className="mobile-nav-links">
                        <a className="mobile-nav-link">Home</a>
                        <a className="mobile-nav-link">Tour Dates</a>
                        <a className="mobile-nav-link">Projects</a>
                        <a className="mobile-nav-link">Sign Up</a>
                    </nav>
                </div>

            </div>
        </header>
    )
}