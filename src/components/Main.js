import React from 'react'

export const Main = () => {
    return (
        <div className="container-flex about">
            <div className="row">
                <div className="about-content col-12 col-lg-6">
                <h3>Hello! I'm</h3>
                <h1>Manpreet Kaur<span>.</span></h1>
                <p>I like to turn ideas into websites.</p>
                <a type="button"  className="btn btn-light" href="/assets/images/Manpreet_Ceev.pdf">Resume <i class="fas fa-arrow-right"></i></a>
                </div>
                <div className="about-content col-12 col-lg-6 ">
                    <img className="about-img img-fluid" src="/assets/images/work.svg"></img>
                </div>
            </div>
            
        </div>
    )
}
