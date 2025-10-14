import React from 'react'
import TodoApp from '../components/TodoApp'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='flex flex-col items-center justify-center mt-26 font-bold text-blue-500'>
      <Link to={"/todo"}> Go the link to make todo app  😜</Link>
    </div>
  )
}

export default About