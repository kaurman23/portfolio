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
                            <a href="https://twitter.com/Manpree16492612"><FaTwitterSquare /></a>
                            <a href="https://t.me/cantbetrusted" ><FaTelegram/></a>
                            <a href="https://www.linkedin.com/in/kaurman/"><FaLinkedin /></a>
                            <a href="https://github.com/kaurman23"><FaGithubSquare /></a>

                    </IconContext.Provider>
                </div>
            </div>
            


        </div>
    
    )
}
