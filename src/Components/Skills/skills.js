import React from 'react'
import "./skills.css"
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"
import HTML from "../../assets/html.png"
import CSS from "../../assets/css.png"
import JS from "../../assets/js.png"
import react from "../../assets/react.png"
import node from "../../assets/node.png"
import express from "../../assets/express.png"
import mongo from "../../assets/mongo.png"
import vscode from "../../assets/vscode.png"
import github from "../../assets/github.png"
import postman from "../../assets/postman.png"
import GitHubCalendar from "react-github-calendar"


const Skills = () => {
    return (
        <section id="skills">
            <span className='skillTitle'>What I know</span>
            <span className='skillDesc'>Passionate Full Stack Developer proficient in HTML, CSS, JS, React, Redux, Java, excelling in backend development, data structures, and design-driven solutions for intuitive user experiences!</span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>Front End</h2>
                        <div className='frontEndBars'>
                            <div className="frontEndBar skills-card">
                                <img className='skills-card-img' src={HTML} alt="" />
                                <p className='skills-card-name'>HTML</p>
                            </div>
                            <div className="frontEndBar skills-card">
                                <img className='skills-card-img'  src={CSS} alt="" />
                                <p className='skills-card-name'>CSS</p>
                            </div>
                            <div className="frontEndBar skills-card">
                                <img className='skills-card-img'  src={JS} alt="" />
                                <p className='skills-card-name'>JavaScript</p>
                            </div>
                            <div className="frontEndBar skills-card">
                                <img className='skills-card-img'  src={react} alt="" />
                                <p className='skills-card-name'>React</p>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>Back End</h2>
                        <div className='backEndBars'>
                            <div className="backEndBar skills-card">
                                <img className='skills-card-img'  src={node} alt="" />
                                <p className='skills-card-name'>NodeJS</p>
                            </div>
                            <div className="backEndBar skills-card">
                                <img className='skills-card-img'  src={express} alt="" />
                                <p className='skills-card-name'>Express</p>
                            </div>
                            <div className="backEndBar skills-card">
                                <img className='skills-card-img'  src={mongo} alt="" />
                                <p className='skills-card-name'>MongoDB</p>
                            </div>



                        </div>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>Tools</h2>
                        <div className='toolBars'>
                            <div className="toolBar skills-card">
                                <img className='skills-card-img'  src={vscode} alt="" style={{ "width": "110px" }} />
                                <p className='skills-card-name'>VS Code</p>
                            </div>
                            <div className="toolBar skills-card">
                                <img className='skills-card-img'  src={postman} alt="" style={{ "width": "110px" }} />
                                <p className='skills-card-name'>Postman</p>
                            </div>
                            <div className="toolBar skills-card">
                                <img className='skills-card-img'  src={github} alt="" style={{ "width": "110px" }} />
                                <p className='skills-card-name'>Github</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="githubStats">
                <span className='skillTitle'>My Github Stats</span>

                <div className='githubBars'>
                    <div className='githubBar github-streak-stats'>
                        <a href="https://github.com/Sushil1603" target='_blank' rel='noreferrer'><img src="https://github-readme-streak-stats.herokuapp.com?user=sushil1603&theme=transparent&card_width=510" alt="GitHub Streak" /></a>
                    </div>
                    <div className='githubBar github-top-langs'>
                        <a href="https://github.com/Sushil1603" target='_blank' rel='noreferrer'><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sushil1603&theme=transparent&card_width=510" alt="Github top lang" /></a>
                    </div>
                    <div className='githubBar github-stats-card' >
                        <a href="https://github.com/Sushil1603" target='_blank' rel='noreferrer'><img src="https://github-readme-stats.vercel.app/api?username=sushil1603&theme=transparent&card_width=510" alt="Github Stats" /></a>
                    </div>
                    <div className='githubCalendar githubBar react-activity-calendar'>
                        <GitHubCalendar
                            colorScheme={"dark"}
                            blockSize={16}
                            username="sushil1603"
                        />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Skills
