import React, { useRef } from 'react'
import "./contact.css"

import phone from "../../assets/phone.png"
import email from "../../assets/email.png"
import linkedIN from "../../assets/linkedIN.png"
import githubIcon from "../../assets/githubIcon.png"

import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ic8wni7', 'template_w4x35wr', form.current, 'EevUEZZBVVjcgxvBs')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                alert("email sent")

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        

            <section id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Let's connect by Email !</span>

                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Your Name' className="name" name='your_name' />
                    <input type="email" placeholder='Your Email' className="email" name='your_email' />
                    <textarea name="message" cols="30" rows="5" placeholder='Your Message' className='msg'></textarea>
                    <button className="submitBtn" type='submit' value="Send">Submit</button>

                    <div className="contactDetails">
                        <span  id="contact-phone"><img src={phone} alt="Phone" /> &nbsp;&nbsp;&nbsp;  +91 93139 90467</span>
                        <span id="contact-email"><img src={email} alt="Email" /> &nbsp;&nbsp;&nbsp;  sks2669955@gmail.com</span>
                    </div>

                    <div className="links">
                        <a href="https://github.com/Sushil1603" id="contact-github" target='_blank' rel='noreferrer'><img src={githubIcon}  alt="Github" className="link" /></a>
                        <a href="https://www.linkedin.com/in/sushil1603/" id="contact-linkedin" target='_blank' rel='noreferrer'><img src={linkedIN} alt="LinkedIN" className="link" /></a>

                    </div>
                </form>

            </section>
        
    )
}

export default Contact
