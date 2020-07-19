import React from 'react'

export const AboutMe = () => {
    return (
        <div className="container-fluid about-me">
            <div className="row ">
                
                <div className="col-12 col-md-4 about-me-content">
                    <img src="/assets/images/dp.svg" />
                </div>
                <div className="col-12 col-md-6 about-me-content">
                    <h1 className=" about-me-title">
                        GET TO KNOW ME!
                    </h1>
                    <p> I am a final year student pursuing Bachelor's of Technology in Computer 
                    Science. I am a web development and data science enthusiast. Currently, I am focusing on
                    improving my skills and become a better developer. I am a quick learner and always curious to learn about new technologies. I enjoy  the process of
                    learning and creating.Whenever I am not coding, I like to spend my time reading. </p>
                    <p className="icons-layout-about-me"> 
                        <span className="icons-about-me"><i className="far fa-file-code"></i> HTML5 </span>
                        <span className="icons-about-me"><i className="fab fa-css3-alt"></i> CSS3 </span>
                        <span className="icons-about-me"><i className="fab fa-js-square"></i> JavaScript</span>
                        <span className="icons-about-me"><i className="fab fa-react"></i> React</span>
                        <span className="icons-about-me"><i className="fab fa-node"></i> NodeJs/Express</span>
                        <span className="icons-about-me"><i className="fas fa-database"></i> MongoDB</span>
                        <span className="icons-about-me"><i className="fab fa-bootstrap"></i> Bootstrap4</span>
                        <span className="icons-about-me"><i className="fab fa-cuttlefish"></i>++</span>
                        <span className="icons-about-me"><i className="fas fa-code-branch"></i> Data Structures</span>
                        <span className="icons-about-me"><i class="fab fa-python"></i> Python </span>

                    </p>
                </div>
            </div>
        </div>
    )
}
