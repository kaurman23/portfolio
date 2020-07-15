import React from 'react'

export const NavBar = () => {
    return (
        <>
        <img className="triangle" src="/assets/images/triangle.svg" />

        <div className="container-fluid " id="navbar">
            <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            
                    <ul className="navbar-nav text-align-center">
                        <li className="nav-item ">
                            <a className="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link active" href="#">About Me</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link active" href="#">Projects</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link active" href="#">More</a>
                        </li>
                        <li className="nav-item ">
                            <a class="nav-link active" href="#">Contact</a>
                        </li>
                        
                    </ul>
            </div>
            </nav> 
        </div>
        
        </>
    )
}
