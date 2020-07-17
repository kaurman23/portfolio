import React from 'react'

export const ProjectItem = (props) => {
    return (
        <div className="project-item row">
            <div className="col-12 col-lg-5 project-item-img">
                <img className="shadow img-fluid" src="/assets/images/Expense.png" ></img>
            </div>
            <div className="col-12 col-lg-7 project-desc ">
                <div>
                    <h4 className="project-item-title">Expense Tracker</h4>
                    <p>A web application which lets you keep a track of your daily expenses incurred. Insert and Delete expenses easily.</p>
                    <p><span className="icons"><i class="fab fa-react"></i> React</span>
                    <span className="icons"><i class="fab fa-node"></i> NodeJs/Express</span>
                    <span className="icons"><i class="fas fa-database"></i> MongoDB</span></p>
                        <button type="button" class="btn  btn-primary"><i class="fas fa-link"></i> Live</button>
                        <button type="button" class="btn  btn-primary"><i class="fab fa-github"></i> Source Code</button>
                </div>
            </div>
        </div>
    )
}
