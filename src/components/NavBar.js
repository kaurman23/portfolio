import React from 'react'

export const NavBar = () => {
    return (
        <div className="container-fluid " id="navbar">
            <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#">More</a>
                        </li>
                        <li className="nav-item ">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        
                    </ul>
            </div>
            </nav>            
        </div>
    )
}
