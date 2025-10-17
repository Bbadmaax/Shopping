import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const[email,setemail]= useState("")
  const [password,setpassword] = useState("")
  const navigate = useNavigate()

const  handlelogin = (event)=> {
     event.preventDefault();

     const users = JSON.parse(localStorage.getItem("users" || "[]"));
     const user = users.find((u)=> u.email === email && u.password === password)
     if(user) {
      localStorage.setItem("currentUser", JSON.stringify(user))
      navigate('/Products')
     }else {
      alert ("invalid username or password")
     }
}

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 rounded-2xl shadow-[15px_-10px_black]'>
   <form onSubmit={handlelogin}
   className='bg-white p-6 rounded shadow-md w-96'>
    <h2 className='text-2xl  font-bold mb-4text-center'>Login</h2>
    <input type='email'
     placeholder='Email'
      value={email}
       onChange={(e)=> setemail(e.target.value)}
       className='w-full p-2 border rounded mb-3 ' required
    />
    <input type='password'
     placeholder='password'
      value={password}
       onChange={(e)=> setpassword(e.target.value)}
       className='w-full p-2 border rounded mb-3 ' required
    />
    <button
     type='submit'
     className='w-full bg-green-500 p-2 rounded text-white hover:bg-green-600'
     >
      Login</button>

<p className='text-center mt-2'>
  Don’t have an account? <Link to="/register" className='text-blue-500 hover:text-blue-600'>Register</Link>
</p>


   </form>
    </div>
  )
}

export default Login