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
          <p>I am pursuing a B.Tech degree in Computer Science and Engineering from MAKAUT, W.B. 
            I am a Web  and Mern stack developer.I have a passion for learning new technologies by applying my knowledge and skills in a challenging environment. 

          </p>
          <h2 className='skill-title'>Key Skills</h2>
          <ul className='skill-list'>
            <li>Design, Develop and Deploy an app from scratch to One.
            </li>
            <li>I love to learn new technologies if needed.</li>

          </ul>
          <h2 className='skill-title'>Technological Skills</h2>
          <ul className='skill-list'>
            <li>JavaScript</li>
            <li>Frontend with HTML/CSS, JavaScript, ReactJs</li>
            <li>Frontend UI with Bootstrap</li>
            <li>Backend with NodeJS, ExpressJS,</li>
            <li>Worked with MySQL, MongoDB</li>
            <li>c,java,python</li>

          </ul>

          <p>Please find my email id below to connect with me:</p>
          <a href="mailto:mdebrahim742148@gmail.com"><AiOutlineMail /></a>


        </section>
        <CopyRight title="Md Ebrahim © 2021" />
      </div>





    </div>
  )
}
