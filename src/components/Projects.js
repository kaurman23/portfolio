import React from 'react';
import { IconContext } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs} from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
    return (
        <>
        <IconContext.Provider value={ {size: '20px'}}>

            <div className="project-svj">
                <img src="/assets/images/design2.svg" className="upper-svj" ></img>
            </div>
            <div className="text-center project">
                <h1 className="project-title"><span>P</span>rojects</h1>
            </div>
            <div className="project-content">
                <div className="project-item row">
                    <div className="col-12 col-lg-5 project-item-img">
                        <img className="shadow img-fluid" src="/assets/images/Expense.png" ></img>
                    </div>
                    <div className="col-12 col-lg-7 project-desc ">
                        <div>
                            <h4 className="project-item-title">Expense Tracker</h4>
                            <p>A web application which lets you keep a track of your daily expenses incurred. Insert and Delete expenses easily.</p>
                            <p><span className="icons"> <FaReact /> React</span>
                            <span className="icons"><FaNode /> NodeJs/Express</span>
                            <span className="icons"><DiMongodb /> MongoDB</span></p>
                                <button type="button" className="btn  btn-primary"><FaLink /> Live Demo</button>
                                <button type="button" className="btn  btn-primary"><FaGithub /> Source Code</button>
                        </div>
                    </div>
                </div>
                <div className="project-item row">
                    <div className="col-12 col-lg-5 project-item-img">
                        <img className="shadow img-fluid" src="/assets/images/ToDoReact.png" ></img>
                    </div>
                    <div className="col-12 col-lg-7 project-desc ">
                        <div>
                            <h4 className="project-item-title">To Do List</h4>
                            <p>A web application where one can keep a track of their pending tasks. Write down the task and mark it done when completed.</p>
                            <p><span className="icons"><FaReact /> React</span>
                            <span className="icons"><FaBootstrap /> Bootstrap4</span></p>
                            <button type="button" className="btn  btn-primary"><FaLink /> Live Demo</button>
                                <button type="button" className="btn  btn-primary"><FaGithub /> Source Code</button>
                        </div>
                    </div>
                </div>
                <div className="project-item row">
                    <div className="col-12 col-lg-5 project-item-img">
                        <img className="shadow img-fluid" src="/assets/images/tindog.png" ></img>
                    </div>
                    <div className="col-12 col-lg-7 project-desc ">
                        <div>
                            <h4 className="project-item-title">Tin Dog</h4>
                            <p>A responsive, single page website for a fictional application called TinDog which is a dating application for Dogs.</p>
                            <p> <span className="icons"><FaBootstrap />  Bootstrap4</span>
                                <span className="icons"><AiFillHtml5 /> HTML </span>
                                <span className="icons"><FaCss3Alt /> CSS </span>
                                </p>
                                <button type="button" className="btn  btn-primary"><FaLink /> Live Demo</button>
                                <button type="button" className="btn  btn-primary"><FaGithub /> Source Code</button>
                        </div>
                    </div>
                </div>
                <div className="project-item row">
                    <div className="col-12 col-lg-5 project-item-img">
                        <img className="shadow img-fluid" src="/assets/images/Simon.png" ></img>
                    </div>
                    <div className="col-12 col-lg-7 project-desc ">
                        <div>
                            <h4 className="project-item-title">Can you remember it?</h4>
                            <p>A memory game where you have to rememeber the pattern in which tiles were clicked. At each level the patterns become more complicated. </p>
                            <p> <span className="icons"><FaJs /> JavaScript</span>
                                <span className="icons"><AiFillHtml5 /> HTML </span>
                                <span className="icons"><FaCss3Alt /> CSS </span>
                                </p>
                                <button type="button" className="btn  btn-primary"><FaLink /> Live Demo</button>
                                <button type="button" className="btn  btn-primary"><FaGithub /> Source Code</button>
                        </div>
                    </div>
                </div>
                <div className="project-item row last">
                    <div className="col-12 col-lg-5 project-item-img">
                        <img className="shadow img-fluid" src="/assets/images/drum.png" ></img>
                    </div>
                    <div className="col-12 col-lg-7 project-desc ">
                        <div>
                            <h4 className="project-item-title">Drum Kit</h4>
                            <p>Drum kit is basically an implementatin of advanced JavaScript and DOM manipulation. Learn to play drums on your computer! </p>
                            <p> <span className="icons"><FaJs /> JavaScript</span>
                                <span className="icons"><AiFillHtml5 /> HTML </span>
                                <span className="icons"><FaCss3Alt /> CSS </span>
                                </p>
                                <button type="button" className="btn  btn-primary"><FaLink /> Live Demo</button>
                                <button type="button" className="btn  btn-primary"><FaGithub /> Source Code</button>
                        </div>
                    </div>
                </div>
                <div className="text-center find-more"><button className="btn">More Projects <i className="fab fa-github"></i> </button>
                </div>
            </div>
            
            
            </IconContext.Provider>

                
        </>
        
        
    )
}

