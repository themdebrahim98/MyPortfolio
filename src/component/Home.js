import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillFacebook, AiFillInstagram,AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CopyRight from './copyright/CopyRight';
import './home.css'
import profile from './img/ebrahim.jpeg'
import NavBar from './navigation/NavBar';

export default function Home({title}) {
	return (
		<div className="wrapper-large">
			<div className="home">

				<header className="header-home">
					<a href="#"><img src={profile} alt="ebrahim" /></a>
					<h1 className='title'>Md Eabrahim</h1>
					<h2 className="description">Enthusiast in Web Development</h2>
					<div className="social-links">
						<a className='link' target='_blank'  href="mailto:mdebrahim742148@gmail.com"><AiOutlineMail /></a>
						<a className='link' target='_blank' href="https://github.com/mdebrahim98"><AiFillGithub /></a>
						<a className='link' target='_blank' href="https://www.linkedin.com/in/mdebrahim98"><AiFillLinkedin /></a>
						<a className='link' target='_blank' href="https://twitter.com/Md_Ebrahim98"><AiFillTwitterCircle /></a>
						<a className='link' target='_blank' href="https://www.facebook.com/ebrahim742148"><AiFillFacebook /></a>
						<a className='link' target='_blank' href="https://www.instagram.com/md_ebrahim98"><AiFillInstagram /></a>

					</div>
				</header>

				<NavBar />


			</div>
			<CopyRight title={title?null: `Md Ebrahim © ${new Date().getFullYear()}`}/>
		


		</div>

	)
}
