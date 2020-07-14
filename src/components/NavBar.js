import React from 'react'

export const NavBar = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-dark navbar-expand row">
                <a className="navbar-brand">Home</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">More</a>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}
