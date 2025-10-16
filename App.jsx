import React from 'react'
import Header from './components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
 const location = useLocation();

 const hideLayout = location.pathname === '/login' || location.pathname === '/register';

  
  return (
    <div className='max-w-3xl mx-auto mt-15'>
   {!hideLayout  && <Header /> }   
<Outlet/>
{!hideLayout && <Footer/>}

    </div>
  )
}

export default App