import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


//pages
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import Product from './Pages/Product';


// redux import 
import {Provider} from "react-redux"
import store from './Redux/Store';
import TodoApp from './components/TodoApp';
import PrivateRoute from './components/PrivateRoute';

//login form authentication
import Login from './pages-login/Login';
import Register from './pages-login/Register';



// router setup
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
        { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
  
      {path : "/home", element : <PrivateRoute>< Home /></PrivateRoute>  },
      {path: "/About", element: <PrivateRoute>< About/> </PrivateRoute> },
      {path: "/Contact", element : <PrivateRoute>< Contact /></PrivateRoute>  },
       {path: "/Products", element: <PrivateRoute> < Products/></PrivateRoute> },
      {path : "/Cart", element : <PrivateRoute>< Cart /></PrivateRoute> },
      {path : "Product-detail/:id", element: < Product />},
       {path : "todo", element : <TodoApp/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
    <RouterProvider router={router} >
    </RouterProvider>
     </Provider>
  </StrictMode>
)

