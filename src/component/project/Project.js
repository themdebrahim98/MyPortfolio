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
        <a href="https://github.com/mdebrahim98/WeShare"> <h2>WeShare</h2></a>
        <p>Send and Receive files directly from your browser without any sign ups or logins</p>
        <a href="https://github.com/mdebrahim98/Weatherify"><h2>Weatherify</h2></a>        
        <p>View weather conditions for any city just by typing its name</p>
        <a href="https://github.com/mdebrahim98/xConverter"> <h2>xConverter</h2></a>
        <p>An utility app to convert a file type to a different file type, example: CSV to JSON or vice versa</p>
        <a href="https://github.com/mdebrahim98/Videoshare"> <h2>Videoshare</h2></a>
        <p>A simple video sharing application like YouTube</p>
        <a href="https://github.com/mdebrahim98/TicTacToeAI"> <h2>TicTacToeAI</h2></a>
        <p>A fun tic-tac-toe game which allows you to play it with an AI bot</p>
        <a href="https://github.com/mdebrahim98?tab=repositories"><p>And Many More....</p></a>
        
        <CopyRight title=`Md Ebrahim © ${new Date().getFullYear()}` />
      </section>






    </div>
  )
}

