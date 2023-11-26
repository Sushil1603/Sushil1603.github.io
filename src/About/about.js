import React from 'react'
import "./about.css"

const About = () => {
    return (
        <section id='about' className='about section'>
            <span className='aboutTitle'>Who I Am</span>
            <div className="aboutBars">
                <div className='aboutImg'>
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPWLOij7QSNJxC32-aAtA8raxAmrWRvoI8Qs9t4hIcZqmZLnNg" alt="" />
                </div>

                <div className='aboutDetail'>
                    <span>"I am a versatile Full Stack Web Developer proficient in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. With a solid grasp of Data Structures and Algorithms in Java, he crafts robust, user-centric solutions. Sushil has a rich portfolio demonstrating his expertise in delivering high-quality projects, showcasing a commitment to innovation and excellence."</span>
                </div>
            </div>
        </section>
    )
}

export default About
