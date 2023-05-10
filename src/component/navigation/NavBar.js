import React from 'react'
import './navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="nav">
      <Link className='link' title='About' to='/'>Home</Link>

      <Link className='link' title='About' to='/about'>About</Link>
      <Link className='link' to='/project' title="Project">Project</Link>
      <a className='link' href='https://mdebrahim98.github.io/My-website' title="Blog">Bog</a>
      <a className='link' href='https://drive.google.com/file/d/15k_KD3zSoeQ202y-VYN1ajvp4cwqi3lk/view' title="Resume">Resume</a>
      {/* <Link className='link' to='#' title="Cv">Cv</Link> */}

    </nav>
  )
}
