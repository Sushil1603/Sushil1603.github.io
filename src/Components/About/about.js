import React from 'react'
import about from "../../assets/about.png"
import "./about.css"

const About = () => {
    return (
        <section id='about' className='about section'>
            <span className='aboutTitle'>Who I Am</span>
            <div className="aboutBars">
                <div className='aboutImg'>
                    <img src={about} alt="About Img" />
                </div>

                <div className='aboutDetail'>
                    <span>"I am a versatile Full Stack Web Developer proficient in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. With a solid grasp of Data Structures and Algorithms in Java, he crafts robust, user-centric solutions. Sushil has a rich portfolio demonstrating his expertise in delivering high-quality projects, showcasing a commitment to innovation and excellence."</span>
                </div>
            </div>
        </section>
    )
}

export default About
