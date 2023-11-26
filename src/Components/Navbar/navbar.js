import "./Navbar.css"

import { Link } from "react-scroll"
import arrow from "../../assets/arrow.png"
import menu from "../../assets/menu.png"
import { useState } from "react"
import resume from "../../Resume/Sushil_Sharma_Resume.pdf"

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleDownload = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.id = "resume-link-1"
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

        <div className="navbar" id="nav-menu">
            <span className="logo">Sushil</span>
            <div className="desktopMenu">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem nav-link home">Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem nav-link about">About</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem nav-link about">Skills</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem nav-link projects">Projects</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem nav-link contact">Contact Me</Link>
            </div>
           

            <button className="desktopMenuBtn nav-link resume" id="resume-button-1" onClick={(e) => handleDownload(e)} >
                Resume<img src={arrow} className="desktopMenuImg" alt="" />
            </button>

            

            <img src={menu} alt="menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)} >About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact Me</Link>

            </div>
        </div>
    )
}

export default Navbar

