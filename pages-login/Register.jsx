import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {



  const [name, setname] = useState('')
  const [ email, setemail] = useState("")
  const [password, setpassword] = useState("")
const navigate = useNavigate()

const handlesubmit = (event)=> {
  event.preventDefault();

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const existUser = users.find((u)=> u.email === email) 

  if(existUser) {
 alert ("email alredy registered")
  }else {
 users.push({name,email,password});
    localStorage.setItem("users", JSON.stringify(users))
    alert("signup succefull");
    navigate("/login")
  }
   
}


  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>

      <form onSubmit={handlesubmit}
      className='bg-white p-6 rounded shadow-md w-96'>
        <h2 className='text-2xl font bold mb-4 text-center'>Sign-up</h2>
        <input type='text' placeholder='Name' value={name} onChange={(e)=> setname(e.target.value)}
        className='w-full p-2 border rounded mb-3' required/>

        <input type='email' placeholder='Email' value={email} onChange={(e)=> setemail(e.target.value)}
        className='w-full p-2 border rounded mb-3' required/>

        <input type='password' placeholder='password' value={password} onChange={(e)=> setpassword(e.target.value)}
        className='w-full p-2 border rounded mb-3' required/>
        <button type='submit' 
        className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
        >Signup</button>

    <p className='text-center mt-2'>
  Already have an account? <Link to="/login" className='text-blue-500'>Login</Link>
</p>


      </form>

    </div>
  )
}

export default Register