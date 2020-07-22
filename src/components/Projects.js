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
import uppersvg from '../assets/images/design2.svg';
import expenseImg from "../assets/images/Expense.png";
import todoImg from "../assets/images/ToDoReact.png";
import tindogImg from "../assets/images/tindog.png";
import simonImg from "../assets/images/Simon.png";
import drumImg from "../assets/images/drum.png";

export const Projects = () => {
    return (
        <>
        <IconContext.Provider value={ {size: '20px'}}>

            <div className="project-svj">
                <img src={uppersvg} alt="project-background-svj" className="upper-svj" ></img>
            </div>
            <div id="projects"  className="text-center project">
                <h1 className="project-title"><span>P</span>rojects</h1>
            </div>
            <div className="project-content">
                <div className="project-item row">
                    <div className="col-12 col-lg-5 project-item-img">
                        <img className="shadow img-fluid" alt="expenseTracker" src={expenseImg} ></img>
                    </div>
                    <div className="col-12 col-lg-7 project-desc ">
                        <div>
                            <h4 className="project-item-title">Expense Tracker</h4>
                            <p>A web application which lets you keep a track of your daily expenses incurred. Insert and Delete expenses easily.</p>
                            <p className="icon-parent"><span className="icons"> <FaReact /> React</span>
                            <span className="icons"><FaNode /> NodeJs/Express</span>
                            <span className="icons"><DiMongodb /> MongoDB</span></p>
                            <div className="link-buttons">
                                <a type="button" className="btn  btn-primary" href="https://expensetrackerreact.herokuapp.com/"><FaLink /> Live Demo</a>
                                <a type="button" className="btn  btn-primary" href="https://github.com/kaurman23/react-expense-tracker"><FaGithub /> Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-item row">
                    <div className="col-12 col-lg-5 project-item-img">
                        <img className="shadow img-fluid" src={todoImg} alt="todolist" ></img>
                    </div>
                    <div className="col-12 col-lg-7 project-desc ">
                        <div>
                            <h4 className="project-item-title">To Do List</h4>
                            <p>A web application where one can keep a track of their pending tasks. Write down the task and mark it done when completed.</p>
                            <p className="icon-parent"><span className="icons"><FaReact /> React</span>
                            <span className="icons"><FaBootstrap /> Bootstrap4</span></p>
                            <div className="link-buttons">
                            <a type="button" className="btn  btn-primary" href="https://optimistic-saha-5865ba.netlify.app/"><FaLink /> Live Demo</a>
                            <a type="button" className="btn  btn-primary" href="https://github.com/kaurman23/react-todo-list"><FaGithub /> Source Code</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-item row">
                    <div className="col-12 col-lg-5 project-item-img">
                        <img className="shadow img-fluid" alt="tindog" src={tindogImg} ></img>
                    </div>
                    <div className="col-12 col-lg-7 project-desc ">
                        <div>
                            <h4 className="project-item-title">Tin Dog</h4>
                            <p>A responsive, single page website for a fictional application called TinDog which is a dating application for Dogs.</p>
                            <p className="icon-parent"> <span className="icons"><FaBootstrap />  Bootstrap4</span>
                                <span className="icons"><AiFillHtml5 /> HTML </span>
                                <span className="icons"><FaCss3Alt /> CSS </span>
                                </p>
                                <div className="link-buttons">
                                <a type="button" className="btn  btn-primary" href="https://kaurman23.github.io/tindog/"><FaLink /> Live Demo</a>
                                <a type="button" className="btn  btn-primary" href="https://github.com/kaurman23/tindog"><FaGithub /> Source Code</a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="project-item row">
                    <div className="col-12 col-lg-5 project-item-img">
                        <img className="shadow img-fluid" alt="simongame" src={simonImg} ></img>
                    </div>
                    <div className="col-12 col-lg-7 project-desc ">
                        <div>
                            <h4 className="project-item-title">Can you remember it?</h4>
                            <p>A memory game where you have to rememeber the pattern in which tiles were clicked. At each level the patterns become more complicated. </p>
                            <p className="icon-parent"> <span className="icons"><FaJs /> JavaScript</span>
                                <span className="icons"><AiFillHtml5 /> HTML </span>
                                <span className="icons"><FaCss3Alt /> CSS </span>
                                </p>
                                <div className="link-buttons">
                                <a type="button" className="btn  btn-primary" href="https://kaurman23.github.io/simon-game/"><FaLink /> Live Demo</a>
                                <a type="button" className="btn  btn-primary" href="https://github.com/kaurman23/simon-game"><FaGithub /> Source Code</a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="project-item row last">
                    <div className="col-12 col-lg-5 project-item-img">
                        <img className="shadow img-fluid" alt="drumkit" src={drumImg} ></img>
                    </div>
                    <div className="col-12 col-lg-7 project-desc ">
                        <div>
                            <h4 className="project-item-title">Drum Kit</h4>
                            <p >Drum kit is basically an implementatin of advanced JavaScript and DOM manipulation. Learn to play drums on your computer! </p>
                            <p className="icon-parent"> <span className="icons"><FaJs /> JavaScript</span>
                                <span className="icons"><AiFillHtml5 /> HTML </span>
                                <span className="icons"><FaCss3Alt /> CSS </span>
                                </p>
                                <div className="link-buttons">
                                <a type="button" className="btn  btn-primary" href="https://kaurman23.github.io/drumkit/"><FaLink /> Live Demo</a>
                                <a type="button" className="btn  btn-primary" href="https://github.com/kaurman23/drumkit"><FaGithub /> Source Code</a>

                                </div>
                        </div>
                    </div>
                </div>
                <div className="text-center find-more"><a className="btn" href="https://github.com/kaurman23">More Projects <i className="fab fa-github"></i> </a>
                </div>
            </div>
            
            
            </IconContext.Provider>

                
        </>
        
        
    )
}

