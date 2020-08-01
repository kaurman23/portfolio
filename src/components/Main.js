import React from 'react';
import work from "../assets/images/work.svg"
import cv from "../assets/images/Manpreet_Kaur.pdf"

export const Main = () => {
    return (
        <div className="container-flex about">
            <div className="row">
                <div className="about-content col-12 col-md-6">
                <h3>Hello! I'm</h3>
                <h1>Manpreet Kaur<span>.</span></h1>
                <p>I like to turn ideas into websites.</p>
                <a type="button"  className="btn btn-light" href={cv} >Resume <i class="fas fa-arrow-right"></i></a>
                </div>
                <div className="about-content col-12 col-md-6 ">
                    <img className="about-img img-fluid" alt="manUnderShade" src={work} ></img>
                </div>
            </div>
            
        </div>
    )
}
