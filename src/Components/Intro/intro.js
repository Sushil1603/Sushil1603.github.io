import React from 'react'
import "./intro.css";
import bg from "../../assets/image1.png"

import resume from "../../Resume/Sushil_Sharma_Resume.pdf"

const Intro = () => {

    const handleDownload = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.id = "resume-link-2"
        link.href = resume;
        link.target = '_blank';
        link.rel = 'noreferrer';
        link.download = 'Sushil_Sharma_Resume'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);


        const newWindow = window.open(resume, '_blank');
        if (newWindow) {
            newWindow.opener = null;
        } else {
            // If pop-up is blocked, fallback to direct download
            window.location.href = resume;
        }
    };

    return (
        <section id='home'>
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName" id='user-detail-name'>Sushil Sharma</span> <br />Full Stack Developer</span>
                <p className="introPara" id='user-detail-intro'>Crafting intuitive interfaces and scalable solutions <br /> with dynamic web development.</p>
                <button id='resume-button-2'  className="desktopMenuBtn" style={{"width" : "6.5rem" , "height" : "2rem"}} onClick={(e) => handleDownload(e)} >
                    Resume
                </button>
            </div>

            <img src={bg} alt="bg Img" className="bg home-img" />
        </section>
    )
}

export default Intro
