import React from 'react';
import { IconContext } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs} from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaCodeBranch} from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import me from '../assets/images/dp.svg';


export const AboutMe = () => {
    return (
        <div id="aboutme" className="container-fluid about-me">
            <div className="row ">
                
                <div className="col-12 col-md-4 about-me-content">
                    <img src={me} />
                    
                </div>
                <div className="col-12 col-md-6 about-me-content">
                    <h1 className=" about-me-title">
                        GET TO KNOW ME!
                    </h1>
                    <p> I am a final year student pursuing Bachelor's of Technology in Computer 
                    Science. I am an avid learner and always curious to learn about new technologies. I enjoy  the process of
                    learning and building stuff. Whenever I am not coding, I like to spend my time reading books. </p>
                    <IconContext.Provider value={ {size: '20px'}}>
                    <p className="icons-layout-about-me"> 
                        <span className="icons-about-me"><AiFillHtml5 /> HTML5 </span>
                        <span className="icons-about-me"><FaCss3Alt /> CSS3 </span>
                        <span className="icons-about-me"><FaJs /> JavaScript</span>
                        <span className="icons-about-me"><FaReact /> React</span>
                        <span className="icons-about-me"><FaNode /> NodeJs/Express</span>
                        <span className="icons-about-me"><DiMongodb /> MongoDB</span>
                        <span className="icons-about-me"><FaBootstrap /> Bootstrap4</span>
                        <span className="icons-about-me"><i className="fab fa-cuttlefish"></i>++</span>
                        <span className="icons-about-me"><FaCodeBranch /> Data Structures</span>
                        <span className="icons-about-me"><FaPython /> Python </span>

                    </p>

                    </IconContext.Provider>
                    
                </div>
            </div>
        </div>
    )
}
