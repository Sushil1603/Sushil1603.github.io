import React from 'react'
import "./intro.css";
import bg from "../../assets/image1.png"

import resume from "../../Resume/Sushil_Sharma_Resume.pdf"

const Intro = () => {

    const handleDownload = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
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
        <section id='intro'>
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Sushil</span> <br />Full Stack Developer</span>
                <p className="introPara">Crafting intuitive interfaces and scalable solutions <br /> with dynamic web development.</p>
                <button  className="desktopMenuBtn" style={{"width" : "6.5rem" , "height" : "2rem"}} onClick={(e) => handleDownload(e)} >
                    Resume
                </button>
            </div>

            <img src={bg} alt="bg Img" className="bg" />
        </section>
    )
}

export default Intro
