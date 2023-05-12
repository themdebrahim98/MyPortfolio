import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import profile from '../img/ebrahim.jpeg'
import './about.css'
import NavBar from '../navigation/NavBar'
import { AiOutlineMail } from 'react-icons/ai'
import CopyRight from '../copyright/CopyRight';


export default function About() {
  return (
    <div className='about-wrapper-large'>
      <NavBar />
      <div className="about">

        <section>
          <div className="profile">
            <img src={profile} alt="" height='410px' width='400px' />
          </div>
          <p>
            I'm a Web Developer who tries to build things from scratch. I am a highly
            self-motivated person and I believe in “Work is Worship”. Once I commit
            myself to a particular task, I make sure I finish it without compromising
            on the quality.
          </p>
          <h2 className='skill-title'>Key Skills</h2>
          <ul className='skill-list'>
            <li>Design, Develop and Deploy an app from scratch to One.</li>
            <li>Implementing new features on existing projects.</li>
            <li>I love to learn new technologies if needed.</li>

          </ul>
          <h2 className='skill-title'>Technological Skills</h2>
          <ul className='skill-list'>
            <li>JavaScript, ReactJS</li>
            <li>Front-End with HTML, CSS, Javascript, ReactJS, Redux.js, Next.js</li>
            <li>Frontend UI with Bootstrap, Material-UI</li>
            <li>Backend with Node.js, Express.js</li>
            <li>Worked with MySQL, MongoDB</li>
            <li>Worked with tools like Git, Github, VS Code, JSON, Markdown</li>
            <li>Has some knowledge on C, C++, Java, Python</li>
          </ul>

          <p>Please find my email id below to connect with me:</p>
          <a href="mailto:mdebrahim742148@gmail.com"><AiOutlineMail /></a>


        </section>
        <CopyRight title={`Md Ebrahim © ${new Date().getFullYear()}`} />
      </div>





    </div>
  )
}
