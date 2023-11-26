import React from 'react';
import "./portfolio.css";

import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.png"
import project4 from "../../assets/project4.png"

const Portfolio = () => {

    return (
        <section id='projects'>
            <h2 className='worksTitle'>My Projects</h2>
            {/* <span className='worksDesc'>I take pride in paying attention to Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum asperiores quia neque porro, laudantium eligendi ratione ducimus fuga eaque.</span> */}

            <div className="projectBars">
                <div className="projectBar project-card">
                    <img src={project1} alt="Glossier" />
                    <p className='project-title'>Glossier</p>
                    <span className='project-description'>
                        "A collaborative venture, Glossier, offers diverse women's beauty essentials—MakeUp Kits, Wintercare products. crafted by a four-member team, redefining beauty"
                    </span>
                    <div className='techs project-tech-stack'><span>Tech Stacks :</span> HTML, CSS, Javascript</div>
                    <div className='links'>
                        <a className='project-github-link' href="https://github.com/Sushil1603/Project-Choice-Rice" rel='noreferrer' target='_blank'>Github Repo</a>
                        <a className="project-deployed-link" href="https://6509a45460bc91008781faa8--incredible-baklava-73dc03.netlify.app/" rel='noreferrer' target='_blank'>Website Link</a>
                    </div>
                </div>

                <div className="projectBar project-card">
                    <img src={project2} alt="Bewakoof" />
                    <p className='project-title'>Bewakoof Clone</p>
                    <span className='project-description'>
                        "Presenting an e-commerce emulation "Clone," an expansive fashion hub catering to men, women, girls, and boys, showcasing an array of trendy products."
                    </span>
                    <div className='techs project-tech-stack'><span>Tech Stacks :</span> HTML, CSS, Javascript</div>
                    <div className='links'>
                        <a className='project-github-link' href="https://github.com/Sushil1603/bewakoof-clone" rel='noreferrer' target='_blank'>Github Repo</a>
                        <a className="project-deployed-link" href="https://snazzy-bublanina-52c88a.netlify.app/index.html" rel='noreferrer' target='_blank'>Website Link</a>
                    </div>
                </div>

                <div className="projectBar project-card">
                    <img src={project3} alt="" />
                    <p className='project-title'>Online Cycle Store</p>
                    <span className='project-description'>
                        "An online store specializing in cycles and accessories, featuring mountain, racing, kids, electric cycles, and user-friendly features like login, signup, and seamless payment."
                    </span>
                    <div className='techs project-tech-stack'><span>Tech Stacks :</span> HTML, CSS, Javascript</div>
                    <div className='links'>
                        <a className='project-github-link' href="https://github.com/Sushil1603/cycle-shop" rel='noreferrer' target='_blank'>Github Repo</a>
                        <a className="project-deployed-link" href="https://64dc7b507eb4113e4aa4919c--relaxed-toffee-9561a5.netlify.app/index.html" rel='noreferrer' target='_blank'>Website Link</a>
                    </div>
                </div>

                <div className="projectBar project-card">
                    <img src={project4} alt="" />
                    <p className='project-title'>Jewelry Store</p>
                    <span className='project-description'>
                        "Crafting an online paradise for exquisite jewelry aficionados, offering an opulent collection of fine jewelry pieces, designed to allure discerning tastes."
                    </span>
                    <div className='techs project-tech-stack'><span>Tech Stacks :</span> React, Redux</div>
                    <div className='links'>
                        <a className='project-github-link' href="https://github.com/Sushil1603/CW-project" rel='noreferrer' target='_blank'>Github Repo</a>
                        <a className="project-deployed-link" href="https://gem-garden-jewelry-store.vercel.app/" rel='noreferrer' target='_blank'>Website Link</a>
                    </div>
                </div>
            </div>

            {/* <button className="workBtn">Show More</button> */}
        </section>
    )
}

export default Portfolio
