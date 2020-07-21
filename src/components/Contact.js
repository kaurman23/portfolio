import React from 'react';
import { IconContext } from "react-icons";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithubSquare} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




export const Contact = () => {
    return (
        <div id="contact" className="container-fluid contact row">
        
            <div className="contact-content text-align-center  ">
                <h1 className="contact-heading">Hit me up if you'd like to collaborate or discuss books with me!</h1>
                <div className="text-align-center" >
                    <IconContext.Provider value={ {size: '3rem', className: "contact-icons"}}>
                            <a><FaTwitterSquare /></a>
                            <a><FaTelegram/></a>
                            <a><FaLinkedin /></a>
                            <a><FaGithubSquare /></a>

                    </IconContext.Provider>
                </div>
            </div>
            


        </div>
    
    )
}
