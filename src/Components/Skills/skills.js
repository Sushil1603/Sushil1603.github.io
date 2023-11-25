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
                            <div className="frontEndBar">
                                <img src={HTML} alt="" />
                            </div>
                            <div className="frontEndBar">
                                <img src={CSS} alt="" />
                            </div>
                            <div className="frontEndBar">
                                <img src={JS} alt="" />
                            </div>
                            <div className="frontEndBar">
                                <img src={react} alt="" />
                            </div>


                        </div>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>Back End</h2>
                        <div className='backEndBars'>
                            <div className="backEndBar">
                                <img src={node} alt="" />
                            </div>
                            <div className="backEndBar">
                                <img src={express} alt="" />
                            </div>
                            <div className="backEndBar">
                                <img src={mongo} alt="" />
                            </div>
                            


                        </div>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>Tools</h2>
                        <div className='toolBars'>
                            <div className="toolBar">
                                <img src={vscode} alt="" style={{"width" : "110px"}}  />
                            </div>
                            <div className="toolBar">
                                <img src={postman} alt="" style={{"width" : "110px"}} />
                            </div>
                            <div className="toolBar">
                                <img src={github} alt="" style={{"width" : "110px"}}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
