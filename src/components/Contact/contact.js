import React, { useRef} from 'react';
import "./contact.css"
import mail from "../../images/mail.png"
import linkedin from "../../images/linkedin.png"
import twitter from "../../images/twitter.png"
import github from "../../images/github.png"
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8wn2lfa', 'template_lactq8j', form.current, {
        publicKey: 'OCvPyP3yRV8w8kNTu',
      })
      .then(
        () => {
          console.log('SUCCESS!');  
          e.target.reset()
          alert("Successfully Submitted")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("try again after some time")
        },
      );
  };

  return (
    <section id='contactPage'>
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">please fill out the form below to discuss any work opportunities</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Your Name' className="name" name="your_name" />
            <input type="email" placeholder='Your Email' className='email' name="your_email" />
            <textarea name="message" placeholder='Message' rows="Your Message" className='msg'></textarea>
            <button type='submit' value="send" className="submitBtn">Submit</button>
            <div className="links">
                <a href="mailto:vigneshraman.dev@gmail.com"><img src={mail} alt="mail" className="link mail"/></a>
                <a href="https://github.com/vickythecode" target='_blank'><img src={github} alt="github" className="link github" /></a>
                <a href="https://www.linkedin.com/in/vignesh-raman-2b242b2b5/" target='_blank'><img src={linkedin} alt="linkedin" className="link linkedin" /></a>
                <a href="https://twitter.com/Vigneshraman45" target='_blank'><img src={twitter} alt="twitter" className="link twitter" /></a>
            </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
