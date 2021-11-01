import React from 'react'
import NavBar from '../navigation/NavBar'
import Home from '../Home'
import './project.css'
import CopyRight from '../copyright/CopyRight'


export default function Project() {
  return (
    <div className='project-wrapper'>
      <NavBar />
      <Home title='2' />
      <section>
        <a href="https://datash-clone2.herokuapp.com/"> <h2>Datash Clone</h2></a>
        <p>Send and receive text or file from one device to another through a browser(using Web Socket) </p>
        <a href=" https://temp-weather-erbrahim.herokuapp.com/"><h2>Whether Check</h2></a>        
        <p>You can Check Wheather in your Area</p>
        <a href=" https://mdebrahim98.github.io/tick-tack-toe/"> <h2>Tic-Tac-Toe</h2></a>
        <p>this is Tic-Tac-Toe Game</p>
        <a href="https://github.com/mdebrahim98"><p>And Many More....</p></a>

        <CopyRight title='Md Ebrahim © 2021' />
      </section>






    </div>
  )
}

